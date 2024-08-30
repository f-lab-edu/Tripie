'use client';

import classNames from 'classnames/bind';
import Style from './about-us.module.scss';
const cx = classNames.bind(Style);

export default function AboutUs() {
  return (
    <section className={cx('about-us', 'section')}>
      We're a full-servicefull-service AI Automation Agency.AI Automation Agency. We turn businessesWe turn businesses
      into AI-driven industryinto AI-driven industry leaders. ✨leaders. ✨
    </section>
  );
}
