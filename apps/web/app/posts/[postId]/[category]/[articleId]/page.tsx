import { Container, Stack } from '@tripie-pyotato/design-system/@core';
import ArticleTitle from 'app/posts/_components/ArticleLayout/ArticleTitle';
import DefaultArticleBody from 'app/posts/_components/ArticleLayout/DefaultArticleBody';
import ArticleBody from 'app/posts/_components/AttractionLayout/ArticleBody';
import PostThumbnail from 'app/posts/_components/PostThumbnail';
import { AttractionArticle } from 'models/Attraction';
import { BodyItemProps, ParamProps } from 'models/Props';
import getParamData from './cachedParamData';

import '@tripie-pyotato/design-system/global';

const Articles = async ({ params }: ParamProps) => {
  const { postId, category } = await params;
  const { id, metadataContents, images, body, title, data } = await getParamData({ params });

  if (
    ((body == null || metadataContents == null) && category == 'articles') ||
    (data == null && category != 'articles')
  ) {
    return <>missing...</>;
  }

  return (
    <Stack display="inline-flex" direction="column" gap="none">
      <ArticleTitle names={category == 'articles' ? metadataContents?.title : title} />
      <PostThumbnail images={images} />
      <Container margin="l" applyMargin="top">
        {category == 'articles' ? (
          <DefaultArticleBody items={body as BodyItemProps[]} regionId={postId} dataUrl={id as string} />
        ) : (
          <ArticleBody source={(data as AttractionArticle).source} dataUrl={data?.id as string} />
        )}
      </Container>
    </Stack>
  );
};

export default Articles;
