'use client';
import { COLORS, Container, TextFillAnimation } from '@tripie-pyotato/design-system';
import '@tripie-pyotato/design-system/styles';
import classNames from 'wrapper';

import Style from './about-us.module.scss';

const cx = classNames.bind(Style);

export default function AboutUs() {
  return (
    <section className={cx('about-us')}>
      <Container className={cx('wrap')} applyMargin="left-right" margin="m">
        <TextFillAnimation text={`We're a trip planner`} />
        <TextFillAnimation text={`Enhanced with AI.`} endColor={COLORS[50]} />
        <TextFillAnimation text={`We help plan your trips`} />
        <TextFillAnimation text={`with the power of AI ✨`} endColor={COLORS[50]} />
      </Container>
    </section>
  );
}
