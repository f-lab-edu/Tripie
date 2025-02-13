'use client';

import { Headings, TripieContainer } from '@tripie-pyotato/design-system';
import { ReactNode } from 'react';
import Navigation from '../Navigation';

const Title = ({ children, withNavigation = true }: { children: ReactNode; withNavigation?: boolean }) => {
  return (
    <TripieContainer margin="none">
      {withNavigation ? <Navigation /> : null}
      <Headings.H2>{children}</Headings.H2>
    </TripieContainer>
  );
};

export default Title;
