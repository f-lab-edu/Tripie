import getArticleDetail from 'app/api/articles/detail';
import { AttractionArticle } from 'models/Attraction';
import { headers } from 'next/headers';
import { getPreferredTitle } from 'utils/string';

type Props = {
  params: Promise<{ regionId: string; articleId: string }>;
};

const PAGE = {
  attractions: 'attraction',
  restaurants: 'retaurant',
  article: 'article',
} as const;

export async function pageParamData({ params }: Props) {
  const headersList = await headers();
  const headerPathname = headersList.get('x-pathname') || '';

  const key = RegExp(/attractions|articles|restaurants/).exec(headerPathname)?.[0] as keyof typeof PAGE;

  const regionId = (await params).regionId;
  const articleId = (await params).articleId;

  const { data, blurredThumbnail } = await getArticleDetail(PAGE[key], regionId, articleId);

  if (key !== 'article') {
    const title = getPreferredTitle({ names: (data as AttractionArticle)?.source.names });
    const description = (data as AttractionArticle)?.source?.comment ?? '';
    const images = (data as AttractionArticle)?.source.image.sizes.full.url;
    return { key, title, description, regionId, articleId, data, images, blurredThumbnail };
  }

  return { key, regionId, articleId, data, blurredThumbnail };
}
