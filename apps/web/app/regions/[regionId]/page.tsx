'use server';

import { Container } from '@tripie-pyotato/design-system/@core';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import Error from 'shared/components/Error';
import RegionList from '../_components/RegionList';

import RegionTitle from '../_components/RegionTitle';
import RegionSelect from '../_components/Select';
import { pageParamData } from './layout';

const Articles = async ({ params }: { params: Promise<{ regionId: string }> }) => {
  const { regionId, dynamicBlurDataUrl } = await pageParamData({ params });
  const selectedRegion = TRIPIE_REGION_BY_LOCATION[regionId as keyof typeof TRIPIE_REGION_BY_LOCATION][0];

  // 지역 정보가 없음
  if (dynamicBlurDataUrl == null) {
    return <Error code={404} message={'이런 지역 정보가 없습니다!'} />;
  }

  return (
    <>
      <Container margin="xl" applyMargin="top" padding="none">
        <RegionTitle regionId={regionId} city={TRIPIE_REGION_IDS[selectedRegion as keyof typeof TRIPIE_REGION_IDS]} />
      </Container>
      <RegionSelect selected={regionId} selectedRegion={selectedRegion} />
      <RegionList data={dynamicBlurDataUrl} />
    </>
  );
};

export default Articles;
