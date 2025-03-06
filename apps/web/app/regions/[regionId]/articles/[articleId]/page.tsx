'use server';
import getArticleDetail from 'app/api/articles/detail';

import { TripieImage } from '@tripie-pyotato/design-system';
import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { Metadata } from 'next';
import ArticleLayout from '../../_components/ArticleLayout';
import ArticleTitle from '../../_components/ArticleLayout/Elements/ArticleTitle';
import ArticleBody, { BodyItemProps } from './ArticleBody';

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export type Props = {
  params: Promise<{ regionId: string; articleId: string }>;
};

export async function pageParamData({ params }: Props) {
  const regionId = (await params).regionId;
  const articleId = (await params).articleId;

  const { data, blurredThumbnail } = await getArticleDetail('article', regionId, articleId);

  const description = data?.metadataContents?.description ?? sharedMetaData?.description;
  const title = data?.metadataContents.title ?? '';

  return { regionId, articleId, data, blurredThumbnail, description, title };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { regionId, articleId, data, description, title } = await pageParamData({ params });

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      images: [data?.metadataContents.image.sizes?.full?.url ?? ''],
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}/${regionId}/articles/${articleId}`,
      title,
      description,
    },
  };
}

const Articles = async ({ params }: Props) => {
  const { regionId, data, blurredThumbnail } = await pageParamData({ params });

  if (data?.metadataContents?.title == null) {
    return <>missing...</>;
  }

  return (
    <ArticleLayout
      title={<ArticleTitle names={data.metadataContents.title} />}
      thumbnail={
        <TripieImage
          src={data?.metadataContents?.image?.sizes?.full?.url}
          alt={`${data?.metadataContents?.image?.sizes?.full?.url}의 썸네일`}
          blurDataURL={blurredThumbnail?.data}
          sizes="large"
        />
      }
      articleBody={<ArticleBody items={data?.body as BodyItemProps[]} regionId={regionId} dataUrl={data.id} />}
    />
  );
};

export default Articles;
