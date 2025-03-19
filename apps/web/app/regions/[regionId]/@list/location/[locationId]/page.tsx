'use server';

import getRegionArticles from 'app/api/articles/region';
import { Params, parseParams } from 'app/parse-params';
import RegionList from 'app/regions/_components/RegionList';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { RegionParamProps } from 'models/Props';

async function pageParamData({ params }: RegionParamProps) {
  const { regionId, locationId } = await parseParams(params);
  return { locationId, regionId };
}

const Articles = async ({ params }: { params: Promise<Params> }) => {
  const { regionId, locationId } = await pageParamData({ params });
  const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
    item =>
      TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
      TRIPIE_REGION_BY_LOCATION[regionId as keyof typeof TRIPIE_REGION_BY_LOCATION][0]
  )?.[0];

  if (locationId == null) {
    return null;
  }

  const dynamicBlurDataUrl = await getRegionArticles(locationId);

  return <RegionList data={dynamicBlurDataUrl} selectedRegion={selectedRegion} />;
};

export default Articles;
