'use server';

import { Container } from '@tripie-pyotato/design-system';
import { Params, parseParams } from 'app/parse-params';
import RegionTitle from 'app/regions/_components/RegionTitle';
import { TRIPIE_REGION_IDS } from 'constants/tripie-country';

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

  return (
    <Container applyMargin="left">
      <RegionTitle regionId={regionId} city={TRIPIE_REGION_IDS[locationId as keyof typeof TRIPIE_REGION_IDS]} />
    </Container>
  );
};

export default Articles;
