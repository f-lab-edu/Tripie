'use server';
import getArticleDetail from 'app/api/articles/detail';

import { TripieImage } from '@tripie-pyotato/design-system';

import ArticleLayout from 'app/posts/_components/ArticleLayout';
import ArticleTitle from 'app/posts/_components/Elements/ArticleTitle';
import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { BodyItemProps, ParamProps } from 'models/Props';
import { Metadata } from 'next';
import ArticleBody from './ArticleBody';

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export async function pageParamData({ params }: ParamProps) {
  const postId = (await params).postId;
  const articleId = (await params).articleId;

  const { data, blurredThumbnail } = await getArticleDetail('article', postId, articleId);

  const description = data?.metadataContents?.description ?? sharedMetaData?.description;
  const title = data?.metadataContents.title ?? '';

  return { postId, articleId, data, blurredThumbnail, description, title };
}

export async function generateMetadata({ params }: ParamProps): Promise<Metadata> {
  const { postId, articleId, data, description, title } = await pageParamData({ params });

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      images: [data?.metadataContents.image.sizes?.full?.url ?? ''],
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}/${postId}/articles/${articleId}`,
      title,
      description,
    },
  };
}

const Articles = async ({ params }: ParamProps) => {
  const { postId, data, blurredThumbnail } = await pageParamData({ params });

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
      articleBody={<ArticleBody items={data?.body as BodyItemProps[]} regionId={postId} dataUrl={data.id} />}
    />
  );
};

export default Articles;
