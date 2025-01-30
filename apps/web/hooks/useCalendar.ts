'use client';

import { useEffect, useMemo, useState } from 'react';
import { yearlyCalendar } from 'utils/date';
import useServerTime from './useServerTime';

const useCalendar = (baseTime?: string) => {
  const { serverTime, isValidTime } = useServerTime(baseTime);
  const [calendar, setCalendar] = useState(yearlyCalendar(serverTime));

  // 만약 달력이 선택 가능한 기간이 아니라면 변경
  useEffect(() => {
    if (!isValidTime && serverTime != null) {
      setCalendar(() => yearlyCalendar(serverTime));
    }
  }, [isValidTime, serverTime]);

  const calendarFormatTime = useMemo(() => {
    if (serverTime == '') {
      return new Date();
    }

    return new Date(serverTime);
  }, [serverTime]);

  return { calendar, serverTime, setCalendar, isValidTime, calendarFormatTime };
};
export default useCalendar;
