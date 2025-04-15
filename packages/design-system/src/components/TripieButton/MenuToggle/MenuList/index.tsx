'use client';

import { classNames, Motion } from '../../../../wrappers';

import { ReactNode } from 'react';

import Style from './menu-list.module.scss';
import { NAVIGATION_VARIANT } from './variants';

const cx = classNames.bind(Style);

const MenuList = ({ children }: { children: ReactNode }) => {
  return (
    <Motion.Ul className={cx('navigation')} variants={NAVIGATION_VARIANT}>
      {children}
    </Motion.Ul>
  );
};

export default MenuList;
