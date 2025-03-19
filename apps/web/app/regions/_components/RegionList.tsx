'use client';

import { List } from '@tripie-pyotato/design-system';
import { RegionArticleInfo } from 'models/Article';

import RegionCard from './RegionCard';

export type RegionArticleData = { regionId: string; data: RegionArticleInfo[] };

export default function RegionList({
  data,
}: Readonly<{
  data: RegionArticleData['data'];
}>) {
  return (
    <List.Grid>
      {data == null ? (
        <>지역 정보가 없습니다.</>
      ) : (
        data.map(article => <RegionCard article={article} key={article.id} />)
      )}
    </List.Grid>
  );
}
