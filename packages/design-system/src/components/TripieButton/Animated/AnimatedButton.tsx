'use client';

import { ReactNode } from 'react';
import { classNames, Motion } from '../../../shared/wrappers';
import Text from '../../Text';
import TripieContainer from '../../TripieContainer/TripieContainer';
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
  animate = 'rest',
  withMinWidth = false,
}: Readonly<{
  children: ReactNode;
  disabled?: boolean;
  otherChild?: ReactNode;
  className?: string;
  withBorder?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  animate?: 'rest' | 'hover';
  withMinWidth?: boolean;
}>) => {
  return (
    <Motion.Button
      disabled={disabled}
      onTap={onClick}
      type={type}
      className={cx('button', withBorder && 'with-border', withMinWidth && 'min', className)}
      initial="rest"
      whileHover={disabled ? 'rest' : 'hover'}
      whileTap={disabled ? 'rest' : 'hover'}
      animate={animate}
    >
      <Text.Flick>{children}</Text.Flick>
      <span className={cx('gap')}>{' '}</span>
      <Text.Flick className={cx('hovered')}>{otherChild}</Text.Flick>
    </Motion.Button>
  );
};

export const AnimatedText = ({
  children,
  className,
  disabled = false,
  otherChild = children,
  withBorder = false,

  animate = 'rest',
  withMinWidth = false,
}: Readonly<{
  children: ReactNode;
  disabled?: boolean;
  otherChild?: ReactNode;
  className?: string;
  withBorder?: boolean;

  animate?: 'rest' | 'hover';
  withMinWidth?: boolean;
}>) => {
  return (
    <Motion.Div
      className={cx('button', withBorder && 'with-border', withMinWidth && 'min', className)}
      initial="rest"
      whileHover={disabled ? 'rest' : 'hover'}
      whileTap={disabled ? 'rest' : 'hover'}
      animate={animate}
    >
      <Text.Flick>{children}</Text.Flick>
      <TripieContainer applyMargin="top"> </TripieContainer>
      <Text.Flick className={cx('hovered')}>{otherChild}</Text.Flick>
    </Motion.Div>
  );
};

AnimatedButton.Text = AnimatedText;

export default AnimatedButton;
