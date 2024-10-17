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
