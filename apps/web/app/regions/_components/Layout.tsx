'use client';

import { Container } from '@tripie-pyotato/design-system/@core';
import { ReactNode } from 'react';

const RegionLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container margin="xl" applyMargin="top">
      <Container applyPadding="left-right" padding="m" margin="none">
        {children}
      </Container>
    </Container>
  );
};

export default RegionLayout;
