'use client';

import classNames from 'classnames/bind';
import Style from './our-work.module.scss';
const cx = classNames.bind(Style);

export default function OurWork() {
  return <section className={cx('our-work')}>our work</section>;
}
