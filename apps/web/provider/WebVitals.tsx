'use client';

import { useReportWebVitals } from 'next/web-vitals';

export default function WebVitals() {
  useReportWebVitals(metric => {
    if (process.env.NODE_ENV === 'development') {
      console.log(metric);
    }
  });
  return <></>;
}
