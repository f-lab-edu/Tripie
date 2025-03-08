'use client';

import classNames from 'classnames/bind';

import { ReactNode } from 'react';
import Motion from '../../../shared/wrappers/motion-wrapper';
import Text from '../../Text';
import TripieContainer from '../../TripieContainer/TripieContainer';
import Style from './animated-button.module.scss';

const cx = classNames.bind(Style);

const AnimatedButton = ({
  children,
  className,
  disabled = false,
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
  onClick?: () => void;
  animate?: 'rest' | 'hover';
  withMinWidth?: boolean;
}>) => {
  return (
    <Motion.Button
      disabled={disabled}
      onClick={onClick}
      className={cx('button', withBorder && 'with-border', withMinWidth && 'min', className)}
      initial="rest"
      whileHover={disabled ? 'rest' : 'hover'}
      whileTap={disabled ? 'rest' : 'hover'}
      animate={animate}
    >
      <Text.Flick>{children}</Text.Flick>
      <TripieContainer applyMargin="top"> </TripieContainer>
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
