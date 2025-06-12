'use client';
import { Fragment, ReactNode, useState } from 'react';

import { classNames, Motion, MotionProps } from '../../../wrappers';

import { COLORS } from 'shared';
import TripieContainer from '../../../@core/layout/TripieContainer';
import Style from './text.module.scss';
import { VARIANTS } from './variants';

const cx = classNames.bind(Style);

export const FlickText = ({
  children,
  sizes,
  className,
}: Readonly<{
  children: ReactNode;
  sizes?: number;
  className?: string;
}>) => {
  return (
    <Motion.Span className={cx('text', 'flick', className)} variants={VARIANTS['TEXT'](sizes)}>
      {children}
    </Motion.Span>
  );
};

export const FlickText2 = ({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) => {
  return (
    <Motion.Span className={cx('text', 'flick', className)} variants={VARIANTS['FLICK_TEXT']}>
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
      className={cx('animated-text', `with${withBorder ? '' : '-no'}-border`, className)}
      initial="rest"
      whileHover={disabled ? 'rest' : 'hover'}
      whileTap={disabled ? 'rest' : 'hover'}
      animate={animate}
      onTap={action}
    >
      <FlickText2>{children}</FlickText2>
      <TripieContainer className={cx('empty')}> </TripieContainer>
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
          className={cx('box', 'text', className)}
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

const Cursor = ({ cursorColor = COLORS[50], duration = 0.5 }: { cursorColor?: string; duration?: number }) => (
  <Motion.Span
    initial={{ opacity: 1, borderRight: '1px solid transparent' }}
    animate={{
      opacity: 0,
      borderRight: `1px solid ${cursorColor}`,
    }}
    transition={{
      duration,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear',
    }}
    style={{
      display: 'inline-block',
    }}
  >
    &nbsp;
  </Motion.Span>
);

export const TypingText = ({
  children,
  className,
  duration = 0.5,
  delay = 0.1,
  repeat = 0,
}: Readonly<{
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  repeat?: number;
}>) => {
  const [current, setCurrent] = useState(0);
  return (
    <TripieContainer className={cx('box', className)} margin="none">
      {children.split('').map((char, index) => {
        return (
          <Fragment key={`${index}-${char}`}>
            <Motion.Span
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: index * delay,
                duration,
                repeat,
              }}
              onUpdate={() => {
                if (current <= index) setCurrent(index);
              }}
              style={{ display: 'inline-block', margin: '0 2px' }}
            >
              {char}
            </Motion.Span>
            {current === index && <Cursor />}
          </Fragment>
        );
      })}
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
      className={cx('text', className)}
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
AnimatedText.Type = TypingText;

export default AnimatedText;
