import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import yearlyCalendar from '../src/date/yearlyCalendar';

describe('yearlyCalendar', () => {
  beforeEach(() => {
    const date = new Date('2025-04-15T04:06:56.299Z');

    vi.useFakeTimers();
    vi.setSystemTime(date);

    expect(Date.now()).toBe(date.valueOf());
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.restoreAllMocks();
  });

  it('should return 13 months starting from current month', () => {
    const baseDate = new Date('2025-04-15T04:06:56.299Z');
    const calendar = yearlyCalendar('2025-04-15T04:06:56.299Z');

    // 기본 길이 테스트
    expect(calendar).toHaveLength(13);

    // 각 항목 테스트
    calendar.forEach((item, index) => {
      const expectedMonth = (baseDate.getMonth() + index) % 12;
      const expectedYear = baseDate.getFullYear() + Math.floor((baseDate.getMonth() + index) / 12);

      // 날짜가 유효한 날짜인지 확인
      expect(item.days.getMonth()).toBe(expectedMonth);
      expect(item.days.getFullYear()).toBe(expectedYear);

      // 유효한 날짜인지 확인 (달의 마지막 날보다 클 수 없음)
      const lastDayOfMonth = new Date(expectedYear, expectedMonth + 1, 0).getDate();
      expect(item.days.getDate()).toBeLessThanOrEqual(lastDayOfMonth);
    });
  });

  it('should have min date as today and max date as 1 year from today', () => {
    const calendar = yearlyCalendar();

    const min = new Date().toISOString();

    const nextYear = new Date('2026-04-15T04:06:56.299Z').toISOString();
    vi.setSystemTime(nextYear);
    const max = new Date().toISOString();

    calendar.forEach(item => {
      expect(item.min.toISOString()).toBe(min);
      expect(item.max.toISOString()).toBe(max);
    });
  });

  it('should default to today if no date string is passed', () => {
    const now = new Date();
    const calendar = yearlyCalendar();

    expect(calendar[0].min.toDateString()).toBe(now.toDateString());
  });
});
