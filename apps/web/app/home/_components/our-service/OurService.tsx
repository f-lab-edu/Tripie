'use client';

import { MotionSlideUp } from '@tripie-pyotato/design-system';
import { Background, Container, Headings, Text } from '@tripie-pyotato/design-system/@core';
import { classNames } from 'wrapper';
import ServiceList from './_components/ServiceList';
import Style from './our-service.module.scss';

const cx = classNames.bind(Style);

export default function OurService() {
  return (
    <Background variant={4} id="Services" padding="m" applyPadding="top-left-right">
      <MotionSlideUp>
        <Container applyMargin="top" margin="sm">
          <Headings.H2>
            Our <Text.Accented>services</Text.Accented>
          </Headings.H2>
        </Container>
      </MotionSlideUp>
      <Container className={cx('wrap')} margin="l" applyMargin="top-bottom">
        <ServiceList />
      </Container>
    </Background>
  );
}
