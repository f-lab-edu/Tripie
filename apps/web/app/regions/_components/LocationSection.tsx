'use client';

import { Container } from '@tripie-pyotato/design-system/@components';

import RegionTitle from '../_components/RegionTitle';

const LocationSection = ({ regionId, city }: { regionId: string; city?: string }) => {
  return (
    <Container margin="none">
      <RegionTitle regionId={regionId} city={city} />
    </Container>
  );
};

export default LocationSection;
