'use client';

import { classNames } from '../../../../wrappers';

import TripieContainer from '@core/layout/TripieContainer';

import { Dispatch, SetStateAction, useEffect } from 'react';
import { ToastProps } from '../Toast.client';
import Style from './toast-background.module.scss';

const cx = classNames.bind(Style);

const ToastBackGround = ({
  className,
  toggleOpen,
  isOpen,
  autoHideDuration = Infinity, // in milliseconds
}: Omit<ToastProps, 'toggleOpen'> & { toggleOpen: Dispatch<SetStateAction<boolean>> }) => {
  // autoHideDuration를 설정하면 해당 시간 경과 후 사라지도록 디폴트로는 닫기 버튼을 누르기 전까지는 사라지지 않는다.
  useEffect(() => {
    if (typeof autoHideDuration === 'number' && isFinite(autoHideDuration)) {
      const timer = setTimeout(() => toggleOpen(false), autoHideDuration * 1_000);
      return () => clearTimeout(timer);
    }
  }, [autoHideDuration]);

  const clickAway = () => {
    if (autoHideDuration === Infinity && isOpen) {
      toggleOpen(false);
    }
  };

  return (
    <TripieContainer
      onClick={clickAway}
      margin="none"
      padding="none"
      className={cx('background', className)}
      zIndex="default"
    />
  );
};

export default ToastBackGround;
