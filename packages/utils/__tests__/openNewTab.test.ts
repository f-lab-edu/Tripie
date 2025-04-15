import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import openNewTab from '../src/window/openNewTab';

describe('openNewTab', () => {
  beforeAll(() => {
    vi.stubGlobal('window', {
      open: vi.fn(),
    } as unknown as Window & typeof globalThis);
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it('should open a new tab with provided URL', () => {
    const url = 'https://example.com';
    openNewTab(url);
    expect(window.open).toHaveBeenCalledWith(url, '_blank', 'noopener,noreferrer');
  });

  it('should not throw error when window.open is nullish.', () => {
    vi.spyOn(window, 'open').mockImplementationOnce(() => null);
    expect(() => openNewTab('https://example.com')).not.toThrow();
  });

  it('should only call window.open in browser environment', () => {
    const originalWindow = global.window;
    vi.stubGlobal('window', undefined);

    expect(() => openNewTab('https://example.com')).not.toThrow();

    vi.restoreAllMocks();
    global.window = originalWindow;
  });
});
