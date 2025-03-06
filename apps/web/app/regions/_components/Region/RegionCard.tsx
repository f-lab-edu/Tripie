'use client';
import { Card } from '@tripie-pyotato/design-system';
import useImgAlt from 'hooks/useImgAlt';
import { RegionArticleInfo } from 'models/Article';
import { useRouter } from 'next/navigation';

export type RegionArticleData = { regionId: string; data: RegionArticleInfo[] };

const RegionCard = ({ article, selectedRegion }: { article: RegionArticleInfo; selectedRegion: string }) => {
  const navigate = useRouter();
  const { alt } = useImgAlt({ imgUrl: article.source.image.sizes.full.url });

  return (
    <Card.WithCoverImage
      src={article.source.image.sizes.small_square.url}
      alt={alt}
      sourceUrl={article.source.image?.sourceUrl}
      title={article?.source?.title}
      summary={article?.source?.summary}
      imageSize="card"
      withBorder={false}
      blurDataURL={article.source.image.blurData?.data}
      onClick={() => navigate.push(`/regions/${selectedRegion}/articles/${article.id}`)}
    />
  );
};

export default RegionCard;
