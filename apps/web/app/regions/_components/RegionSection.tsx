'use client';

import { Container } from '@tripie-pyotato/design-system/@core';
import RegionList, { RegionArticleData } from './RegionList';
import RegionTitle from './RegionTitle';
import RegionSelect from './Select';

const RegionSection = ({
  dynamicBlurDataUrl,
  currentRegionId,
  selectedRegion,
}: {
  dynamicBlurDataUrl: RegionArticleData['data'];
  currentRegionId: string;
  selectedRegion: string;
}) => {
  return (
    <Container margin="xl" applyMargin="top">
      <Container>
        <RegionTitle />
        <RegionSelect selected={currentRegionId} selectedRegion={selectedRegion} />
        <RegionList data={dynamicBlurDataUrl} />
      </Container>
    </Container>
  );
};

export default RegionSection;
