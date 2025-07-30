import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { RegionArticleData } from './_components/RegionCard';
import pureRegionArticles from './cache';

export async function generateMetadata(): Promise<Metadata> {
  const regions = Object.keys(TRIPIE_REGION_BY_LOCATION);
  const title = `도시 별 여행 정보 살펴보기`;

  const currentRegionId = Object.keys(TRIPIE_REGION_BY_LOCATION)[0];
  const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
    item =>
      TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
      TRIPIE_REGION_BY_LOCATION[currentRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION][0]
  )?.[0];

  const description = `${regions
    .slice(0, 3)
    .map(key => {
      return `✔️ ${key} | ${TRIPIE_REGION_BY_LOCATION[key as keyof typeof TRIPIE_REGION_BY_LOCATION]}`;
    })
    .join('\n')}...\n👉 트리피에서 자세히 알아보기!`;

  const data: RegionArticleData['data'] = await pureRegionArticles(selectedRegion);

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      title,
      description,
      images: data.map(item =>
        item.source.image.sizes.full.url
          .replace('https://res.cloudinary.com', 'https://www.tripie-api.shop')
          .replace('e_blur:2000,q_1', 'q_auto')
      ),
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}`,
    },
  };
}

export default async function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
