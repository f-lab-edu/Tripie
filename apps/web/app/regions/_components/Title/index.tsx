'use client';

import { Container, Headings } from '@tripie-pyotato/design-system';
import { ReactNode } from 'react';
import Navigation from '../Navigation';

const Title = ({ children, withNavigation = true }: { children: ReactNode; withNavigation?: boolean }) => {
  return (
    <Container margin="none">
      {withNavigation ? <Navigation /> : null}
      <Headings.H2>{children}</Headings.H2>
    </Container>
  );
};

export default Title;
