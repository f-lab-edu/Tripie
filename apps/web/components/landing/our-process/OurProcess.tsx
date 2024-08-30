'use client';

import classNames from 'classnames/bind';
import Style from './our-process.module.scss';
const cx = classNames.bind(Style);

export default function OurProcess() {
  return (
    <section className={cx('our-process')} id="Process">
      our process
    </section>
  );
}
