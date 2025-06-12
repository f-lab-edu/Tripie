import { ReactNode } from 'react';
import { classNames, Motion, MotionProps } from 'wrappers';
import { HTMLMotionPropsWithoutMotion } from 'wrappers/motion-wrapper';
import Style from './button.module.scss';

const cx = classNames.bind(Style);

export type TripieButtonProps = {
  selected?: boolean;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onTap?: MotionProps['onTap'];
  cycle?: (state?: any) => void;
  sizes?: 'full' | 'large' | 'medium' | 'small' | 'tiny';
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  initial?: boolean | MotionProps['VariantLabels'];
  variants?: MotionProps['variants'];
  withBorder?: boolean;
  colorVariant?: 'default';
  stretched?: boolean;
  animate?:
    | boolean
    | MotionProps['VariantLabels']
    | MotionProps['TargetAndTransition']
    | MotionProps['AnimationControls'];
  whileTap?: MotionProps['VariantLabels'] | MotionProps['TargetAndTransition'];
  whileHover?: MotionProps['TargetAndTransition'] | MotionProps['VariantLabels'];
} & Partial<HTMLMotionPropsWithoutMotion<'button'>>;

const Button = ({
  variants,
  initial,
  className,
  whileHover,
  onClick,
  type,
  sizes = 'medium',
  children,
  colorVariant = 'default',
  selected = false,
  disabled,
  withBorder = true,
  whileTap,
  stretched = true,
  animate,
  onTap,
  ...args
}: TripieButtonProps) => {
  return (
    <Motion.Button
      onTap={onTap}
      animate={animate}
      whileTap={whileTap}
      initial={initial}
      className={cx(
        'button',
        `btn-size-${sizes}`,
        `btn-color-variant-${colorVariant}`,
        disabled ? 'disabled' : '',
        withBorder ? 'with-border' : '',
        selected ? 'selected' : '',
        stretched ? 'stretched' : '',
        className
      )}
      disabled={disabled}
      variants={variants}
      whileHover={whileHover}
      onClick={onClick}
      type={type}
      {...args}
    >
      {children}
    </Motion.Button>
  );
};

export default Button;
