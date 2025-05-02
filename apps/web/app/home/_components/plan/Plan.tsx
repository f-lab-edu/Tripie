'use client';

import { MotionSlideUp } from '@tripie-pyotato/design-system/@components/x';
import { Background, Container, Headings, Text } from '@tripie-pyotato/design-system/@core';
import PlanList from './PlanList';

export default function Plan() {
  return (
    <Background variant={3} id="Plans" applyPadding="top-left-right" padding="m">
      <MotionSlideUp>
        <Container applyMargin="top" margin="l">
          <Headings.H2>
            <Text.Accented>Plans</Text.Accented> to suit your needs
          </Headings.H2>
        </Container>
      </MotionSlideUp>
      <PlanList />
    </Background>
  );
}
