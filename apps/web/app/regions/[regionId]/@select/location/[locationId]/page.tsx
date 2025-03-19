'use server';

import { Params, parseParams } from 'app/parse-params';
import RegionSelect from 'app/regions/_components/Select';

type Props = {
  params: Promise<{ regionId: string }>;
};

async function pageParamData({ params }: Props) {
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
