import { MotionSlideUp } from '@tripie-pyotato/design-system';
import { Container, Headings, Text } from '@tripie-pyotato/design-system/@core';
import { classNames } from 'wrapper';
import OurWorkList from './OurWorkList';
import Style from './our-work.module.scss';

const cx = classNames.bind(Style);

export default function OurWork() {
  return (
    <section className={cx('our-work')} id="Work">
      <Container applyMargin="left-right" margin="m">
        <MotionSlideUp>
          <Headings.H2>
            Our <Text.Accented>work</Text.Accented>
          </Headings.H2>
        </MotionSlideUp>
      </Container>
      <OurWorkList />
    </section>
  );
}
