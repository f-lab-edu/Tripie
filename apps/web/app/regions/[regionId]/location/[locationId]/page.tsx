'use server';

import { Text } from '@tripie-pyotato/design-system';
import getRegionArticles from 'app/api/articles/region';
import Title from 'app/regions/_components/Title';
import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { Metadata, ResolvingMetadata } from 'next';
import RegionList from '../../../_components/RegionList';
import RegionSelect from '../../../_components/RegionSelect';

type Params = { regionId: string; locationId: string };

const parseParams = async (params: Promise<Params>) => {
  const { regionId, locationId } = await params;
  return {
    regionId: decodeURIComponent(regionId),
    locationId: decodeURIComponent(locationId),
    city: TRIPIE_REGION_IDS[locationId as keyof typeof TRIPIE_REGION_IDS],
  };
};

export async function generateMetadata(
  { params }: { params: Promise<Params> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { regionId, locationId, city } = await parseParams(params);
  const articles = await getRegionArticles(locationId);
  const sneakPeak = articles.slice(0, 5);

  const previousImages = (await parent).openGraph?.images || [];
  const title = `도시 별 여행 정보 > ${regionId} > ${city}`;
  const description = `${regionId} > ${city} 여행 정보\n${sneakPeak
    .map(({ source }) => `✔️ ${source.title} | ${source.summary}`)
    .join('\n')}\n...\n👉 트리피에서 자세히 알아보기!`;

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      title,
      description,
      images: [...sneakPeak.map(({ source }) => source.image.sizes?.full.url), ...previousImages],
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}/${regionId}/location/${city}`,
    },
  };
}

const Articles = async ({ params }: { params: Promise<Params> }) => {
  const { regionId, locationId, city } = await parseParams(params);
  const articles = await getRegionArticles(locationId);

  return (
    <>
      <Title>
        도시 별<Text.Accented> 여행 </Text.Accented>정보 {`\n > `}
        <Text.Accented>{regionId}</Text.Accented> {` > `}
        <Text.Accented>{city}</Text.Accented>
      </Title>
      <RegionSelect selected={regionId} selectedRegion={locationId} />
      <RegionList data={articles} selectedRegion={locationId} />
    </>
  );
};

export default Articles;
