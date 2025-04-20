import { ReactNode } from 'react';
import TripieContainer from '../core/TripieContainer/TripieContainer';

import { classNames, Motion, MotionProps } from '../../wrappers';

import Style from './text.module.scss';
import { VARIANTS } from './variants';

const cx = classNames.bind(Style);

export interface TextProps {
  size?: 'default' | 'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'text' | 'small' | 'tiny';
  bold?: boolean;
  children: ReactNode;
  className?: string;
  crossOut?: boolean;
}

export const FlickText = ({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) => {
  return (
    <Motion.Span className={cx('flick', className)} variants={VARIANTS['TEXT']}>
      {children}
    </Motion.Span>
  );
};

const FlickText2 = ({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) => {
  return (
    <Motion.Span className={cx('flick', className)} variants={VARIANTS['FLICK_TEXT']}>
      {children}
    </Motion.Span>
  );
};

export const AnimatedText = ({
  children,
  className,
  disabled = false,
  otherChild = children,
  withBorder = false,
  animate = 'rest',
  action,
}: Readonly<{
  children: ReactNode;
  disabled?: boolean;
  otherChild?: ReactNode;
  className?: string;
  withBorder?: boolean;
  animate?: 'rest' | 'hover';
  action?: () => void;
}>) => {
  return (
    <Motion.Div
      className={cx('animated-text', withBorder && 'with-border', className)}
      initial="rest"
      whileHover={disabled ? 'rest' : 'hover'}
      whileTap={disabled ? 'rest' : 'hover'}
      animate={animate}
      onTap={action}
    >
      <FlickText2>{children}</FlickText2>
      <TripieContainer applyMargin="top"> </TripieContainer>
      <FlickText2 className={cx('hovered')}>{otherChild}</FlickText2>
    </Motion.Div>
  );
};

export const JumpingText = ({
  children,
  className,
}: Readonly<{
  children: string;
  className?: string;
}>) => {
  return (
    <TripieContainer className={cx('box')} margin="none">
      {children.split('').map((item: string, index: number) => (
        <Motion.Span
          key={index + item}
          className={cx('box', className)}
          animate={{ y: [-5, 0] }}
          transition={{
            delay: index * 0.1,
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          {item}
        </Motion.Span>
      ))}
    </TripieContainer>
  );
};

export const SlidingText = ({
  children,
  className,
  transition,
  animate = 'fly',
  duration = 5,
}: Readonly<{
  children: ReactNode;
  className?: string;
  animate?: 'rest' | 'fly';
  transition?: MotionProps['animationProps']['transition'];
  duration?: number;
}>) => {
  return (
    <Motion.Div
      className={cx(className)}
      initial="rest"
      animate={animate}
      transition={transition}
      variants={VARIANTS.SLIDE(duration)}
    >
      {children}
    </Motion.Div>
  );
};

AnimatedText.Slide = SlidingText;
AnimatedText.Jump = JumpingText;
AnimatedText.Flick = FlickText; //default

export default AnimatedText;
