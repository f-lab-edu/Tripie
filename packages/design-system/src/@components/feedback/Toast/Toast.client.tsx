'use client';
// https://mui.com/joy-ui/react-snackbar/ 참고
import { MotionProps } from '../../../wrappers';

import { TripieContainerProps } from '@core/layout/TripieContainer';
import { useCycle } from '@hooks';
import { useMemo } from 'react';

import ToastBackGround from './Background/ToastBackground';
import ToastButton from './Button/ToastButton.client';
import ToastBody from './ToastBody';
import ToastWithControl from './ToastWithControl.client';
import ToastWithPromise from './ToastWithPromise.client';
import ToastWrap from './Wrap/ToastWrap';

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
  interactable = false,
  position = 'bottom-right',
  children,
  withCloseButton = true,
  btnPosition,
  autoHideDuration = Infinity, // in milliseconds
  ...args
}: ToastProps) => {
  const [isOpen, toggleOpen] = useCycle([true, false]);

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
        <ToastBackGround isOpen={isOpen} toggleOpen={toggleOpen} autoHideDuration={autoHideDuration} />
      ) : null}
      <ToastWrap {...args} isOpen={isOpen} toggleOpen={toggleOpen}>
        {withCloseButton && (defaultBtnPosition.startsWith('top') || defaultBtnPosition === 'right-center') ? (
          <ToastButton position={defaultBtnPosition} toggleOpen={toggleOpen} isOpen={isOpen} />
        ) : null}
        <ToastBody>{children}</ToastBody>
        {withCloseButton && (defaultBtnPosition.startsWith('bottom') || defaultBtnPosition === 'left-center') ? (
          <ToastButton position={defaultBtnPosition} toggleOpen={toggleOpen} isOpen={isOpen} />
        ) : null}
      </ToastWrap>
    </>
  );
};

Toast.WithPromise = ToastWithPromise;
Toast.WithControl = ToastWithControl;
Toast.Button = ToastButton;

export default Toast;
