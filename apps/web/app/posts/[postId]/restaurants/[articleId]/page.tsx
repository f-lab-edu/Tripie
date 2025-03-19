'use server';

import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';

import { TripieImage } from '@tripie-pyotato/design-system';
import ArticleBody from 'app/posts/_components/ArticleBody';
import ArticleLayout from 'app/posts/_components/ArticleLayout';
import ArticleTitle from 'app/posts/_components/Elements/ArticleTitle';
import { AttractionArticle } from 'models/Attraction';
import { ParamProps } from 'models/Props';
import { Metadata, ResolvingMetadata } from 'next';
import { pageParamData } from '../../page-param-data';

export async function generateMetadata({ params }: ParamProps, parent: ResolvingMetadata): Promise<Metadata> {
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
