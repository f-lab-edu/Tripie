'use server';

import { Text } from '@tripie-pyotato/design-system';
import getRegionArticles from 'app/api/articles/region';
import Title from 'app/regions/_components/Title';
import { TRIPIE_REGION_IDS } from 'constants/tripie-country';
import RegionList from '../../../_components/RegionList';
import RegionSelect from '../../../_components/RegionSelect';

const Articles = async ({ params }: { params: Promise<{ locationId: string; regionId: string }> }) => {
  const locationId = (await params).locationId;
  const regionId = (await params).regionId;

  const currentRegionId = decodeURI(regionId);
  const currentLocationId = decodeURI(locationId);

  const dynamicBlurDataUrl = await getRegionArticles(locationId);

  return (
    <>
      <Title>
        도시 별<Text.Accented> 여행 </Text.Accented>정보 {`\n > `}
        <Text.Accented>{currentRegionId}</Text.Accented> {` > `}
        <Text.Accented>{TRIPIE_REGION_IDS[locationId as keyof typeof TRIPIE_REGION_IDS]}</Text.Accented>
      </Title>
      <RegionSelect selected={currentRegionId} selectedRegion={currentLocationId} />
      <RegionList data={dynamicBlurDataUrl} selectedRegion={locationId} />
    </>
  );
};

export default Articles;
