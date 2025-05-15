'use client';
import { AnimatedCard, Card } from '@tripie-pyotato/design-system/@components';
import useImgAlt from 'hooks/useImgAlt';
import { RegionArticleInfo } from 'models/Article';
import { useRouter } from 'next/navigation';

export type RegionArticleData = { regionId: string; data: RegionArticleInfo[] };

const RegionCard = ({ article }: { article: RegionArticleInfo }) => {
  const navigate = useRouter();
  const { alt } = useImgAlt({ imgUrl: article.source.image.sizes.full.url });
  return (
    <AnimatedCard onClick={() => navigate.push(`/posts/${article.source.regionId}/articles/${article.id}`)}>
      <Card.WithImage
        margin="none"
        alignItems="stretch"
        cover={true}
        sizes={'full'}
        imgSize={'full'}
        aspectRatio={'square'}
        src={article.source.image.sizes.full.url}
        alt={alt}
      >
        <Card.Header size={'large'} bold={true}>
          {article?.source?.title}
        </Card.Header>
        <Card.Divider />
        <Card.Content padding="m">{article?.source?.summary}</Card.Content>
      </Card.WithImage>
    </AnimatedCard>
  );
};

export default RegionCard;
