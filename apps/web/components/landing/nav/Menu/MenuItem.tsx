'use client';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Style from './menu-item.module.scss';

const cx = classNames.bind(Style);

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <motion.li className={cx('menu-item')} variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      {children}
    </motion.li>
  );
};
