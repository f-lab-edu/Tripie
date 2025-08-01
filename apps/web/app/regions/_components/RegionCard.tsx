'use client';
import { AnimatedCard, Card } from '@tripie-pyotato/design-system/@components';
import { Text } from '@tripie-pyotato/design-system/@core';
import API from 'constants/api-routes';
import useImgAlt from 'hooks/useImgAlt';
import { RegionArticleInfo } from 'models/Article';
import Link from 'next/link';

export type RegionArticleData = { regionId: string; data: RegionArticleInfo[] };

const RegionCard = ({ article }: { article: RegionArticleInfo }) => {
  const { alt } = useImgAlt({ imgUrl: article.source.image.sizes.full.url });

  return (
    <Link href={`/posts/${article.source.regionId}/articles/${article.id}`}>
      <AnimatedCard>
        <Card.WithImage
          margin="none"
          alignItems="stretch"
          cover={true}
          sizes={'full'}
          imgSize={'full'}
          aspectRatio={'square'}
          src={article.source.image.sizes.small_square.url
            .replace('https://res.cloudinary.com', API.MEDIA_URL)
            .replace('.jpeg', '')}
          alt={alt}
          cloudinaryUrl={API.MEDIA_URL}
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
    </Link>
  );
};

export default RegionCard;
