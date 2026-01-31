import { Params } from 'app/parse-params';

import RegionContents from '@/app/regions/_components/RegionContents';
import { Container } from '@tripie-pyotato/design-system/@core';
import regionPageParamData from 'app/regions/regions-page-param.data';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { pageParamData } from './layout';

const Articles = async ({ params }: { params: Promise<Params> }) => {
  const { regionId, locationId } = await pageParamData({ params });

  if (regionId == null) {
    return <>missing..</>;
  }

  const { dynamicBlurDataUrl } = await regionPageParamData({ params });

  const selectedRegion =
    locationId == null ? TRIPIE_REGION_BY_LOCATION[regionId as keyof typeof TRIPIE_REGION_BY_LOCATION][0] : locationId;

  return (
    <Container margin="xl" applyMargin="top" padding="none">
      <RegionContents
        data={dynamicBlurDataUrl}
        currentRegionId={regionId}
        selectedRegion={selectedRegion}
        city={TRIPIE_REGION_IDS[selectedRegion as keyof typeof TRIPIE_REGION_IDS]}
      />
    </Container>
  );
};

export default Articles;
