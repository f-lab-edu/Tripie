'use server';
import { TripieImage } from '@tripie-pyotato/design-system';

import ArticleBody from 'app/regions/[regionId]/_components/ArticleBody';
import ArticleTitle from 'app/regions/[regionId]/_components/Elements/ArticleTitle';
import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { AttractionArticle } from 'models/Attraction';
import { Metadata, ResolvingMetadata } from 'next';
import ArticleLayout from '../../_components/ArticleLayout';
import { pageParamData } from '../../page-param-data';

type Props = {
  params: Promise<{ regionId: string; articleId: string }>;
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || [];

  const { title, description, regionId, articleId, key, images } = await pageParamData({ params });

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      title,
      description,
      images: [images ?? '', ...previousImages],
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}/${key}/${regionId}/${articleId}`,
    },
  };
}

const Articles = async ({ params }: { params: Promise<{ regionId: string; articleId: string }> }) => {
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
