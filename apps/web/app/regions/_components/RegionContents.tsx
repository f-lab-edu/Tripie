'use client';
import { SplashProvider } from '@/shared/components/SplashContext';
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
      <RegionTitle city={city} regionId={currentRegionId} />
      <RegionSelect selected={currentRegionId} selectedRegion={selectedRegion} />
      <RegionContent data={data} />
    </SplashProvider>
  );
}

export default RegionContents;
