'use client';

import { Container, Headings } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { RegionArticleInfo } from 'models/Article';
import { useRouter } from 'next/navigation';
import Card from 'shared/components/Card/Card';
import Divider from 'shared/components/Divider/Divider';
import List from 'shared/components/List/List';
import Style from './region-list.module.scss';

const cx = classNames.bind(Style);

export type RegionArticleData = { regionId: string; data: RegionArticleInfo[] };

export default function RegionList({
  data,
  selectedRegion,
}: Readonly<{
  data: RegionArticleData['data'];
  selectedRegion: string;
}>) {
  const navigate = useRouter();

  return (
    <List.Grid>
      {data == null ? (
        <>지역 정보가 없습니다.</>
      ) : (
        data.map(article => (
          <Card.ClickableContent
            key={article.id}
            onClick={() => navigate.push(`/regions/${selectedRegion}/articles/${article.id}`)}
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
