import { Container, Headings, MotionSlideUp, Text } from '@tripie-pyotato/design-system';
import { classNames } from 'wrapper';
import OurWorkList from './OurWorkList';
import Style from './our-work.module.scss';

const cx = classNames.bind(Style);

export default function OurWork() {
  return (
    <section className={cx('our-work')} id="Work">
      <Container applyMargin="left-right" margin="m">
        <MotionSlideUp>
          <Container applyMargin="top" margin="sm">
            <Headings.H2>
              Our <Text.Accented>work</Text.Accented>
            </Headings.H2>
          </Container>
        </MotionSlideUp>
      </Container>
      <OurWorkList />
    </section>
  );
}
