'use client';

import { Container } from '@tripie-pyotato/design-system/@components';
import { ReactNode } from 'react';

const RegionLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container margin="xl" applyMargin="top">
      <Container>{children}</Container>
    </Container>
  );
};

export default RegionLayout;
