'use client';

import { Container, Headings } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import useImgAlt from 'hooks/useImgAlt';
import { RegionArticleInfo } from 'models/Article';
import { useRouter } from 'next/navigation';
import Card from 'shared/components/Card/Card';
import Divider from 'shared/components/Divider/Divider';
import List from 'shared/components/List/List';
import Style from './region-list.module.scss';

const cx = classNames.bind(Style);

export type RegionArticleData = { regionId: string; data: RegionArticleInfo[] };

const RegionCard = ({ article, selectedRegion }: { article: RegionArticleInfo; selectedRegion: string }) => {
  const navigate = useRouter();
  const { alt } = useImgAlt({ imgUrl: article.source.image.sizes.full.url });
  return (
    <Card.ClickableContent
      key={article.id}
      onClick={() => navigate.push(`/regions/${selectedRegion}/articles/${article.id}`)}
      className={cx('article-card')}
    >
      <img src={article.source.image.sizes.small_square.url} alt={alt} className={cx('thumbnail')} />
      <Container>
        <Container margin="sm" applyMargin="bottom">
          <Headings.H3>{article?.source?.title}</Headings.H3>
          <Divider />
        </Container>
        {article?.source?.summary}
      </Container>
    </Card.ClickableContent>
  );
};

export default function RegionList({
  data,
  selectedRegion,
}: Readonly<{
  data: RegionArticleData['data'];
  selectedRegion: string;
}>) {
  return (
    <List.Grid>
      {data == null ? (
        <>지역 정보가 없습니다.</>
      ) : (
        data.map(article => <RegionCard article={article} selectedRegion={selectedRegion} key={article.id} />)
      )}
    </List.Grid>
  );
}
