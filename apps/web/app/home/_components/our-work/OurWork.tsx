import { Container, Headings, MotionSlideUp } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import OurWorkList from './OurWorkList';
import Style from './our-work.module.scss';

const cx = classNames.bind(Style);

export default function OurWork() {
  return (
    <section className={cx('our-work')} id="Work">
      <Container applyMargin="left-right" margin="m">
        <MotionSlideUp>
          <Headings.H2>
            Our <span className={cx('accented')}>work</span>
          </Headings.H2>
        </MotionSlideUp>
      </Container>
      <OurWorkList />
    </section>
  );
}
