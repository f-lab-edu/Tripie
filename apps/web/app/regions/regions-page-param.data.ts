'use server';
import getRegionArticles from 'app/api/articles/region';
import { parseParams } from 'app/parse-params';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { RegionParamProps } from 'models/Props';
import { cache } from 'react';

const regionPageParamData = cache(async function ({ params }: RegionParamProps) {
  const { regionId, locationId } = await parseParams(params);
  if (locationId == null) {
    const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
      item =>
        TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
        TRIPIE_REGION_BY_LOCATION[regionId as keyof typeof TRIPIE_REGION_BY_LOCATION][0]
    )?.[0];

    const dynamicBlurDataUrl = await getRegionArticles(selectedRegion);
    return { regionId, locationId, selectedRegion, dynamicBlurDataUrl };
  } else {
    const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
      item =>
        TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
        TRIPIE_REGION_BY_LOCATION[regionId as keyof typeof TRIPIE_REGION_BY_LOCATION][0]
    )?.[0];

    const dynamicBlurDataUrl = await getRegionArticles(locationId);
    return { regionId, locationId, dynamicBlurDataUrl, selectedRegion };
  }
});

export default regionPageParamData;
