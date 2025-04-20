'use client';

import { Headings, MotionSlideUp, Text } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@components/core';
import { classNames } from 'wrapper';
import ServiceList from './_components/ServiceList';
import Style from './our-service.module.scss';

const cx = classNames.bind(Style);

export default function OurService() {
  return (
    <section className={cx('our-service')} id="Services">
      <Container applyMargin="left-right" margin="m">
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
      </Container>
    </section>
  );
}
