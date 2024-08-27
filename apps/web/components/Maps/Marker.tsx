'use client';

import classNames from 'classnames';
import { ReactNode } from 'react';
import Style from './marker.module.scss';

const cx = classNames.bind(Style);

const Marker = (children: ReactNode) => {
  return <div className={cx('marker')}>{children}</div>;
};

export default Marker;
