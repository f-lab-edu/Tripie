'use client';

import { useEffect, useState } from 'react';
import Toast, { ToastProps } from './Toast.client';

export type ToastWithPromiseProps = Readonly<
  {
    promise: Promise<any>;
  } & ToastProps
>;

// 비동기 작업 후 제거
const ToastWithPromise = ({
  full = false,
  position = 'bottom-right',
  children,
  className,
  visualDuration = 0.5,
  promise,
}: ToastWithPromiseProps) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (promise != null) {
      let cancelled = false;
      promise.finally(() => {
        if (!cancelled) setVisible(false);
      });

      return () => {
        cancelled = true;
      };
    }
  }, [promise]);

  if (!visible) return null;
  return (
    <Toast visualDuration={visualDuration} full={full} position={position} className={className}>
      {children}
    </Toast>
  );
};

export default ToastWithPromise;
