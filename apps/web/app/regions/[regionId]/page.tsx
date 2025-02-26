'use server';

import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import RegionList from '../_components/RegionList';
import RegionSelect from '../_components/RegionSelect';
import Title from '../_components/Title';

import { Text } from '@tripie-pyotato/design-system';
import getRegionArticles from 'app/api/articles/region';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { Metadata, ResolvingMetadata } from 'next';
import { sharedMetaData } from '../shared-metadata';

type Props = {
  params: Promise<{ regionId: string; articleId: string }>;
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const regionId = (await params).regionId;

  const currentRegionId = decodeURI(regionId);
  const selected = TRIPIE_REGION_BY_LOCATION[currentRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION];
  const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
    item => TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] === selected[0]
  )?.[0];

  const dynamicBlurDataUrl = await getRegionArticles(selectedRegion);

  const previousImages = (await parent).openGraph?.images || [];
  const title = `도시 별 여행 정보 > ${currentRegionId}`;
  const sneakPeak = dynamicBlurDataUrl.slice(0, 7);
  const description = `${currentRegionId} 여행 정보\n ${sneakPeak
    .map(item => {
      return `✔️ ${item.source.title} | ${item.source.summary}`;
    })
    .join('\n')}\n...\n👉 트리피에서 자세히 알아보기!`;

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      title,
      description,
      images: [...sneakPeak.map(item => item.source.image.sizes.url), ...previousImages],
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}/${selectedRegion}`,
    },
  };
}

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
