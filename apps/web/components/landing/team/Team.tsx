'use client';
import classNames from 'classnames/bind';
import Style from './team.module.scss';
const cx = classNames.bind(Style);

export default function Team() {
  return <section className={cx('team')}>our team</section>;
}
