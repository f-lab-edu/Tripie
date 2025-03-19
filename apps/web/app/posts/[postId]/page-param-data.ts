'use server';
import getArticleDetail from 'app/api/articles/detail';
import { sharedMetaData } from 'app/shared-metadata';
import { ArticleData } from 'models/Article';
import { AttractionArticle } from 'models/Attraction';
import { ParamProps } from 'models/Props';
import { headers } from 'next/headers';
import { getPreferredTitle } from 'utils/string';

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

  const { data, blurredThumbnail } = await getArticleDetail(PAGE[key], postId, articleId);

  if (key === 'articles') {
    const description = (data as ArticleData)?.metadataContents?.description ?? sharedMetaData?.description;
    const metadataContents = (data as ArticleData)?.metadataContents;
    const body = (data as ArticleData)?.body;
    const id = (data as ArticleData)?.id;

    return {
      title: metadataContents.title,
      id,
      postId,
      articleId,
      metadataContents,
      blurredThumbnail,
      description,
      body,
    };
  }

  const title = getPreferredTitle({ names: (data as AttractionArticle)?.source.names });
  const description = (data as AttractionArticle)?.source?.comment ?? '';

  const images = (data as AttractionArticle)?.source.image.sizes.full.url;
  return { key, title, description, postId, articleId, data, images, blurredThumbnail };
}
