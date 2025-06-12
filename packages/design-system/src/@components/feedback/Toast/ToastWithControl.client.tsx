'use client';

import { classNames, Motion } from '../../../wrappers';

import TripieContainer from '@core/layout/TripieContainer';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { COLORS } from 'shared';
import { ToastProps } from './Toast.client';
import Style from './toast.module.scss';
import { toastMotion, toastPosition } from './variants';

const cx = classNames.bind(Style);

export type ToastPosition = 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-left' | 'bottom-right';
export type ToastBtnPosition = ToastPosition | 'left-center' | 'right-center';

const ToastWithControl = ({
  full = false,
  position = 'bottom-right',
  children,
  className,
  visualDuration = 0.5,
  withBorder = true,
  toastColor = COLORS['50'],
  btnPosition,
  isOpen,
  animate,
  toggleOpen,
  autoHideDuration = Infinity, // in milliseconds
  ...args
}: Omit<ToastProps, 'toggleOpen'> & { toggleOpen: Dispatch<SetStateAction<boolean>> }) => {
  const toastRef = useRef<HTMLDivElement>(null);

  // autoHideDuration를 설정하면 해당 시간 경과 후 사라지도록 디폴트로는 닫기 버튼을 누르기 전까지는 사라지지 않는다.
  useEffect(() => {
    if (typeof autoHideDuration === 'number' && isFinite(autoHideDuration)) {
      const timer = setTimeout(() => toggleOpen(false), autoHideDuration * 1_000);
      return () => clearTimeout(timer);
    }
  }, [autoHideDuration]);

  const clickAway = () => {
    console.log('clicked?', isOpen);
    if (autoHideDuration === Infinity && isOpen) {
      toggleOpen(false);
    }
  };

  console.log('toastColor', toastColor);

  return (
    <>
      {isOpen ? (
        <TripieContainer
          onClick={clickAway}
          margin="none"
          padding="none"
          className={cx('background')}
          zIndex="default"
        />
      ) : null}
      <Motion.Div
        className={cx(`with${withBorder ? '' : '-no'}-border`, 'toast-body', className)}
        initial={'initial'}
        animate={animate}
        variants={toastMotion[position]}
        transition={{ type: 'spring', visualDuration }}
        style={{
          ...(position === 'bottom-center' || position == 'top-center' ? { left: '50%', translateX: '-50%' } : null),
          width: full ? '100%' : 'fit-content',
          position: 'fixed',
          backgroundColor: toastColor,
          color: toastColor === COLORS['50'] || toastColor === COLORS['0'] ? COLORS['500'] : 'inherit',
          ...toastPosition[position],
        }}
      >
        <TripieContainer
          tabIndex={0}
          ref={toastRef}
          margin={'l'}
          {...args}
          alignItems="center"
          justifyContent="center"
          zIndex="notification"
        >
          {children}
        </TripieContainer>
      </Motion.Div>
    </>
  );
};

export default ToastWithControl;
