'use client';

import API from 'constants/api-routes';
import { useEffect, useMemo, useState } from 'react';

const useServerTime = (baseTime?: string) => {
  const [serverTime, setServerTime] = useState<string>('');
  const [date, setDate] = useState<Date>();
  const [today, setToday] = useState<Date>();
  const [dayOfToday, setDayOfToday] = useState<number>();

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetch(`${API.BASE}${API.SERVER_TIME}`).then(v => v.json());
      setServerTime(response.serverTime);
      setDate(new Date(response.serverTime));
      setToday(new Date(response.serverTime));
      setDayOfToday(new Date(response.serverTime).getDay());
    }, 10_000); // 매 10 초마다 갱신

    return () => clearInterval(interval);
  }, []);

  const isValidTime: boolean | 'loading' = useMemo(() => {
    if (baseTime == null || serverTime == null) {
      return 'loading';
    } else {
      return baseTime >= serverTime;
    }
  }, [baseTime, serverTime]);

  return { serverTime, isValidTime, date, today, dayOfToday };
};
export default useServerTime;
