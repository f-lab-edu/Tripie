'use client';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Style from './text-fill-animation.module.scss';

const cx = classNames.bind(Style);

const TextFillAnimation = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div>
      <motion.div
        className={cx('text-fill')}
        initial={{ x: '0%', width: '0%', opacity: 1 }}
        animate={{ x: '0%', width: '100%', opacity: 1 }}
        transition={{ damping: 10, stiffness: 100, duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TextFillAnimation;
