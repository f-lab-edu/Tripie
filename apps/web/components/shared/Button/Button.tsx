'use client';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Style from './button.module.scss';

const cx = classNames.bind(Style);

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

const MotionButton = ({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className: string;
}>) => {
  return (
    <motion.button className={cx('button', className)} initial="rest" whileHover="hover" animate="rest">
      <motion.span className={cx('text')} variants={textMotion}>
        {children}
      </motion.span>
      <motion.span className={cx('text', 'hovered')} variants={textMotion}>
        {children}
      </motion.span>
    </motion.button>
  );
};

const Button = ({ children }: { children: ReactNode }) => {
  return <MotionButton className="styled">{children}</MotionButton>;
};

const UnstyledButton = ({ children }: { children: ReactNode }) => {
  return <MotionButton className="no-style">{children}</MotionButton>;
};

Button.Unstyled = UnstyledButton;

export default Button;
