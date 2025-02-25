'use server';
import { Card, Container, TripieImage } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import getArticleDetail from 'app/api/articles/detail';
import Title from 'app/regions/_components/Title';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import type { Metadata, ResolvingMetadata } from 'next';
import Style from './article-body.module.scss';
import ArticleBody, { BodyItemProps } from './ArticleBody';

const cx = classNames.bind(Style);

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
type Props = {
  params: Promise<{ regionId: string; articleId: string }>;
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const regionId = (await params).regionId;
  const articleId = (await params).articleId;

  const { data } = await getArticleDetail('article', regionId, articleId);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `✈️Tripie | ${data?.metadataContents.title}`,
    openGraph: {
      images: [data?.metadataContents.image.sizes?.full?.url ?? '', ...previousImages],
      type: 'website',
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}/${regionId}/articles/${articleId}`,
      title: `${data?.metadataContents.title}`,
      description: `${data?.metadataContents.description}`,
      siteName: 'Tripie',
    },
  };
}

const Articles = async ({ params }: Props) => {
  const regionId = (await params).regionId;
  const articleId = (await params).articleId;

  const { data, blurredThumbnail } = await getArticleDetail('article', regionId, articleId);

  if (data == null) {
    return <>missing...</>;
  }

  return (
    <Container applyMargin="top" margin="l" align="center">
      <Card.Content className={cx('fit-content')}>
        <Container margin="m" applyMargin="left-right">
          <Title withNavigation={false}>{data?.metadataContents?.title}</Title>
        </Container>
        <Container margin="m" applyMargin="all" className={cx('img-container')}>
          <TripieImage
            src={data?.metadataContents?.image?.sizes?.full?.url}
            alt={`${data?.metadataContents?.image?.sizes?.full?.url}의 썸네일`}
            blurDataURL={blurredThumbnail?.data}
            sizes="large"
          />
        </Container>
        <Container margin="m" applyMargin="left-right">
          <ArticleBody items={data?.body as BodyItemProps[]} regionId={regionId} dataUrl={data.id} />
        </Container>
      </Card.Content>
    </Container>
  );
};

export default Articles;
