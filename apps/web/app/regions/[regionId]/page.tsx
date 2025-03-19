'use server';

import { Container } from '@tripie-pyotato/design-system';
import getRegionArticles from 'app/api/articles/region';
import { parseParams } from 'app/parse-params';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import RegionTitle from '../_components/RegionTitle';

type Props = {
  params: Promise<{ regionId: string }>;
};

async function pageParamData({ params }: Props) {
  const { regionId } = await parseParams(params);
  const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
    item =>
      TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
      TRIPIE_REGION_BY_LOCATION[regionId as keyof typeof TRIPIE_REGION_BY_LOCATION][0]
  )?.[0];

  const dynamicBlurDataUrl = await getRegionArticles(selectedRegion);
  return { regionId, selectedRegion, dynamicBlurDataUrl };
}

const Articles = async ({ params }: { params: Promise<{ regionId: string }> }) => {
  const { regionId, dynamicBlurDataUrl } = await pageParamData({ params });

  if (dynamicBlurDataUrl == null) {
    return <>missing..</>;
  }

  // locationId파람이 없음
  return (
    <Container applyMargin="left">
      <RegionTitle regionId={regionId} />
    </Container>
  );
};

export default Articles;
