'use client';

import classNames from 'classnames/bind';
import Style from './contact.module.scss';
const cx = classNames.bind(Style);

export default function Contact() {
  return <section className={cx('contact', 'section')}>contact</section>;
}
