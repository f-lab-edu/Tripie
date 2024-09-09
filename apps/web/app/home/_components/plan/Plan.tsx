'use client';

import { Container, Headings } from '@tripie/design-system';
import classNames from 'classnames/bind';
import MotionSlideUp from 'shared/components/MotionSlideUp/MotionSlideUp';
import PlanList from './PlanList';
import Style from './plan.module.scss';

const cx = classNames.bind(Style);

export default function Plan() {
  return (
    <section className={cx('plan')} id="Plans">
      <Container applyMargin="left-right" margin="m">
        <MotionSlideUp>
          <Headings.H2>
            <span className={cx('accented')}>Plans </span>to suit your needs
          </Headings.H2>
        </MotionSlideUp>
        <Container className={cx('wrap')} margin="l" applyMargin="top-bottom">
          <PlanList />
        </Container>
      </Container>
    </section>
  );
}
