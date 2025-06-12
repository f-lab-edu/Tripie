'use client';

import TripieContainer from '@core/layout/TripieContainer';
import { ReactNode } from 'react';
import { classNames, Motion } from '../../../../wrappers';
import AnimatedText from '../../../data-display/AnimatedText/AnimatedText.client';
import Style from './animated-button.module.scss';

const cx = classNames.bind(Style);

const AnimatedButton = ({
  children,
  className,
  disabled = false,
  type = 'button',
  otherChild = children,
  withBorder = false,
  onClick,
  isFullSize = false,
  animate = 'rest',
  withMinWidth = false,
  selected = false,
}: Readonly<{
  children: ReactNode;
  disabled?: boolean;
  isFullSize?: boolean;
  otherChild?: ReactNode;
  className?: string;
  withBorder?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  animate?: 'rest' | 'hover';
  withMinWidth?: boolean;
  selected?: boolean;
}>) => {
  return (
    <Motion.Button
      disabled={disabled}
      onTap={onClick}
      type={type}
      className={cx(
        'button',
        `with${withBorder ? '' : '-no'}-border`,
        withMinWidth && 'min',
        className,
        selected ? 'selected' : '',
        isFullSize ? 'is-full-size' : ''
      )}
      initial="rest"
      whileHover={disabled ? 'rest' : 'hover'}
      whileTap={disabled ? 'rest' : 'hover'}
      animate={animate}
    >
      <AnimatedText.Flick>{children}</AnimatedText.Flick>
      <span className={cx('gap')}> </span>

      <AnimatedText.Flick className={cx('hovered')}>{otherChild}</AnimatedText.Flick>
    </Motion.Button>
  );
};

const AnimatedButtonText = ({
  children,
  className,
  disabled = false,
  otherChild = children,
  withBorder = false,
  isFullSize = false,
  animate = 'rest',
  withMinWidth = false,
}: Readonly<{
  children: ReactNode;
  disabled?: boolean;
  otherChild?: ReactNode;
  className?: string;
  withBorder?: boolean;
  isFullSize?: boolean;
  animate?: 'rest' | 'hover';
  withMinWidth?: boolean;
}>) => {
  return (
    <Motion.Div
      className={cx(
        'button',
        `with${withBorder ? '' : '-no'}-border`,
        withMinWidth && 'min',
        isFullSize ? 'is-full-size' : '',
        className
      )}
      initial="rest"
      whileHover={disabled ? 'rest' : 'hover'}
      whileTap={disabled ? 'rest' : 'hover'}
      animate={animate}
    >
      <AnimatedText.Flick>{children}</AnimatedText.Flick>
      <TripieContainer margin="none" padding="none"></TripieContainer>
      <AnimatedText.Flick className={cx('hovered')}>{otherChild}</AnimatedText.Flick>
    </Motion.Div>
  );
};

AnimatedButton.Text = AnimatedButtonText;

export default AnimatedButton;
