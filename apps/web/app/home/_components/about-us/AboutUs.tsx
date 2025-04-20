'use client';
// import { Container, TextFillAnimation } from '@tripie-pyotato/design-system/@components';
import { TextFillAnimation } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@components/core';
import { COLORS } from '@tripie-pyotato/design-system/shared';

import '@tripie-pyotato/design-system/styles';
import { classNames } from 'wrapper';

import Style from './about-us.module.scss';

const cx = classNames.bind(Style);

export default function AboutUs() {
  return (
    <Container className={cx('about-us')} margin="none" alignItems="center">
      <Container applyMargin="left-right" margin="m">
        <TextFillAnimation text={`We're a trip planner`} />
        <TextFillAnimation text={`Enhanced with AI.`} endColor={COLORS[50]} />
        <TextFillAnimation text={`We help plan your trips`} />
        <TextFillAnimation text={`with the power of AI ✨`} endColor={COLORS[50]} />
      </Container>
    </Container>
  );
}
