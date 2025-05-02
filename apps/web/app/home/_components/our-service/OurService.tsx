'use client';

import { MotionSlideUp } from '@tripie-pyotato/design-system/@components/x';
import { Background, Container, Headings, Stack, Text } from '@tripie-pyotato/design-system/@core';

import ServiceList from './ServiceList';

export default function OurService() {
  return (
    <Background variant={4} id="Services" padding="m" applyPadding="top-left-right">
      <MotionSlideUp>
        <Container applyMargin="top" margin="l">
          <Headings.H2>
            Our <Text.Accented>services</Text.Accented>
          </Headings.H2>
        </Container>
      </MotionSlideUp>
      <Stack
        display="grid"
        margin="l"
        applyMargin="top-bottom"
        gap="default"
        gridWrapOn="wrap-sm"
        justifyContent="center"
      >
        <ServiceList />
      </Stack>
    </Background>
  );
}
