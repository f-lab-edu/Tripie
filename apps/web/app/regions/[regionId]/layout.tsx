'use server';

import '@tripie-pyotato/design-system/global';

import getRegionArticles from 'app/api/articles/region';
import { parseParams } from 'app/parse-params';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { RegionParamProps } from 'models/Props';

import { ReactNode } from 'react';
import RegionLayout from '../_components/Layout';

export async function pageParamData({ params }: RegionParamProps) {
  const { regionId } = await parseParams(params);
  const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
    item =>
      TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
      TRIPIE_REGION_BY_LOCATION[regionId as keyof typeof TRIPIE_REGION_BY_LOCATION][0]
  )?.[0];

  const dynamicBlurDataUrl = await getRegionArticles(selectedRegion);
  return { regionId, selectedRegion, dynamicBlurDataUrl };
}

export default async function Layout({
  children,
  select,
  list,
}: Readonly<{
  children: ReactNode;
  select: ReactNode;
  list: ReactNode;
}>) {
  return (
    <RegionLayout>
      {children}
      {select}
      {list}
    </RegionLayout>
  );
}
