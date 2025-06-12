'use client';

import { TripieContainerProps } from '@core/layout/TripieContainer';
import { useEffect, useState } from 'react';
import Toast from './Toast.client';

export type ToastPosition = 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-left' | 'bottom-right';
export type ToastBtnPosition = ToastPosition | 'left-center' | 'right-center';

export type ToastProps = Readonly<
  {
    position?: ToastPosition;
    full?: boolean;
    visualDuration?: number;
    toastColor?: string;
    withCloseButton?: boolean;
    btnPosition?: ToastBtnPosition;
    isOpen?: boolean;
    autoHideDuration?: number;
    toggleOpen?: (index?: number) => void;
  } & Partial<TripieContainerProps>
>;

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
