import { Container } from '@tripie-pyotato/design-system/@core';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { Suspense } from 'react';
import Loading from 'shared/components/Loading';
import RegionList from '../_components/RegionList';
import RegionTitle from '../_components/RegionTitle';
import RegionSelect from '../_components/Select';
import pureRegionArticles from '../cache';

export default async function Page({ params }: { params: { regionId: string } }) {
  const { regionId } = await params;
  const parsedRegionId = decodeURIComponent(regionId);
  const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
    item =>
      TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
      TRIPIE_REGION_BY_LOCATION[parsedRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION]?.[0]
  )?.[0];

  const data = await pureRegionArticles(selectedRegion);

  return (
    <>
      <Container margin="xl" applyMargin="top" padding="none">
        <RegionTitle
          regionId={parsedRegionId}
          city={TRIPIE_REGION_IDS[selectedRegion as keyof typeof TRIPIE_REGION_IDS]}
        />
      </Container>
      <Suspense fallback={<Loading />}>
        <RegionSelect selected={parsedRegionId} selectedRegion={selectedRegion} />
      </Suspense>
      <RegionList data={data} />
    </>
  );
}
