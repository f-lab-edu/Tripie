'use client';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Style from './animated-button.module.scss';

const cx = classNames.bind(Style);

/**
 * 상위 컴포넌트인 motion.button을 호버시 하위 컴포넌트인 text 애니메이션이 동작합니다.
 * */
const textMotion = {
  rest: { opacity: 1, y: 15, duration: 0.5 },
  hover: {
    opacity: 1,
    y: -15,
    transition: {
      duration: 0.5,
    },
  },
};

const Text = ({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) => {
  return (
    <motion.span className={cx('text', className)} variants={textMotion}>
      {children}
    </motion.span>
  );
};

const Button = ({
  children,
  className,
  withBorder = false,
}: Readonly<{
  children: ReactNode;
  className?: string;
  withBorder?: boolean;
}>) => {
  return (
    <motion.button
      className={cx('button', withBorder && 'with-border', className)}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <Text>{children}</Text>
      <Text className={cx('hovered')}>{children}</Text>
    </motion.button>
  );
};

const AnimatedButton = motion(Button);

export default AnimatedButton;
