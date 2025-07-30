import { RegionParamProps } from 'models/Props';
import { ReactNode } from 'react';

import firestoreService from 'app/api/firebase';
import { parseParams } from 'app/parse-params';
import { RegionArticleData } from 'app/regions/_components/RegionCard';
import regionPageParamData from 'app/regions/regions-page-param.data';
import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { RegionArticleInfo } from 'models/Article';
import { Metadata } from 'next';

export async function pageParamData({ params }: RegionParamProps) {
  const { regionId, locationId } = await parseParams(params);
  return { locationId, regionId };
}

export async function generateStaticParams() {
  const posts = (await firestoreService.getList('region-articles2')).flatMap((res: RegionArticleData) =>
    res.data.map(data => data.id)
  );

  return posts.map(id => ({
    id: String(id),
  }));
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
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}/${regionId}/location/${locationId}`,
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
