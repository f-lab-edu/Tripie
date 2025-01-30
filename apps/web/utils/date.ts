import { LOCAL } from 'constants/local';

/**
 * toLocaleString으로 변환주었던 시간을 다시 Date으로 변환해줍니다.
 */
export const localeString2Date = (localStringDate: string[], local?: string) => {
  if (local === LOCAL.KR) {
    return localStringDate.map(date => {
      const [YY, MM, DD, timeStr] = date.split('. ');
      let [_, time] = timeStr.split(' ');
      let [hh, mm, ss] = time.split(':');
      return new Date(+YY, +MM - 1, +DD, +hh, +mm, +ss);
    });
  } else {
    return localStringDate.map(date => {
      const [MMDDYY, timeStr, amPm] = date.split(' ');
      const [MM, DD, YY] = MMDDYY.split('/');
      let [hh, mm, ss] = timeStr.split(':');
      return new Date(+YY, +MM - 1, +DD, amPm === 'PM' ? 12 + +hh : +hh, +mm, +ss);
    });
  }
};

/**
 * 1년 달력. 달력 최소/최대를 오늘을 기준으로 1년만 보이도록 합니다.
 */
export const yearlyCalendar = (str?: string) => {
  const today = str ? new Date(str) : new Date();
  let thisYear = today.getFullYear();
  let thisMonth = today.getMonth();
  let thisDay = today.getDate();

  return Array.from({ length: 13 }, (_, index) => {
    const month = (thisMonth + index) % 12;
    const year = thisYear + Math.floor((thisMonth + index) / 12);

    // 해당 달의 유효한 마지막 날
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    const validDay = Math.min(thisDay, lastDayOfMonth);

    return {
      days: new Date(year, month, validDay),
      max: new Date(thisYear + 1, thisMonth, thisDay),
      min: new Date(thisYear, thisMonth, thisDay),
    };
  });
};
