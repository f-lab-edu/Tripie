'use client';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';

import MotionWrapper from '../../../../shared/wrappers/motion-wrapper';
import Style from './menu-item.module.scss';
import { MENU_ITEM_VARIANT } from './variants';

const cx = classNames.bind(Style);

const MenuItem = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <MotionWrapper.Li
      className={cx('menu-item')}
      variants={MENU_ITEM_VARIANT}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </MotionWrapper.Li>
  );
};

export default MenuItem;
