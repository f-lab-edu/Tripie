'use client';
// https://mui.com/joy-ui/react-snackbar/ 참고
import { classNames, Motion, MotionProps } from '../../../wrappers';

import TripieContainer, { TripieContainerProps } from '@core/layout/TripieContainer';
import { useCycle } from '@hooks';
import { useEffect, useMemo, useRef } from 'react';
import { COLORS } from 'shared';
import Style from './toast.module.scss';

import ToastButton from './Button/ToastButton.client';
import ToastWithControl from './ToastWithControl.client';
import ToastWithPromise from './ToastWithPromise.client';
import { toastMotion, toastPosition } from './variants';

const cx = classNames.bind(Style);

export type ToastPosition = 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-left' | 'bottom-right';
export type ToastBtnPosition = ToastPosition | 'left-center' | 'right-center';

export type ToastProps = Readonly<
  {
    position?: ToastPosition;
    interactable?: boolean;
    full?: boolean;
    visualDuration?: number;
    toastColor?: string;
    withCloseButton?: boolean;
    btnPosition?: ToastBtnPosition;
    isOpen?: boolean;
    autoHideDuration?: number;
    animate?:
      | boolean
      | MotionProps['VariantLabels']
      | MotionProps['AnimationControls']
      | MotionProps['TargetAndTransition'];
    toggleOpen?: (index?: number) => void;
  } & Partial<TripieContainerProps>
>;

const Toast = ({
  full = false,
  interactable = false,
  position = 'bottom-right',
  children,
  className,
  visualDuration = 0.5,
  withCloseButton = true,
  withBorder = true,
  toastColor = COLORS[50],
  btnPosition,
  autoHideDuration = Infinity, // in milliseconds
  ...args
}: ToastProps) => {
  const toastRef = useRef<HTMLDivElement>(null);
  const [isOpen, toggleOpen] = useCycle([true, false]);

  // autoHideDuration를 설정하면 해당 시간 경과 후 사라지도록 디폴트로는 닫기 버튼을 누르기 전까지는 사라지지 않는다.
  useEffect(() => {
    if (typeof autoHideDuration === 'number' && isFinite(autoHideDuration)) {
      const timer = setTimeout(() => toggleOpen(1), autoHideDuration * 1_000);
      return () => clearTimeout(timer);
    }
  }, [autoHideDuration]);

  const clickAway = () => {
    if (autoHideDuration === Infinity && isOpen) {
      toggleOpen(1);
    }
  };

  const defaultBtnPosition = useMemo(() => {
    if (btnPosition == null) {
      switch (position) {
        case 'top-left':
          return 'right-center';
        case 'top-center':
          return 'bottom-center';
        case 'top-right':
          return 'left-center';
        case 'bottom-center':
          return 'top-center';
        case 'bottom-right':
          return 'top-left';
        default:
          return 'top-right';
      }
    }
    return btnPosition;
  }, [position, btnPosition]);

  return (
    <>
      {!interactable && isOpen ? (
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
        animate={isOpen ? 'animate' : 'initial'}
        variants={toastMotion[position]}
        transition={{ type: 'spring', visualDuration }}
        style={{
          ...(position === 'bottom-center' || position == 'top-center' ? { left: '50%', translateX: '-50%' } : null),
          width: full ? '100%' : 'fit-content',
          position: 'fixed',
          backgroundColor: toastColor,
          color: 'inherit',
          ...toastPosition[position],
        }}
      >
        {withCloseButton && (defaultBtnPosition.startsWith('top') || defaultBtnPosition === 'right-center') ? (
          <ToastButton position={defaultBtnPosition} toggleOpen={toggleOpen} isOpen={isOpen} />
        ) : null}
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
        {withCloseButton && (defaultBtnPosition.startsWith('bottom') || defaultBtnPosition === 'left-center') ? (
          <ToastButton position={defaultBtnPosition} toggleOpen={toggleOpen} isOpen={isOpen} />
        ) : null}
      </Motion.Div>
    </>
  );
};

Toast.WithPromise = ToastWithPromise;
Toast.WithControl = ToastWithControl;
Toast.Button = ToastButton;

export default Toast;
