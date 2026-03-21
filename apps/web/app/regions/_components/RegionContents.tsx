'use client';
import { SplashProvider } from '@/shared/components/SplashContext';
import { Container } from '@tripie-pyotato/design-system/@core';
import { RegionArticleData } from './RegionCard';
import RegionContent from './RegionContent';
import RegionTitle from './RegionTitle';
import RegionSelect from './Select';

function RegionContents({
  data,
  city,
  currentRegionId,
  selectedRegion,
}: Readonly<{ data: RegionArticleData['data']; currentRegionId: string; selectedRegion?: string; city?: string }>) {
  return (
    <SplashProvider>
      <Container margin="xl" applyMargin="top">
        <RegionTitle city={city} regionId={currentRegionId} />
        <RegionSelect selected={currentRegionId} selectedRegion={selectedRegion} />
        <RegionContent data={data} />
      </Container>
    </SplashProvider>
  );
}

export default RegionContents;
