'use server';

import { TripieImage } from '@tripie-pyotato/design-system';

import ArticleLayout from 'app/posts/_components/ArticleLayout';
import ArticleTitle from 'app/posts/_components/Elements/ArticleTitle';
import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { BodyItemProps, ParamProps } from 'models/Props';
import { Metadata } from 'next';
import { pageParamData } from '../../page-param-data';
import ArticleBody from './ArticleBody';

export async function generateMetadata({ params }: ParamProps): Promise<Metadata> {
  const { postId, articleId, metadataContents, description, title } = await pageParamData({ params });

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      images: [metadataContents?.image.sizes?.full?.url ?? ''],
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}/${postId}/articles/${articleId}`,
      title,
      description,
    },
  };
}

const Articles = async ({ params }: ParamProps) => {
  const { postId, id, blurredThumbnail, metadataContents, body } = await pageParamData({ params });

  if (metadataContents?.title == null || id == null) {
    return <>missing...</>;
  }

  return (
    <ArticleLayout
      title={<ArticleTitle names={metadataContents.title} />}
      thumbnail={
        <TripieImage
          src={metadataContents?.image?.sizes?.full?.url}
          alt={`${metadataContents?.image?.sizes?.full?.url}의 썸네일`}
          blurDataURL={blurredThumbnail?.data}
          sizes="large"
        />
      }
      articleBody={<ArticleBody items={body as BodyItemProps[]} regionId={postId} dataUrl={id} />}
    />
  );
};

export default Articles;
