'use server';
import { TripieImage } from '@tripie-pyotato/design-system';

import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import { Metadata } from 'next';

import ArticleTitle from 'app/posts/_components/Elements/ArticleTitle';
import { AttractionArticle } from 'models/Attraction';
import { ParamProps } from 'models/Props';
import ArticleBody from '../../../_components/ArticleBody';
import ArticleLayout from '../../../_components/ArticleLayout';
import { pageParamData } from '../../page-param-data';

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
