// 'use client';

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
    <>
      <RegionTitle />
      <RegionSelect selected={currentRegionId} selectedRegion={selectedRegion} />
      <RegionList data={dynamicBlurDataUrl} />
    </>
  );
};

export default RegionSection;
