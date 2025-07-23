'use server';

import '@tripie-pyotato/design-system/global';

import getRegionArticles from 'app/api/articles/region';
import { parseParams } from 'app/parse-params';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { RegionParamProps } from 'models/Props';
import { Metadata } from 'next';
import { sharedMetaData } from '../../shared-metadata';

import { RegionArticleInfo } from 'models/Article';
import { ReactNode } from 'react';

export async function pageParamData({ params }: RegionParamProps) {
  const { regionId } = await parseParams(params);

  const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
    item =>
      TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
      TRIPIE_REGION_BY_LOCATION[regionId as keyof typeof TRIPIE_REGION_BY_LOCATION]?.[0]
  )?.[0];

  const dynamicBlurDataUrl = await getRegionArticles(selectedRegion);

  return { regionId, selectedRegion, dynamicBlurDataUrl };
}

export async function generateMetadata({ params }: RegionParamProps): Promise<Metadata> {
  const { regionId } = await params;

  const decodeUriRegion = decodeURIComponent(regionId);
  const title = `도시 별 여행 정보 살펴보기 > ${decodeUriRegion}`;
  const description = `✔️ [${decodeUriRegion}] ${TRIPIE_REGION_BY_LOCATION[decodeUriRegion as keyof typeof TRIPIE_REGION_BY_LOCATION].join(', ')}...\n👉 트리피에서 자세히 알아보기!`;
  const { dynamicBlurDataUrl } = await pageParamData({ params });

  const preview = dynamicBlurDataUrl.slice(0, 4);

  const images = preview.map((item: RegionArticleInfo) => item.source.image.sizes.large.url);

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      title,
      description,
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}/${decodeUriRegion}`,
      images,
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
