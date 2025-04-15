'use client';

import { yearlyCalendar } from '@tripie-pyotato/utils/@date';
import { useEffect, useMemo, useState } from 'react';

const useCalendar = ({
  serverTime,
  isValidTime,
  selectedTime,
}: {
  serverTime: string;
  isValidTime: boolean | 'loading';
  selectedTime?: Date[] | Date | (() => Date | Date[]);
}) => {
  const [calendar, setCalendar] = useState(yearlyCalendar(serverTime));

  // 만약 달력이 선택 가능한 기간이 아니라면 변경
  useEffect(() => {
    if (isValidTime !== true && serverTime != null) {
      setCalendar(() => yearlyCalendar(serverTime));
    }
  }, [isValidTime, serverTime]);

  const calendarFormatTime = useMemo(() => {
    if (serverTime == '') {
      return new Date();
    }

    return new Date(serverTime);
  }, [serverTime]);

  const [selected, setSelected] = useState<Date[] | Date>(
    selectedTime == null || isValidTime !== true ? calendarFormatTime : selectedTime
  );

  /**
   *  여행 시작과 끝 날짜를 memoize한 값
   *  */
  const duration = useMemo(() => {
    const dates = selected?.toLocaleString().split(',');
    // 시작과 끝 날짜를 정한 경우
    if (dates.length === 4) {
      const [startDate, startTime, endDate, endTime] = dates;
      return { start: startDate + startTime, end: endDate + endTime };
    } else if (dates.length === 2) {
      const [startDate, startTime] = dates;
      return { start: startDate + startTime, end: '' };
    } else {
      return { start: '', end: '' };
    }
  }, [selected, selected, serverTime]);

  return { calendar, setCalendar, duration, selected, setSelected, isValidTime, calendarFormatTime };
};

export default useCalendar;
