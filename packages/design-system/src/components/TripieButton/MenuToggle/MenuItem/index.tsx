'use client';

import { ReactNode } from 'react';

import { classNames, Motion } from '../../../../shared/wrappers';
import Style from './menu-item.module.scss';
import { MENU_ITEM_VARIANT } from './variants';

const cx = classNames.bind(Style);

const MenuItem = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <Motion.Li
      className={cx('menu-item')}
      variants={MENU_ITEM_VARIANT}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </Motion.Li>
  );
};

export default MenuItem;
