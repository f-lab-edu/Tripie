'use server';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { TRIPIE_REGION_BY_LOCATION } from 'constants/tripie-country';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { sharedMetaData } from '../shared-metadata';

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

export default async function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
