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
import { sharedMetaData } from '../../shared-metadata';

type Params = { regionId: string };

type Props = {
  params: Promise<{ regionId: string }>;
};

const parseParams = async (params: Promise<Params>) => {
  const { regionId } = await params;
  const decodedRegionId = decodeURIComponent(regionId);
  const selectedIds = TRIPIE_REGION_BY_LOCATION[decodedRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION];
  const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
    item => TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] === selectedIds[0]
  )?.[0];

  return {
    regionId: decodedRegionId,
    selectedRegion,
  };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { regionId, selectedRegion } = await parseParams(params);

  const dynamicBlurDataUrl = await getRegionArticles(selectedRegion);

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
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}/${selectedRegion}`,
    },
  };
}

const Articles = async ({ params }: { params: Promise<{ regionId: string }> }) => {
  const { regionId, selectedRegion } = await parseParams(params);
  const dynamicBlurDataUrl = await getRegionArticles(selectedRegion);

  return (
    <>
      <Title>
        도시 별<Text.Accented> 여행 </Text.Accented>정보 {` > `} <Text.Accented>{regionId}</Text.Accented>
      </Title>
      <RegionSelect selected={regionId} selectedRegion={selectedRegion} />
      <RegionList data={dynamicBlurDataUrl} selectedRegion={selectedRegion} />
    </>
  );
};

export default Articles;
