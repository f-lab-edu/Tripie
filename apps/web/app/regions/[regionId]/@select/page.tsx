'use server';

import { Params } from 'app/parse-params';
import RegionSelect from 'app/regions/_components/Select';
import regionPageParamData from 'app/regions/regions-page-param.data';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';

const Articles = async ({ params }: { params: Promise<Params> }) => {
  const { regionId } = await regionPageParamData({ params });

  const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
    item =>
      TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
      TRIPIE_REGION_BY_LOCATION[regionId as keyof typeof TRIPIE_REGION_BY_LOCATION][0]
  )?.[0];

  return <RegionSelect selected={regionId} selectedRegion={selectedRegion} />;
};

export default Articles;
