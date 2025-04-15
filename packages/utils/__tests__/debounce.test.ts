import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import debounce from '../src/debounce/debounce';

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.restoreAllMocks();
  });

  it('should call the function after the delay', () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, 1000);

    debouncedFn();
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1000);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should call the function only once if called multiple times within delay', () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, 1000);

    debouncedFn();
    vi.advanceTimersByTime(500);
    debouncedFn();
    vi.advanceTimersByTime(500);
    debouncedFn();
    vi.advanceTimersByTime(999); // Not enough yet
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1); // Now we hit 1000ms since last call
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should pass the latest arguments to the debounced function', () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, 1000);

    debouncedFn('first');
    debouncedFn('second');

    vi.advanceTimersByTime(1000);

    expect(fn).toHaveBeenCalledWith('second');
  });
});
