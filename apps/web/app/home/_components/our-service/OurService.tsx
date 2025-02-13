'use client';

import { Headings, MotionSlideUp, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import ServiceList from './_components/ServiceList';
import Style from './our-service.module.scss';

const cx = classNames.bind(Style);

export default function OurService() {
  return (
    <section className={cx('our-service')} id="Services">
      <TripieContainer applyMargin="left-right" margin="m">
        <MotionSlideUp>
          <Headings.H2>
            Our <span className={cx('accented')}>services</span>
          </Headings.H2>
        </MotionSlideUp>
        <TripieContainer className={cx('wrap')} margin="l" applyMargin="top-bottom">
          <ServiceList />
        </TripieContainer>
      </TripieContainer>
    </section>
  );
}
