import { RegionParamProps } from 'models/Props';
import { ReactNode } from 'react';

import { parseParams } from 'app/parse-params';
import regionPageParamData from 'app/regions/regions-page-param.data';
import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { RegionArticleInfo } from 'models/Article';
import { Metadata } from 'next';
import { preload } from 'react-dom';

export async function pageParamData({ params }: RegionParamProps) {
  const { regionId, locationId } = await parseParams(params);
  return { locationId, regionId };
}

export async function generateStaticParams() {
  // Generate all regionId + locationId combinations for static generation
  const params: { regionId: string; locationId: string }[] = [];

  for (const [regionId, locations] of Object.entries(TRIPIE_REGION_BY_LOCATION)) {
    for (const location of locations) {
      const locationId = Object.keys(TRIPIE_REGION_IDS).find(
        key => TRIPIE_REGION_IDS[key as keyof typeof TRIPIE_REGION_IDS] === location
      );
      if (locationId) {
        params.push({ regionId, locationId });
      }
    }
  }

  return params;
}

export async function generateMetadata({ params }: RegionParamProps): Promise<Metadata> {
  const { regionId, locationId } = await pageParamData({ params });

  const place = TRIPIE_REGION_IDS[locationId as keyof typeof TRIPIE_REGION_IDS];

  const title = `도시 별 여행 정보 살펴보기 > ${regionId} > ${place}`;

  const { dynamicBlurDataUrl } = await regionPageParamData({ params });

  const preview = dynamicBlurDataUrl.slice(0, 4);

  const description = `${preview.map((item: RegionArticleInfo) => '📌 ' + item.source.title).join('\n')}...\n👉 "${place}"에 대해서 트리피에서 자세히 알아보기!`;

  const images = preview.map((item: RegionArticleInfo) =>
    item.source.image.sizes.large.url
      .replace('https://res.cloudinary.com', API.BASE_URL as string)
      .replace('e_blur:2000,q_1', 'q_auto:good')
      .replace('.jpeg', '')
  );

  const firstImage = images[0];

  if (firstImage) {
    preload(firstImage, { as: 'image', fetchPriority: 'high' });
  }

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      title,
      description,
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}${regionId}/location/${locationId}`,
      images,
    },
    other: {
      'link-preload-image': firstImage,
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
