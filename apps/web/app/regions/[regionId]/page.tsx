'use server';

import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import RegionList from '../_components/RegionList';
import RegionSelect from '../_components/RegionSelect';
import Title from '../_components/Title';

import { Text } from '@tripie-pyotato/design-system';
import getRegionArticles from 'app/api/articles/region';

const Articles = async ({ params }: { params: Promise<{ regionId: string }> }) => {
  const regionId = (await params).regionId;

  const currentRegionId = decodeURI(regionId);

  const selected = TRIPIE_REGION_BY_LOCATION[currentRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION];

  const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
    item => TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] === selected[0]
  )?.[0];

  const dynamicBlurDataUrl = await getRegionArticles(selectedRegion);

  return (
    <>
      <Title>
        도시 별<Text.Accented> 여행 </Text.Accented>정보 {` > `} <Text.Accented>{currentRegionId}</Text.Accented>
      </Title>
      <RegionSelect selected={currentRegionId} selectedRegion={selectedRegion} />
      <RegionList data={dynamicBlurDataUrl} selectedRegion={selectedRegion} />
    </>
  );
};

export default Articles;
