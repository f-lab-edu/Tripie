'use server';

import LocationSection from '../_components/LocationSection';
import { pageParamData } from './layout';

const Articles = async ({ params }: { params: Promise<{ regionId: string }> }) => {
  const { regionId, dynamicBlurDataUrl } = await pageParamData({ params });

  // locationId파람이 없음
  if (dynamicBlurDataUrl == null) {
    return <>missing..</>;
  }

  return <LocationSection regionId={regionId} />;
};

export default Articles;
