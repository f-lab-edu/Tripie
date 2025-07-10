// 'use server';

import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';

import getRegionArticles from 'app/api/articles/region';
import RegionSection from './_components/RegionSection';

const Articles = async () => {
  const currentRegionId = Object.keys(TRIPIE_REGION_BY_LOCATION)[0];
  const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
    item =>
      TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
      TRIPIE_REGION_BY_LOCATION[currentRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION][0]
  )?.[0];

  const dynamicBlurDataUrl = await getRegionArticles(selectedRegion);

  return (
    <RegionSection
      dynamicBlurDataUrl={dynamicBlurDataUrl}
      currentRegionId={currentRegionId}
      selectedRegion={selectedRegion}
    />
  );
};

export default Articles;
