'use client';
import { Card, List } from '@tripie-pyotato/design-system';
import useImgAlt from 'hooks/useImgAlt';
import { RegionArticleInfo } from 'models/Article';
import { useRouter } from 'next/navigation';

export type RegionArticleData = { regionId: string; data: RegionArticleInfo[] };

const RegionCard = ({ article }: { article: RegionArticleInfo }) => {
  const navigate = useRouter();
  const { alt } = useImgAlt({ imgUrl: article.source.image.sizes.full.url });

  return (
    <List.Item>
      <Card.WithCoverImage
        src={article.source.image.sizes.small_square.url}
        alt={alt}
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
