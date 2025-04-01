'use server';

import { RegionParamProps } from 'models/Props';
import { ReactNode } from 'react';

import { parseParams } from 'app/parse-params';

export async function pageParamData({ params }: RegionParamProps) {
  const { regionId, locationId } = await parseParams(params);
  return { locationId, regionId };
}

export default async function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
