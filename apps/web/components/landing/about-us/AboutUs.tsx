'use client';

import classNames from 'classnames/bind';
import TextFillAnimation from 'components/shared/TextFill/TextFillAnimation';
import Style from './about-us.module.scss';
const cx = classNames.bind(Style);

export default function AboutUs() {
  return (
    <section className={cx('about-us', 'section')}>
      <TextFillAnimation>
        <p>We're a trip planner</p>
        <p>Enhanced with AI.</p>
        <p>We help planning your trips.</p>
        <p>with the power of AI✨.</p>
      </TextFillAnimation>
      {/* {
            
            `We're a trip planner\nEnhanced with AI.\nWe help planning your trips\nwith the power of AI✨.`}</TextFillAnimation> */}
      {/* <TextFillAnimation>{`We're a trip planner\nEnhanced with AI.\nWe help planning your trips\nwith the power of AI✨.`}</TextFillAnimation> */}
    </section>
  );
}
