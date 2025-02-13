import { Headings, MotionSlideUp, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import OurProcessList from './_components/OurProcessList';
import Style from './our-process.module.scss';

const cx = classNames.bind(Style);

export default function OurProcess() {
  return (
    <section className={cx('our-process')} id="Process">
      <TripieContainer applyMargin="left-right" margin="m">
        <MotionSlideUp>
          <Headings.H2>
            Our <span className={cx('accented')}>process</span>
          </Headings.H2>
        </MotionSlideUp>
        <TripieContainer className={cx('wrap')} margin="l" applyMargin="top-bottom">
          <OurProcessList />
        </TripieContainer>
      </TripieContainer>
    </section>
  );
}
