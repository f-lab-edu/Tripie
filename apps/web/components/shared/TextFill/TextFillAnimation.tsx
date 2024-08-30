'use client';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Style from './text-fill-animation.module.scss';

const cx = classNames.bind(Style);
const textAnimation = {
  hidden: { opacity: 0, y: '-100%' },
  visible: () => ({
    opacity: 1,
    y: 0,
    color: '#973030f',
    transition: {
      // delay: i * 0.1,
      duration: 0.5,
      // repeat: Infinity,
    },
  }),
};

const TextFillAnimation = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className={cx('text-container')}>
      <motion.div initial={{ opacity: 0, y: '-100%' }} animate={{ opacity: 1, color: '#973030f', translateX: '10%' }}>
        {children}
      </motion.div>
      {children}
      {/* {children.split('').map((char, index) => (
        <motion.span
          // key={index + textIndex}
          key={index + textIndex}
          className={cx('text')}
          custom={index}
          variants={textAnimation}
          initial="hidden"
          animate="visible"
        >
          {char}
        </motion.span>
      ))} */}
    </div>
  );
};

const TitleTextFillAnimation = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div>
      <motion.div
        className={cx('title')}
        initial={{ x: '0%', width: '0%', opacity: 1 }}
        animate={{ x: '0%', width: '100%', opacity: 1 }}
        transition={{ damping: 10, stiffness: 100, duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

TextFillAnimation.Title = TitleTextFillAnimation;

export default TextFillAnimation;
