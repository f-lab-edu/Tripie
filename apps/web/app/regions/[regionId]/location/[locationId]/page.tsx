'use server';

import { Params } from 'app/parse-params';
import LocationSection from 'app/regions/_components/LocationSection';
import { TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { pageParamData } from './layout';

const Articles = async ({ params }: { params: Promise<Params> }) => {
  const { regionId, locationId } = await pageParamData({ params });

  if (locationId == null) {
    return <>missing..</>;
  }

  return <LocationSection regionId={regionId} city={TRIPIE_REGION_IDS[locationId as keyof typeof TRIPIE_REGION_IDS]} />;
};

export default Articles;
