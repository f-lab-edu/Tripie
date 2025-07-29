'use client';

import { classNames, Motion } from '../../../../wrappers';

import { Icon } from '@components/data-display';

import { ToastBtnPosition } from '../Toast.client';
import Style from './toast-button.module.scss';
import { toastBtnPosition } from './variants';

const cx = classNames.bind(Style);

export type ToastButtonProps = {
  position: ToastBtnPosition;
  isOpen?: boolean;
  toggleOpen: (index?: number) => void;
  cloudinaryUrl?: string;
};

const ToastButton = ({ position, toggleOpen, isOpen, cloudinaryUrl }: ToastButtonProps) => {
  return (
    <Motion.Button
      className={cx(`toast-toggle-btn`)}
      onTouchStart={() => toggleOpen()}
      onClick={() => toggleOpen()}
      style={{ position: 'absolute', ...toastBtnPosition[position] }}
      aria-label={`${isOpen ? 'close' : 'open'} toast`}
    >
      <Icon.X cloudinaryUrl={cloudinaryUrl} />
    </Motion.Button>
  );
};

export default ToastButton;
