'use client';

import { classNames, Motion } from '../../../../wrappers';

import { COLORS } from 'shared';
import { ToastProps } from '../Toast.client';
import Style from './toast-wrap.module.scss';
import { toastMotion, toastPosition } from './variants';

const cx = classNames.bind(Style);

const ToastWrap = ({
  full = false,
  position = 'bottom-right',
  children,
  className,
  visualDuration = 0.5,
  withBorder = true,
  toastColor = COLORS[50],
  isOpen,
  style,
  animate,
}: ToastProps) => {
  return (
    <Motion.Div
      className={cx(`with${withBorder ? '' : '-no'}-border`, 'toast-body', className)}
      initial={'initial'}
      animate={animate == null ? (isOpen ? 'animate' : 'initial') : animate}
      variants={toastMotion[position]}
      transition={{ type: 'spring', visualDuration }}
      style={{
        ...(position === 'bottom-center' || position == 'top-center' ? { left: '50%', translateX: '-50%' } : null),
        width: full ? '100%' : 'fit-content',
        position: 'fixed',
        backgroundColor: toastColor,
        color: 'inherit',
        ...toastPosition[position],
        ...style,
      }}
    >
      {children}
    </Motion.Div>
  );
};

export default ToastWrap;
