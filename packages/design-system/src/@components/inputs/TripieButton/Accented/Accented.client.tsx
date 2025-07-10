'use client';

import { classNames, Motion } from 'wrappers';
import Button, { TripieButtonProps } from '../Button.client';
import Style from './accented.module.scss';
import GLOW_VARIANT from './variants';

const cx = classNames.bind(Style);

export type AccentedButtonProps = Readonly<TripieButtonProps & { current?: string }>;

const AccentedButton = ({
  withBorder = true,
  children,
  current,
  className,
  onClick,
  type = 'button',
  sizes = 'medium',
  disabled,
  colorVariant = 'chip',
}: AccentedButtonProps) => {
  return (
    <Motion.Div
      variants={GLOW_VARIANT}
      whileHover={'glow'}
      animate={current === 'on' ? 'glow' : 'rest'}
      className={cx('wrap')}
    >
      <Button
        initial={'rest'}
        className={cx('btn-wrap', 'chip', className)}
        variants={GLOW_VARIANT}
        whileHover={'glow'}
        onClick={onClick}
        withBorder={withBorder}
        type={type}
        colorVariant={colorVariant}
        disabled={disabled}
        sizes={sizes}
        selected={current === 'on'}
      >
        {children}
      </Button>
      <Motion.Span
        className={cx('glow')}
        animate={{ rotate: 360 }}
        transition={{
          type: 'tween',
          duration: 2,
          ease: 'linear',
          repeat: Infinity,
        }}
      />
    </Motion.Div>
  );
};

export default AccentedButton;
