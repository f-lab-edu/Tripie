import classNames from 'classnames/bind';
import { AnimationControls, AnimationProps, motion } from 'framer-motion';
import { ReactNode } from 'react';
import Container from '../Container';
import Style from './text.module.scss';
import { VARIANTS } from './variants';

const cx = classNames.bind(Style);

export const Text = ({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) => {
  return (
    <motion.span className={cx('text', className)} variants={VARIANTS['TEXT']}>
      {children}
    </motion.span>
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
    <Container className={cx('box')} margin="none">
      {children.split('').map((item: string, index: number) => (
        <motion.span
          key={index + item}
          className={cx('box', className)}
          animate={{ y: '-5px', direction: 'alternate' } as unknown as AnimationControls}
          transition={{ delay: index * 0.1, duration: 1.5, repeat: Infinity, damping: 800 }}
        >
          {item}
        </motion.span>
      ))}
    </Container>
  );
};

const AnimatedText = ({
  children,
  className,
  otherChild = children,
  withBorder = false,
  onClick,
}: Readonly<{
  children: ReactNode;
  otherChild?: ReactNode;
  className?: string;
  withBorder?: boolean;
  onClick?: () => void;
}>) => {
  return (
    <motion.span
      onClick={onClick}
      className={cx('button', withBorder && 'with-border', className)}
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      animate="rest"
    >
      <Text>{children}</Text>
      <Text className={cx('hovered')}>{otherChild}</Text>
    </motion.span>
  );
};

export const SlidingText = ({
  children,
  className,
  transition,
  animate = 'rest',
  duration = 1,
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

AnimatedText.Slide = SlidingText;
AnimatedText.Jump = JumpingText;

export default AnimatedText;
