'use client';

import { Container } from '@tripie-pyotato/design-system/@core';
import RegionTitle from '../_components/RegionTitle';

const LocationSection = ({ regionId, city }: { regionId: string; city?: string }) => {
  return (
    <Container margin="xl" applyMargin="top" applyPadding="left-right" padding="m">
      <RegionTitle regionId={regionId} city={city} />
    </Container>
  );
};

export default LocationSection;
