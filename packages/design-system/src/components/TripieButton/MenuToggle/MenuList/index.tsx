'use client';

import classNames from 'classnames/bind';

import { motion } from 'framer-motion';

import { ReactNode } from 'react';
import Style from './menu-list.module.scss';
import { NAVIGATION_VARIANT } from './variants';

const cx = classNames.bind(Style);

const MenuList = ({ children }: { children: ReactNode }) => {
  return (
    <motion.ul className={cx('navigation')} variants={NAVIGATION_VARIANT}>
      {children}
    </motion.ul>
  );
};

export default MenuList;
