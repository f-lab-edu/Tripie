import { afterEach, describe, expect, it, vi } from 'vitest';
import { checkRateLimit } from '../rateLimit';

// Firestore를 in-memory Map으로 mock
const store = new Map<string, { count: number; resetTime: number }>();

vi.mock('../../firebase', () => ({
  default: {
    checkRateLimit: async (
      _collection: string,
      identifier: string,
      config: { windowMs: number; maxRequests: number }
    ) => {
      const now = Date.now();
      const record = store.get(identifier);

      if (!record || now > record.resetTime) {
        const resetTime = now + config.windowMs;
        store.set(identifier, { count: 1, resetTime });
        return { allowed: true, remaining: config.maxRequests - 1, resetTime };
      }

      if (record.count >= config.maxRequests) {
        return { allowed: false, remaining: 0, resetTime: record.resetTime, retryAfterMs: record.resetTime - now };
      }

      record.count++;
      return { allowed: true, remaining: config.maxRequests - record.count, resetTime: record.resetTime };
    },
  },
}));

let counter = 0;
const uid = () => `test-ip-${counter++}`;

afterEach(() => {
  store.clear();
  vi.useRealTimers();
});

describe('checkRateLimit', () => {
  it('allows first request', async () => {
    const result = await checkRateLimit(uid(), { windowMs: 60_000, maxRequests: 3 });
    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(2);
  });

  it('decrements remaining on each request within window', async () => {
    const id = uid();
    const config = { windowMs: 60_000, maxRequests: 3 };
    await checkRateLimit(id, config);
    const result = await checkRateLimit(id, config);
    expect(result.remaining).toBe(1);
  });

  it('blocks request after limit is reached', async () => {
    const id = uid();
    const config = { windowMs: 60_000, maxRequests: 3 };
    await checkRateLimit(id, config);
    await checkRateLimit(id, config);
    await checkRateLimit(id, config);

    const result = await checkRateLimit(id, config);
    expect(result.allowed).toBe(false);
    expect(result.remaining).toBe(0);
    expect(result.retryAfterMs).toBeGreaterThan(0);
  });

  it('allows again after time window expires', async () => {
    vi.useFakeTimers();
    const id = uid();
    const config = { windowMs: 1_000, maxRequests: 1 };

    await checkRateLimit(id, config);
    expect((await checkRateLimit(id, config)).allowed).toBe(false);

    vi.advanceTimersByTime(1_001);
    expect((await checkRateLimit(id, config)).allowed).toBe(true);
  });

  it('returns retryAfterMs when blocked', async () => {
    const id = uid();
    const config = { windowMs: 60_000, maxRequests: 1 };
    await checkRateLimit(id, config);

    const result = await checkRateLimit(id, config);
    expect(result.retryAfterMs).toBeGreaterThan(0);
    expect(result.retryAfterMs).toBeLessThanOrEqual(60_000);
  });
});
