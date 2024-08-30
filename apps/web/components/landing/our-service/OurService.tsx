'use client';

import classNames from 'classnames/bind';
import Style from './our-service.module.scss';
const cx = classNames.bind(Style);

export default function OurService() {
  return <section className={cx('our-service')}>our service</section>;
}
