'use server';

import { ParamProps } from 'models/Props';

import ArticleLayout from 'app/posts/_components/ArticleLayout';
import DefaultArticleBody from 'app/posts/_components/ArticleLayout/DefaultArticleBody';

import { getParamData } from './layout';

const Articles = async ({ params }: ParamProps) => {
  const { postId } = await params;
  const { id, metadataContents, images, body } = await getParamData({ params });

  if (metadataContents?.title == null || id == null || body == null) {
    return <>missing...</>;
  }

  return (
    <ArticleLayout
      title={metadataContents.title}
      thumbNailSrc={images?.replace('https://res.cloudinary.com', 'https://media.tripie-api.shop')}
      articleBody={<DefaultArticleBody items={body} regionId={postId} dataUrl={id} />}
    />
  );
};

export default Articles;
