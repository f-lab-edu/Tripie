import { Container, Headings } from '@tripie/design-system';
import classNames from 'classnames/bind';
import MotionSlideUp from 'shared/components/MotionSlideUp/MotionSlideUp';
import OurProcessList from './OurProcessList';
import Style from './our-process.module.scss';

const cx = classNames.bind(Style);

export default function OurProcess() {
  return (
    <section className={cx('our-process')} id="Process">
      <Container applyMargin="left-right" margin="m">
        <MotionSlideUp>
          <Headings.H2>
            Our <span className={cx('accented')}>process</span>
          </Headings.H2>
        </MotionSlideUp>
        <Container className={cx('wrap')} margin="l" applyMargin="top-bottom">
          <OurProcessList />
        </Container>
      </Container>
    </section>
  );
}
