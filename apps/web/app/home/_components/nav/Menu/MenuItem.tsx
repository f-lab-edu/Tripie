'use client';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Style from './menu-item.module.scss';
import { MENU_VARIANTS } from './variants';

const cx = classNames.bind(Style);

export const MenuItem = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <motion.li
      className={cx('menu-item')}
      variants={MENU_VARIANTS.MENU_ITEM}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.li>
  );
};
