'use server';

import { Params } from 'app/parse-params';
import RegionSelect from 'app/regions/_components/Select';
import regionPageParamData from 'app/regions/regions-page-param.data';

const Articles = async ({ params }: { params: Promise<Params> }) => {
  const { regionId, locationId } = await regionPageParamData({ params });

  if (locationId == null) {
    return <>missing..</>;
  }

  return <RegionSelect selected={regionId} selectedRegion={locationId} />;
};

export default Articles;
