import { MotionSlideUp } from '@tripie-pyotato/design-system';
import { Background, Container, Headings, Text } from '@tripie-pyotato/design-system/@core';
import OurWorkList from './OurWorkList';

export default function OurWork() {
  return (
    <Background applyPadding="top-left-right" padding="m" variant={5} id="Work">
      <MotionSlideUp>
        <Container applyMargin="top" margin="l">
          <Headings.H2>
            Our <Text.Accented>work</Text.Accented>
          </Headings.H2>
        </Container>
      </MotionSlideUp>
      <OurWorkList />
    </Background>
  );
}
