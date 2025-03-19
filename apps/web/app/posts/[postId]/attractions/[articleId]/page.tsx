'use server';
import { TripieImage } from '@tripie-pyotato/design-system';

import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import { Metadata } from 'next';

import getArticleDetail from 'app/api/articles/detail';
import ArticleTitle from 'app/posts/_components/Elements/ArticleTitle';
import { AttractionArticle } from 'models/Attraction';
import { ParamProps } from 'models/Props';
import { headers } from 'next/headers';
import { getPreferredTitle } from 'utils/string';
import ArticleBody from '../../../_components/ArticleBody';
import ArticleLayout from '../../../_components/ArticleLayout';

const PAGE = {
  attractions: 'attraction',
  restaurants: 'retaurant',
  article: 'article',
} as const;

export async function pageParamData({ params }: ParamProps) {
  const headersList = await headers();
  const headerPathname = headersList.get('x-pathname') || '';

  const key = 'attractions';

  console.log('headerPathname', headerPathname);

  const postId = (await params).postId;
  const articleId = (await params).articleId;

  const { data, blurredThumbnail } = await getArticleDetail(PAGE[key], postId, articleId);

  const title = getPreferredTitle({ names: (data as AttractionArticle)?.source.names });
  const description = (data as AttractionArticle)?.source?.comment ?? '';
  const images = (data as AttractionArticle)?.source.image.sizes.full.url;
  return { key, title, description, postId, articleId, data, images, blurredThumbnail };
}

export async function generateMetadata({ params }: ParamProps): Promise<Metadata> {
  const { postId, articleId, images, title, description, key } = await pageParamData({ params });

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      title,
      description,
      images: [images ?? ''],
      url: `${API.BASE_URL}/posts/${postId}/${key}/${articleId}`,
    },
  };
}

const Attractions = async ({ params }: ParamProps) => {
  const { data, blurredThumbnail, title, images } = await pageParamData({ params });

  if (data == null) {
    return <>missing...</>;
  }

  return (
    <ArticleLayout
      title={<ArticleTitle names={title as string} />}
      thumbnail={
        <TripieImage blurDataURL={blurredThumbnail?.data} src={images} sizes="large" alt={`${images}의 썸네일`} />
      }
      articleBody={<ArticleBody source={(data as AttractionArticle).source} dataUrl={data.id} />}
    />
  );
};

export default Attractions;
