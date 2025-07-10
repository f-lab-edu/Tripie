'use client';

import { Container, Stack } from '@tripie-pyotato/design-system/@core/layout';
import { RegionArticleInfo } from 'models/Article';

import { useState } from 'react';
import Loading from 'shared/components/Loading';
import RegionCard from './RegionCard';

export type RegionArticleData = { regionId: string; data: RegionArticleInfo[] };

export default function RegionList({
  data,
}: Readonly<{
  data: RegionArticleData['data'];
}>) {
  const [splash, setSplash] = useState(false);
  return (
    <Container applyMargin="bottom">
      {splash ? <Loading.SemiTransparent loading={splash} /> : null}
      <Stack
        gridWrapOn={{ 'wrap-md': 2 }}
        gridRepeat={{ 'wrap-sm': 3, 'wrap-xl': 5 }}
        display="grid"
        gap="l"
        applyMargin="all"
      >
        {data == null ? (
          <>지역 정보가 없습니다.</>
        ) : (
          data.map(article => <RegionCard setSplash={setSplash} article={article} key={article.id} />)
        )}
      </Stack>
    </Container>
  );
}
