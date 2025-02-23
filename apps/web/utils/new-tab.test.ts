import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { openNewTab } from './new-tab';

describe('openNewTab', () => {
  beforeAll(() => {
    vi.stubGlobal('window', {
      open: vi.fn(),
    } as unknown as Window & typeof globalThis);
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it('제공되는 URL을 새로운 탭에서 열어야 한다.', () => {
    const url = 'https://example.com';
    openNewTab(url);
    expect(window.open).toHaveBeenCalledWith(url, '_blank', 'noopener,noreferrer');
  });

  it('window.open이 nullish할 경우 에러를 던지면 안 된다.', () => {
    vi.spyOn(window, 'open').mockImplementationOnce(() => undefined);
    expect(() => openNewTab('https://example.com')).not.toThrow();
  });

  it('브라우저 환경이 아닌 경우 window.open이 호출되지 않아야 한다.', () => {
    const originalWindow = global.window;
    vi.stubGlobal('window', undefined);

    expect(() => openNewTab('https://example.com')).not.toThrow();

    vi.restoreAllMocks();
    global.window = originalWindow;
  });
});
