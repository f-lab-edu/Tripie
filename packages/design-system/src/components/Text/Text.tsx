import classNames from 'classnames/bind';
import { AnimationProps, motion } from 'framer-motion';
import { ReactNode } from 'react';
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

const Text = ({ children, className, ...props }: Readonly<TextProps>) => {
  const splitText = `${children}`.split('\n').map((sentence, index) => {
    return (
      <span className={cx('text', className)} key={index + sentence} {...props}>
        {sentence}
      </span>
    );
  });
  return <>{splitText}</>;
};

const AccentedText = ({
  children,
  className,
  ...props
}: Readonly<TextProps>) => {
    return (
      <span className={cx('text', 'accented', className)}  {...props}>
        {children}
      </span>
    );
};

const FlickText = ({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) => {
  return (
    <motion.span className={cx('flick', className)} variants={VARIANTS['TEXT']}>
      {children}
    </motion.span>
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
    <motion.div
      className={cx('button', withBorder && 'with-border', className)}
      initial="rest"
      whileHover={disabled ? 'rest' : 'hover'}
      whileTap={disabled ? 'rest' : 'hover'}
      animate={animate}
    >
      <FlickText>{children}</FlickText>
      <FlickText className={cx('hovered')}>{otherChild}</FlickText>
    </motion.div>
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
        <motion.span
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
        </motion.span>
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
  transition?: AnimationProps['transition'];
  duration?: number;
}>) => {
  return (
    <motion.div
      className={cx(className)}
      initial="rest"
      animate={animate}
      transition={transition}
      variants={VARIANTS.SLIDE(duration)}
    >
      {children}
    </motion.div>
  );
};

Text.Accented = AccentedText;
Text.Slide = SlidingText;
Text.Animated = AnimatedText;
Text.Flick = FlickText;
Text.Jump = JumpingText;

export default Text;
