'use client';

import classNames from 'classnames/bind';
import Style from './footer.module.scss';
const cx = classNames.bind(Style);

export default function Footer() {
  return <div className={cx('footer')}>footer</div>;
}
