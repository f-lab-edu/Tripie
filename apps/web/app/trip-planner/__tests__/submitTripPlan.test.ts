import ky from 'ky';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest';

// ky's prefixUrl '/api' is a relative URL — not resolvable in Node.js test env.
// Provide an absolute prefixUrl so MSW can intercept the request.
vi.mock('utils/ky', () => ({
  default: ky.extend({ prefixUrl: 'http://localhost/api/' }),
}));

import { submitTripPlan } from '../api';

const OPENAI_ENDPOINT = 'http://localhost/api/openai';

const mockContext = {
  continent: 'ALL' as const,
  country: 'Japan',
  city: { all: ['Tokyo', 'Osaka', 'Kyoto'], selected: ['Tokyo', 'Osaka'] },
  duration: '5 days',
  companion: 'couple',
  preference: 'food',
};

const server = setupServer();

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('submitTripPlan', () => {
  it('returns trip id on success', async () => {
    server.use(
      http.post(OPENAI_ENDPOINT, () =>
        HttpResponse.json({ message: 'Success', data: { id: 'trip-123' } })
      )
    );

    const id = await submitTripPlan(mockContext, 'user-1');
    expect(id).toBe('trip-123');
  });

  it('sends ip when provided (test user flow)', async () => {
    let capturedBody: Record<string, unknown> = {};

    server.use(
      http.post(OPENAI_ENDPOINT, async ({ request }) => {
        capturedBody = (await request.json()) as Record<string, unknown>;
        return HttpResponse.json({ message: 'Success', data: { id: 'trip-456' } });
      })
    );

    await submitTripPlan(mockContext, 'user-1', '192.168.0.1');
    expect(capturedBody.ip).toBe('192.168.0.1');
    expect(capturedBody.id).toBe('user-1');
  });

  it('returns null when id is not provided', async () => {
    const id = await submitTripPlan(mockContext, null as unknown as string);
    expect(id).toBeNull();
  });

  it('throws on rate limit (429)', async () => {
    server.use(
      http.post(OPENAI_ENDPOINT, () =>
        HttpResponse.json({ error: 'Too many requests' }, { status: 429 })
      )
    );

    await expect(submitTripPlan(mockContext, 'user-1')).rejects.toThrow();
  });

  it('throws on token limit exceeded (403)', async () => {
    server.use(
      http.post(OPENAI_ENDPOINT, () =>
        HttpResponse.json({ error: 'Token limit exceeded' }, { status: 403 })
      )
    );

    await expect(submitTripPlan(mockContext, 'user-1')).rejects.toThrow();
  });
});
