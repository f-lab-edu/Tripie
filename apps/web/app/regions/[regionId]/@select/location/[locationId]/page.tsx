'use server';

import { Params, parseParams } from 'app/parse-params';
import RegionSelect from 'app/regions/_components/Select';
import { RegionParamProps } from 'models/Props';

async function pageParamData({ params }: RegionParamProps) {
  const { regionId, locationId } = await parseParams(params);
  return { locationId, regionId };
}

const Articles = async ({ params }: { params: Promise<Params> }) => {
  const { regionId, locationId } = await pageParamData({ params });

  if (locationId == null) {
    return <>missing..</>;
  }

  return <RegionSelect selected={regionId} selectedRegion={locationId} />;
};

export default Articles;
