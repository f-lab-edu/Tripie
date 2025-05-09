'use client';
import { AnimatedCard } from '@tripie-pyotato/design-system/@components';
import { TripieCard } from '@tripie-pyotato/design-system/@core';
import useImgAlt from 'hooks/useImgAlt';
import { RegionArticleInfo } from 'models/Article';
import { useRouter } from 'next/navigation';

export type RegionArticleData = { regionId: string; data: RegionArticleInfo[] };

const RegionCard = ({ article }: { article: RegionArticleInfo }) => {
  const navigate = useRouter();
  const { alt } = useImgAlt({ imgUrl: article.source.image.sizes.full.url });

  return (
    <AnimatedCard onClick={() => navigate.push(`/posts/${article.source.regionId}/articles/${article.id}`)}>
      <TripieCard.WithImage
        margin="none"
        alignItems="stretch"
        cover={true}
        sizes={'full'}
        imgSize={'full'}
        src={article.source.image.sizes.small_square.url}
        alt={alt}
      >
        <TripieCard.Header size={'large'} bold={true}>
          {article?.source?.title}
        </TripieCard.Header>
        <TripieCard.Divider />
        <TripieCard.Content padding="m">{article?.source?.summary}</TripieCard.Content>
      </TripieCard.WithImage>
    </AnimatedCard>
  );
};

export default RegionCard;
