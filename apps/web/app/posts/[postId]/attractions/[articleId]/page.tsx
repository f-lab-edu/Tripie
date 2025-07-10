'use server';

import ArticleLayout from 'app/posts/_components/ArticleLayout';
import ArticleBody from 'app/posts/_components/AttractionLayout/ArticleBody';
import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { AttractionArticle } from 'models/Attraction';
import { ParamProps } from 'models/Props';
import { Metadata } from 'next';
import { pageParamData } from '../../page-param-data';

export async function generateMetadata({ params }: ParamProps): Promise<Metadata> {
  const { postId, articleId, images, title, description, path } = await pageParamData({ params });

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      title,
      description,
      images: [images ?? ''],
      url: `${API.BASE_URL}${ROUTE.POSTS.href}/${postId}/${path}/${articleId}`,
    },
  };
}

const Attractions = async ({ params }: ParamProps) => {
  const { data, title, images } = await pageParamData({ params });

  if (data == null) {
    return <>missing...</>;
  }

  return (
    <ArticleLayout
      title={title}
      thumbNailSrc={images}
      thumbNailAlt={images}
      articleBody={<ArticleBody source={(data as AttractionArticle).source} dataUrl={data.id} />}
    />
  );
};

export default Attractions;
