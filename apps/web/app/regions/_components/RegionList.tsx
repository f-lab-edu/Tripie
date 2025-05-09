'use client';

import { Stack } from '@tripie-pyotato/design-system/@core';
import { RegionArticleInfo } from 'models/Article';

import RegionCard from './RegionCard';

export type RegionArticleData = { regionId: string; data: RegionArticleInfo[] };

export default function RegionList({
  data,
}: Readonly<{
  data: RegionArticleData['data'];
}>) {
  return (
    <Stack
      cols={6}
      gridWrapOn={{ 'wrap-md': 2 }}
      gridRepeat={{ 'wrap-sm': 4, 'wrap-xl': 6 }}
      display="grid"
      gap="l"
      applyMargin="top-bottom"
    >
      {data == null ? (
        <>지역 정보가 없습니다.</>
      ) : (
        data.map(article => <RegionCard article={article} key={article.id} />)
      )}
    </Stack>
  );
}
