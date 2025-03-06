'use server';

import RegionList from '../_components/Region/RegionList';
import RegionSelect from '../_components/Region/Select';

import { Text } from '@tripie-pyotato/design-system';
import getRegionArticles from 'app/api/articles/region';
import Title from '../_components/Region/Title';
import { parseParams } from './parse-params';

import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ regionId: string }>;
};

async function pageParamData({ params }: Props) {
  const { regionId, selectedRegionCity } = await parseParams(params);
  const dynamicBlurDataUrl = await getRegionArticles(selectedRegionCity);
  return { regionId, selectedRegionCity, dynamicBlurDataUrl };
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { regionId, dynamicBlurDataUrl, selectedRegionCity } = await pageParamData({ params });

  const previousImages = (await parent).openGraph?.images || [];
  const title = `도시 별 여행 정보 > ${regionId}`;
  const sneakPeak = dynamicBlurDataUrl.slice(0, 5);
  const description = `${regionId} 여행 정보\n ${sneakPeak
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
      images: [...sneakPeak.map(item => item.source.image.sizes.full.url), ...previousImages],
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}/${selectedRegionCity}`,
    },
  };
}

const Articles = async ({ params }: { params: Promise<{ regionId: string }> }) => {
  const { regionId, dynamicBlurDataUrl, selectedRegionCity } = await pageParamData({ params });

  return (
    <>
      <Title>
        도시 별<Text.Accented> 여행 </Text.Accented>정보 {` > `} <Text.Accented>{regionId}</Text.Accented>
      </Title>
      <RegionSelect selected={regionId} selectedRegion={selectedRegionCity} />
      <RegionList data={dynamicBlurDataUrl} selectedRegion={selectedRegionCity} />
    </>
  );
};

export default Articles;
