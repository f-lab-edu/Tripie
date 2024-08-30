'use client';

import classNames from 'classnames/bind';
import Style from './faq.module.scss';
const cx = classNames.bind(Style);

export default function Faq() {
  return <section className={cx('faq', 'section')}>faq</section>;
}
