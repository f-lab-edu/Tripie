'use server';

import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';

import { TripieImage } from '@tripie-pyotato/design-system';
import getArticleDetail from 'app/api/articles/detail';
import ArticleBody from 'app/posts/_components/ArticleBody';
import ArticleLayout from 'app/posts/_components/ArticleLayout';
import ArticleTitle from 'app/posts/_components/Elements/ArticleTitle';
import { AttractionArticle } from 'models/Attraction';
import { Metadata, ResolvingMetadata } from 'next';
import { headers } from 'next/headers';
import { getPreferredTitle } from 'utils/string';

type Props = {
  params: Promise<{ postId: string; articleId: string }>;
};

const PAGE = {
  attractions: 'attraction',
  restaurants: 'retaurant',
  article: 'article',
} as const;

export async function pageParamData({ params }: Props) {
  const headersList = await headers();
  const headerPathname = headersList.get('x-pathname') || '';

  const key = 'restaurants';

  console.log('headerPathname', headerPathname);

  const postId = (await params).postId;
  const articleId = (await params).articleId;

  const { data, blurredThumbnail } = await getArticleDetail(PAGE[key], postId, articleId);

  const title = getPreferredTitle({ names: (data as AttractionArticle)?.source.names });
  const description = (data as AttractionArticle)?.source?.comment ?? '';
  const images = (data as AttractionArticle)?.source.image.sizes.full.url;
  return { key, title, description, postId, articleId, data, images, blurredThumbnail };
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || [];

  const { title, description, postId, articleId, key, images } = await pageParamData({ params });

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      title,
      description,
      images: [images ?? '', ...previousImages],
      url: `${API.BASE_URL}/posts/${postId}/${key}/${articleId}`,
    },
  };
}

const Articles = async ({ params }: { params: Promise<{ postId: string; articleId: string }> }) => {
  const { data, blurredThumbnail, images, title } = await pageParamData({ params });

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

export default Articles;
