'use client';

import { COLORS } from 'shared';
import ToastBackGround from './Background/ToastBackground';
import { ToastProps } from './Toast.client';
import ToastBody from './ToastBody';
import ToastWrap from './Wrap/ToastWrap';

const ToastWithControl = (
  {
    children,
    toastColor = COLORS['50'],
    isOpen,
    animate,
    toggleOpen,
    autoHideDuration = Infinity, // in milliseconds
    ...args
  }: ToastProps
  //  Omit<ToastProps, 'toggleOpen'> & { toggleOpen: Dispatch<SetStateAction<boolean>> }
) => {
  return (
    <>
      {isOpen ? <ToastBackGround isOpen={isOpen} toggleOpen={toggleOpen} autoHideDuration={autoHideDuration} /> : null}
      <ToastWrap
        {...args}
        toggleOpen={toggleOpen}
        toastColor={toastColor}
        animate={animate}
        style={{ color: toastColor === COLORS['50'] || toastColor === COLORS['0'] ? COLORS['500'] : 'inherit' }}
      >
        <ToastBody>{children}</ToastBody>
      </ToastWrap>
    </>
  );
};

export default ToastWithControl;
