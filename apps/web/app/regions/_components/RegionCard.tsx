'use client';
import { Card } from '@tripie-pyotato/design-system/@components';
import { List } from '@tripie-pyotato/design-system/@core';
import useImgAlt from 'hooks/useImgAlt';
import { RegionArticleInfo } from 'models/Article';
import { useRouter } from 'next/navigation';

export type RegionArticleData = { regionId: string; data: RegionArticleInfo[] };

const RegionCard = ({ article }: { article: RegionArticleInfo }) => {
  const navigate = useRouter();
  const { alt } = useImgAlt({ imgUrl: article.source.image.sizes.full.url });

  return (
    <List.Item alignItems="stretch">
      <Card.WithCoverImage
        src={article.source.image.sizes.small_square.url}
        alt={alt}
        isFullSize={true}
        sourceUrl={article.source.image?.sourceUrl}
        title={article?.source?.title}
        summary={article?.source?.summary}
        withBorder={false}
        blurDataURL={article.source.image.blurData?.data}
        onClick={() => navigate.push(`/posts/${article.source.regionId}/articles/${article.id}`)}
      />
    </List.Item>
  );
};

export default RegionCard;
