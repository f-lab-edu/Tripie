'use server';

import { Text } from '@tripie-pyotato/design-system';
import getRegionArticles from 'app/api/articles/region';
import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { Metadata } from 'next';
import RegionList from '../../../_components/RegionList';
import RegionSelect from '../../../_components/Select';
import Title from '../../../_components/Title';
import { Params, parseParams } from '../../parse-params';

type Props = {
  params: Promise<{ regionId: string }>;
};

async function pageParamData({ params }: Props) {
  const { regionId, locationId, city } = await parseParams(params);
  const articles = await getRegionArticles(locationId as string);
  return { locationId, regionId, city, articles };
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { regionId, city, articles } = await pageParamData({ params });
  const sneakPeak = articles.slice(0, 5);

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
      images: [...sneakPeak.map(({ source }) => source.image.sizes?.full.url)],
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}/${regionId}/location/${city}`,
    },
  };
}

const Articles = async ({ params }: { params: Promise<Params> }) => {
  const { regionId, locationId, city, articles } = await pageParamData({ params });

  if (locationId == null) {
    return <>missing..</>;
  }

  return (
    <>
      <Title>
        도시 별<Text.Accented> 여행 </Text.Accented>정보 {`\n > `} <Text.Accented>{regionId}</Text.Accented> {` > `}
        <Text.Accented>{city}</Text.Accented>
      </Title>
      <RegionSelect selected={regionId} selectedRegion={locationId} />
      <RegionList data={articles} selectedRegion={locationId} />
    </>
  );
};

export default Articles;
