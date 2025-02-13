'use client';

import { Headings, MotionSlideUp, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import PlanList from './PlanList';
import Style from './plan.module.scss';

const cx = classNames.bind(Style);

export default function Plan() {
  return (
    <section className={cx('plan')} id="Plans">
      <TripieContainer applyMargin="left-right" margin="m">
        <MotionSlideUp>
          <Headings.H2>
            <span className={cx('accented')}>Plans </span>to suit your needs
          </Headings.H2>
        </MotionSlideUp>
        <TripieContainer className={cx('wrap')} margin="l" applyMargin="top-bottom">
          <PlanList />
        </TripieContainer>
      </TripieContainer>
    </section>
  );
}
