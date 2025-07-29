'use server';
import getArticleDetail, { CloudinaryPostResponse } from 'app/api/articles/detail';

import { sharedMetaData } from 'app/shared-metadata';
import { ArticleData } from 'models/Article';
import { AttractionArticle } from 'models/Attraction';
import { ParamProps } from 'models/Props';
import { CLOUDINARY_URL } from 'shared/image';
import { backendApi } from 'utils/ky';
import getPreferredTitle from 'utils/string/getPreferredTitle';

const PAGE = {
  attractions: 'attraction',
  restaurants: 'retaurant',
  articles: 'article',
} as const;

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export async function pageParamData({ params }: ParamProps) {
  const defaultBlurSize = CLOUDINARY_URL() + 'f_auto,e_blur:2000,q_1,c_limit,f_auto,h_2048,w_2048/';

  const key = (await params).category as keyof typeof PAGE;
  const postId = (await params).postId;
  const articleId = (await params).articleId;

  const { data } = await getArticleDetail(PAGE[key], postId, articleId);

  let recommendationImageUrl = defaultBlurSize;

  if (key === 'articles') {
    const description = (data as ArticleData)?.metadataContents?.description ?? sharedMetaData?.description;
    const metadataContents = (data as ArticleData)?.metadataContents;
    const body = (data as ArticleData)?.body;
    const id = (data as ArticleData)?.id;
    const images = (data as ArticleData).metadataContents.image.sizes?.full?.url;

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
      images: recommendationImageUrl.replace('e_blur:2000,q_1,', ',q_auto'),
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
