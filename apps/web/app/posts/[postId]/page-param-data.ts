'use server';
import { CLOUDINARY_URL } from '@tripie-pyotato/design-system/shared';
import getArticleDetail, { CloudinaryPostResponse, defaultBlurSize } from 'app/api/articles/detail';
import { sharedMetaData } from 'app/shared-metadata';
import { ArticleData } from 'models/Article';
import { AttractionArticle } from 'models/Attraction';
import { ParamProps } from 'models/Props';
import { headers } from 'next/headers';
import { backendApi } from 'utils/ky';
import getPreferredTitle from 'utils/string/getPreferredTitle';

const PAGE = {
  attractions: 'attraction',
  restaurants: 'retaurant',
  articles: 'article',
} as const;

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export async function pageParamData({ params }: ParamProps) {
  const headersList = await headers();
  const headerPathname = headersList.get('x-pathname') || '';

  const key = headerPathname.split('/')?.[3] as keyof typeof PAGE;

  const postId = (await params).postId;
  const articleId = (await params).articleId;

  const { data } = await getArticleDetail(PAGE[key], postId, articleId);

  let recommendationImageUrl = defaultBlurSize;

  if (key === 'articles') {
    const description = (data as ArticleData)?.metadataContents?.description ?? sharedMetaData?.description;
    const metadataContents = (data as ArticleData)?.metadataContents;
    const body = (data as ArticleData)?.body;
    const id = (data as ArticleData)?.id;
    const images = (data as ArticleData).metadataContents?.image?.sizes?.full?.url;

    if (images != null && !images?.startsWith(CLOUDINARY_URL())) {
      const postRes: CloudinaryPostResponse = await backendApi
        .post('cloudinary', { json: { imageUrl: images } })
        .json();
      recommendationImageUrl += postRes.message;
    }

    return {
      title: metadataContents.title,
      id,
      path: key,
      postId,
      articleId,
      metadataContents,
      description,
      body,
      // images: recommendationImageUrl,
      images: recommendationImageUrl.replace('https://res.cloudinary.com', 'https://media.tripie-api.shop'),
    };
  }

  const title = getPreferredTitle({ names: (data as AttractionArticle)?.source.names });
  const description = (data as AttractionArticle)?.source?.comment ?? '';

  const images = (data as AttractionArticle)?.source.image.sizes.full.url;

  if (images != null && !images?.startsWith(CLOUDINARY_URL())) {
    const postRes: CloudinaryPostResponse = await backendApi.post('cloudinary', { json: { imageUrl: images } }).json();
    recommendationImageUrl += postRes.message;
  }

  return { title, description, postId, path: key, articleId, data, images: recommendationImageUrl };
}
