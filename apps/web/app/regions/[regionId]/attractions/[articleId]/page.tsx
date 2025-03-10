'use server';
import { TripieImage } from '@tripie-pyotato/design-system';

import ArticleTitle from 'app/regions/[regionId]/_components/Elements/ArticleTitle';
import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { Metadata } from 'next';

import { AttractionArticle } from 'models/Attraction';
import ArticleBody from '../../_components/ArticleBody';
import ArticleLayout from '../../_components/ArticleLayout';
import { pageParamData } from '../../page-param-data';

type Props = {
  params: Promise<{ regionId: string; articleId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { regionId, articleId, images, title, description, key } = await pageParamData({ params });

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      title,
      description,
      images: [images ?? ''],
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}/${regionId}/${key}/${articleId}`,
    },
  };
}

const Attractions = async ({ params }: Props) => {
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
