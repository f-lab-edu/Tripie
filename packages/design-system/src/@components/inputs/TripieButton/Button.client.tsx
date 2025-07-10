'use client';
import { ReactNode, useMemo } from 'react';
import { COLORS, SHINE_VARIANT } from 'shared';
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
  colorVariant?: 'default' | 'chip';
  stretched?: boolean;
  animate?:
    | boolean
    | MotionProps['VariantLabels']
    | MotionProps['TargetAndTransition']
    | MotionProps['AnimationControls'];
  whileTap?: MotionProps['VariantLabels'] | MotionProps['TargetAndTransition'];
  whileHover?: MotionProps['TargetAndTransition'] | MotionProps['VariantLabels'];
} & Partial<HTMLMotionPropsWithoutMotion<'button'>>;

const btnColor = {
  chip: COLORS[200],
  default: 'inherit',
  disabled: COLORS[800],
  active: COLORS[300],
  selected: COLORS[100],
};

const Button = ({
  variants = SHINE_VARIANT,
  initial,
  className,
  onClick,
  type,
  sizes = 'medium',
  children,
  colorVariant = 'default',
  selected = false,
  disabled,
  withBorder = true,
  whileHover = 'shine',
  whileTap = 'shine',
  stretched = true,
  animate = selected ? 'selected' : 'rest',
  onTap,
  ...args
}: TripieButtonProps) => {
  const buttonBackground = useMemo(() => {
    if (disabled) {
      return 'disabled';
    }
    if (selected) {
      return 'selected';
    }
    return colorVariant;
  }, [disabled, colorVariant, selected]);

  return (
    <Motion.Button
      onTap={onTap}
      animate={animate}
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
      style={{ backgroundColor: btnColor[buttonBackground] }}
      disabled={disabled}
      variants={variants}
      whileTap={whileTap}
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
