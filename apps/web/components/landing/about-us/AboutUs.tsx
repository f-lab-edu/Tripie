'use client';

import classNames from 'classnames/bind';
import TextFillAnimation from 'components/shared/TextFill/TextFillAnimation';
import COLORS from 'constants/colors';
import Style from './about-us.module.scss';
const cx = classNames.bind(Style);

export default function AboutUs() {
  return (
    <section className={cx('about-us')}>
      <div>
        <TextFillAnimation text={`We're a trip planner`} />
        <TextFillAnimation text={`Enhanced with AI.`} delay={1} endColor={COLORS[50]} />
        <TextFillAnimation text={`We help plan your trips`} delay={1} />
        <TextFillAnimation text={`with the power of AI ✨`} delay={1} endColor={COLORS[50]} />
      </div>
    </section>
  );
}
