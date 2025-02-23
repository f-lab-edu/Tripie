'use client';

import { Container, Headings, MotionSlideUp } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
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
              Our <span className={cx('accented')}>services</span>
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
