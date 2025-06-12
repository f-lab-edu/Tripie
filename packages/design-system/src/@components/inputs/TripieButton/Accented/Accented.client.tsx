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
  colorVariant = 'default',
  ...args
}: AccentedButtonProps) => {
  console.log(args);
  return (
    <Motion.Div variants={GLOW_VARIANT} whileHover={'glow'} className={cx('wrap')}>
      <Button
        initial={'rest'}
        className={cx('btn-wrap', current === 'on' ? 'selected' : 'chip', className)}
        variants={GLOW_VARIANT}
        whileHover={'glow'}
        onClick={onClick}
        withBorder={withBorder}
        type={type}
        colorVariant={colorVariant}
        disabled={disabled}
        sizes={sizes}
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
