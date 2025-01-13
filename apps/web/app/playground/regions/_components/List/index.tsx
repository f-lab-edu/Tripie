'use client';

import { Container, Headings } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { RegionArticleInfo } from 'models/Article';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import Card from 'shared/components/Card/Card';
import Divider from 'shared/components/Divider/Divider';
import List from 'shared/components/List/List';
import Style from './list.module.scss';

const cx = classNames.bind(Style);

export type RegionArticleData = { regionId: string; data: RegionArticleInfo[] };

export function RegionList({
  data,
  selected,
  selectedRegion,
}: Readonly<{
  data: RegionArticleData[];
  selected: string;
  selectedRegion: string;
}>) {
  // 지역 리스트
  const regions = useMemo(() => {
    if (data == null) {
      return [];
    }

    const selectedData = data.filter(
      (v: { data: RegionArticleInfo[]; regionId: string }) =>
        TRIPIE_REGION_IDS[v.regionId as keyof typeof TRIPIE_REGION_IDS] === selectedRegion
    )[0];

    // 선택 지역이 없다면
    if (selectedData == null) {
      return null;
    }

    return selectedData;
  }, [data, selectedRegion, selected]) as { regionId: string; data: RegionArticleInfo[] };

  const navigate = useRouter();

  return (
    <List.Grid>
      {regions?.data == null ? (
        <>지역 정보가 없습니다.</>
      ) : (
        regions.data.map(article => (
          <Card.ClickableContent
            key={article.id}
            onClick={() => navigate.push(`/regions/${regions.regionId}/articles/${article.id}`)}
            className={cx('article-card')}
          >
            <img
              src={article.source.image.sizes.small_square.url}
              alt={article.source.image.sizes.full.url}
              className={cx('thumbnail')}
            />
            <Container>
              <Container margin="sm" applyMargin="bottom">
                <Headings.H3>{article?.source?.title}</Headings.H3>
                <Divider />
              </Container>
              {article?.source?.summary}
            </Container>
          </Card.ClickableContent>
        ))
      )}
    </List.Grid>
  );
}
