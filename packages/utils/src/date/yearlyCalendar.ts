/**
 * 1년 달력. 달력 최소/최대를 오늘을 기준으로 1년만 보이도록 합니다.
 */
const yearlyCalendar = (str?: string) => {
  const today = str ? new Date(str) : new Date();
  let thisYear = today.getFullYear();
  let thisMonth = today.getMonth();
  let thisDay = today.getDate();
  let thisHours = today.getHours();
  let thisMinutes = today.getMinutes();
  let thisSeconds = today.getSeconds();
  let thisMilliSeconds = today.getMilliseconds();

  return Array.from({ length: 13 }, (_, index) => {
    const month = (thisMonth + index) % 12;
    const year = thisYear + Math.floor((thisMonth + index) / 12);

    // 해당 달의 유효한 마지막 날
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    const validDay = Math.min(thisDay, lastDayOfMonth);

    return {
      days: new Date(year, month, validDay, thisHours, thisMinutes, thisSeconds, thisMilliSeconds),
      max: new Date(thisYear + 1, thisMonth, thisDay, thisHours, thisMinutes, thisSeconds, thisMilliSeconds),
      min: new Date(thisYear, thisMonth, thisDay, thisHours, thisMinutes, thisSeconds, thisMilliSeconds),
    };
  });
};
export default yearlyCalendar;
