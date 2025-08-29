'use client';

import { classNames, Motion } from '../../../../wrappers';

import { Icon } from '@components/data-display';

import { ToastBtnPosition, ToastProps } from '../Toast.client';
import Style from './toast-button.module.scss';
import { toastBtnPosition } from './variants';

const cx = classNames.bind(Style);

export type ToastButtonProps = {
  position: ToastBtnPosition;
  isOpen?: boolean;
  cloudinaryUrl?: string;
} & Pick<ToastProps, 'toggleOpen'>;
// } & Omit<ToastProps, 'position'>;

// & Pick<ToastProps, 'toggleOpen'>
const ToastButton = ({
  position,
  toggleOpen,
  // onClose,
  isOpen,
  cloudinaryUrl,
}: ToastButtonProps) => {
  return (
    <Motion.Button
      className={cx(`toast-toggle-btn`)}
      onTouchStart={() => toggleOpen(prev => !prev)}
      onClick={() => toggleOpen(prev => !prev)}
      style={{ position: 'absolute', ...toastBtnPosition[position] }}
      aria-label={`${isOpen ? 'close' : 'open'} toast`}
    >
      <Icon.X cloudinaryUrl={cloudinaryUrl} />
    </Motion.Button>
  );
};

export default ToastButton;
