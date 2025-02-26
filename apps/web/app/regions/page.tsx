'use server';

import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import RegionSelect from './_components/RegionSelect';

import { Text } from '@tripie-pyotato/design-system';
import getRegionArticles from 'app/api/articles/region';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { Metadata } from 'next';
import { sharedMetaData } from '../shared-metadata';
import RegionList from './_components/RegionList';
import Title from './_components/Title';

export async function generateMetadata(): Promise<Metadata> {
  const regions = Object.keys(TRIPIE_REGION_BY_LOCATION);
  const title = `도시 별 여행 정보 살펴보기`;

  const description = `${regions
    .slice(0, 3)
    .map(key => {
      return `✔️ ${key} | ${TRIPIE_REGION_BY_LOCATION[key as keyof typeof TRIPIE_REGION_BY_LOCATION]}`;
    })
    .join('\n')}...\n👉 트리피에서 자세히 알아보기!`;

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      title,
      description,

      url: `${API.BASE_URL}${ROUTE.REGIONS.href}`,
    },
  };
}

const Articles = async () => {
  const currentRegionId = Object.keys(TRIPIE_REGION_BY_LOCATION)[0];
  const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
    item =>
      TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
      TRIPIE_REGION_BY_LOCATION[currentRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION][0]
  )?.[0];

  const dynamicBlurDataUrl = await getRegionArticles(selectedRegion);

  return (
    <>
      <Title>
        도시 별<Text.Accented> 여행 </Text.Accented>정보
      </Title>
      <RegionSelect selected={currentRegionId} selectedRegion={selectedRegion} />
      <RegionList data={dynamicBlurDataUrl} selectedRegion={selectedRegion} />
    </>
  );
};

export default Articles;
