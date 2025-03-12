import { ReactNode } from 'react';
import { Container } from '..';

import { classNames, Motion, MotionProps } from '../../shared/wrappers';
import TripieContainer from '../TripieContainer/TripieContainer';
import Style from './text.module.scss';
import { VARIANTS } from './variants';

const cx = classNames.bind(Style);

export interface TextProps {
  size?: 'default' | 'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'text' | 'small' | 'tiny';
  bold?: boolean;
  children: ReactNode;
  className?: string;
}

const Text = ({ children, className, size = 'default', bold = false, ...props }: Readonly<TextProps>) => {
  const splitText = `${children}`.split('\n').map((sentence, index) => {
    return (
      <span className={cx('text', bold ? 'bold' : '', size, className)} key={index + sentence} {...props}>
        {sentence}
      </span>
    );
  });
  return <>{splitText}</>;
};

const AccentedText = ({ children, className, bold, size = 'default', ...props }: Readonly<TextProps>) => {
  return (
    <span className={cx('text', 'accented', size, bold ? 'bold' : '', className)} {...props}>
      {children}
    </span>
  );
};

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

export const FlickText2 = ({
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

const AnimatedText = ({
  children,
  className,
  disabled = false,
  otherChild = children,
  withBorder = false,
  animate = 'rest',
}: Readonly<{
  children: ReactNode;
  disabled?: boolean;
  otherChild?: ReactNode;
  className?: string;
  withBorder?: boolean;
  animate?: 'rest' | 'hover';
}>) => {
  return (
    <Motion.Div
      className={cx('animated-text', withBorder && 'with-border', className)}
      initial="rest"
      whileHover={disabled ? 'rest' : 'hover'}
      whileTap={disabled ? 'rest' : 'hover'}
      animate={animate}
    >
      <FlickText2>{children}</FlickText2>
      <Container applyMargin="top"> </Container>
      <FlickText2 className={cx('hovered')}>{otherChild}</FlickText2>
    </Motion.Div>
  );
};

const JumpingText = ({
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

const SlidingText = ({
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

Text.Accented = AccentedText;
Text.Slide = SlidingText;
Text.Animated = AnimatedText;
Text.Flick = FlickText;
Text.Jump = JumpingText;

export default Text;
