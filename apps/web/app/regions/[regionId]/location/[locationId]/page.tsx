'use server';

import { Text } from '@tripie-pyotato/design-system';
import getRegionArticles from 'app/api/articles/region';
import Title from 'app/regions/_components/Title';
import { sharedMetaData } from 'app/regions/shared-metadata';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { Metadata, ResolvingMetadata } from 'next';
import RegionList from '../../../_components/RegionList';
import RegionSelect from '../../../_components/RegionSelect';

type Props = {
  params: Promise<{ regionId: string; locationId: string }>;
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const regionId = (await params).regionId;
  const locationId = (await params).locationId;

  const currentRegionId = decodeURI(regionId);

  const dynamicBlurDataUrl = await getRegionArticles(locationId);

  const currentCity = TRIPIE_REGION_IDS[locationId as keyof typeof TRIPIE_REGION_IDS];

  const previousImages = (await parent).openGraph?.images || [];
  const title = `도시 별 여행 정보 > ${currentRegionId} > ${currentCity}`;
  const sneakPeak = dynamicBlurDataUrl.slice(0, 5);
  const description = `${currentRegionId} > ${currentCity} 여행 정보\n${sneakPeak
    .map(item => {
      return `✔️ ${item.source.title} |  ${item.source.summary}`;
    })
    .join('\n')}\n...\n👉 트리피에서 자세히 알아보기!`;

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      title,
      description,
      images: [...sneakPeak.map(item => item.source.image.sizes?.full.url), ...previousImages], // 새 이미지 먼저
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}/${currentRegionId}/location/${currentCity}`,
    },
  };
}

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
