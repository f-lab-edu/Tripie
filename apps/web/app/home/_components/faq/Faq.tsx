'use client';
import { Headings, MotionSlideUp, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import FaqList from './FaqList';
import Style from './faq.module.scss';
const cx = classNames.bind(Style);

export default function Faq() {
  return (
    <section className={cx('faq')}>
      <TripieContainer applyMargin="left-right" margin="m">
        <MotionSlideUp>
          <Headings.H2>FAQ</Headings.H2>
          <FaqList />
        </MotionSlideUp>
      </TripieContainer>
    </section>
  );
}
