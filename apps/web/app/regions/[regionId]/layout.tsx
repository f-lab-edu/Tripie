import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { RegionParamProps } from 'models/Props';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { RegionArticleData } from '../_components/RegionCard';
import pureRegionArticles from '../cache';

export async function generateStaticParams() {
  // Generate all regionId combinations for static generation
  return Object.keys(TRIPIE_REGION_BY_LOCATION).map(regionId => ({
    regionId,
  }));
}

export async function generateMetadata({ params }: RegionParamProps): Promise<Metadata> {
  const { regionId } = await params;
  const parsedRegionId = decodeURIComponent(regionId);
  const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
    item =>
      TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
      TRIPIE_REGION_BY_LOCATION[parsedRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION]?.[0]
  )?.[0];

  const data: RegionArticleData['data'] = await pureRegionArticles(selectedRegion);

  const title = `도시 별 여행 정보 살펴보기 > ${parsedRegionId}`;
  const preview = data.slice(0, 4);
  const description = preview.map(item => '✔️ ' + item.source.title).join('\n') + '...트리피에서 더 알아보기';
  const images = preview.map(item =>
    item.source.image.sizes.full.url
      .replace('https://res.cloudinary.com', 'https://www.tripie-api.shop')
      .replace('e_blur:2000,q_1', 'q_auto')
  );

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      title,
      description,
      images,
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}${parsedRegionId}`,
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
