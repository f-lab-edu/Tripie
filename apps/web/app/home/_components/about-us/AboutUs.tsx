'use client';
import { TextFillAnimation, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import COLORS from 'constants/colors';

import Style from './about-us.module.scss';

const cx = classNames.bind(Style);

export default function AboutUs() {
  return (
    <section className={cx('about-us')}>
      <TripieContainer className={cx('wrap')} applyMargin="left-right" margin="m">
        <TextFillAnimation text={`We're a trip planner`} />
        <TextFillAnimation text={`Enhanced with AI.`} endColor={COLORS[50]} />
        <TextFillAnimation text={`We help plan your trips`} />
        <TextFillAnimation text={`with the power of AI ✨`} endColor={COLORS[50]} />
      </TripieContainer>
    </section>
  );
}
