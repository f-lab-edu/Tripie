'use client';

import { Container, Headings } from '@tripie/design-system';
import classNames from 'classnames/bind';
import MotionSlideUp from 'shared/components/MotionSlideUp/MotionSlideUp';
import ServiceList from './ServiceList';
import Style from './our-service.module.scss';
const cx = classNames.bind(Style);

export default function OurService() {
  return (
    <section className={cx('our-service')} id="Services">
      <Container applyMargin="left-right" margin="m">
        <MotionSlideUp>
          <Headings.H2>
            Our <span className={cx('accented')}>services</span>
          </Headings.H2>
        </MotionSlideUp>
        <Container className={cx('wrap')} margin="l" applyMargin="top-bottom">
          <ServiceList />
        </Container>
      </Container>
    </section>
  );
}
