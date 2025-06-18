'use client';
import { AnimatedCard, Card } from '@tripie-pyotato/design-system/@components';
import { Text } from '@tripie-pyotato/design-system/@core';
import useImgAlt from 'hooks/useImgAlt';
import { RegionArticleInfo } from 'models/Article';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

export type RegionArticleData = { regionId: string; data: RegionArticleInfo[] };

const RegionCard = ({
  article,
  setSplash,
}: {
  setSplash?: Dispatch<SetStateAction<boolean>>;
  article: RegionArticleInfo;
}) => {
  const navigate = useRouter();
  const { alt } = useImgAlt({ imgUrl: article.source.image.sizes.full.url });
  return (
    <AnimatedCard
      onClick={() => {
        navigate.push(`/posts/${article.source.regionId}/articles/${article.id}`);
        if (setSplash != null) {
          setSplash(true);
        }
      }}
    >
      <Card.WithImage
        margin="none"
        alignItems="stretch"
        cover={true}
        sizes={'full'}
        imgSize={'full'}
        aspectRatio={'square'}
        src={article.source.image.sizes.small_square.url.replace(
          'https://res.cloudinary.com',
          'https://media.tripie-api.shop'
        )}
        alt={alt}
        cloudinaryUrl="https://media.tripie-api.shop"
      >
        <Card.Header size={'large'} bold={true}>
          <Text size="small">{article?.source?.title}</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Content padding="m">
          <Text size="small">{article?.source?.summary}</Text>
        </Card.Content>
      </Card.WithImage>
    </AnimatedCard>
  );
};

export default RegionCard;
