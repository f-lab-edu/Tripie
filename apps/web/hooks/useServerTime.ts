'use client';

import API from 'constants/api-routes';
import { useEffect, useMemo, useState } from 'react';

const useServerTime = (baseTime?: string) => {
  const [serverTime, setServerTime] = useState<string>('');
  const [date, setDate] = useState<Date>();
  const [today, setToday] = useState<Date>();

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetch(`${API.BASE}${API.SERVER_TIME}`).then(v => v.json());
      setServerTime(response.serverTime);
      setDate(new Date(response.serverTime));
      setToday(new Date(response.serverTime));
    }, 10_000); // 매 10 초마다 갱신

    return () => clearInterval(interval);
  }, []);

  const isValidTime = useMemo(() => {
    if (baseTime == null || serverTime == null) {
      return false;
    } else {
      return baseTime < serverTime;
    }
  }, [baseTime, serverTime]);

  return { serverTime, isValidTime, date, today };
};
export default useServerTime;
