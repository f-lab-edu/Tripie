'use client';
import classNames from 'classnames/bind';
import Style from './testimonials.module.scss';
const cx = classNames.bind(Style);

export default function Testimonials() {
  return <section className={cx('testimonials')}>testimonials</section>;
}
