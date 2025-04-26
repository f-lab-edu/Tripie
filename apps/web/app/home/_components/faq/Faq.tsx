'use client';
import { MotionSlideUp } from '@tripie-pyotato/design-system';
import { Background, Container, Headings } from '@tripie-pyotato/design-system/@core';

import FaqList from './FaqList';

export default function Faq() {
  return (
    <Background variant={1} padding="m" applyPadding="left-right">
      <Container applyMargin="top-bottom" margin="xl">
        <MotionSlideUp>
          <Headings.H2>FAQ</Headings.H2>
          <FaqList />
        </MotionSlideUp>
      </Container>
    </Background>
  );
}
