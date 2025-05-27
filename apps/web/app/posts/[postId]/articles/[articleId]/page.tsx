'use server';

import { ParamProps } from 'models/Props';
import { pageParamData } from '../../page-param-data';

import ArticleLayout from 'app/posts/_components/ArticleLayout';
import DefaultArticleBody from 'app/posts/_components/ArticleLayout/DefaultArticleBody';

const Articles = async ({ params }: ParamProps) => {
  const { postId, id, metadataContents, images, body } = await pageParamData({ params });

  if (metadataContents?.title == null || id == null) {
    return <>missing...</>;
  }

  return (
    <ArticleLayout
      title={metadataContents.title}
      thumbNailSrc={images}
      articleBody={<DefaultArticleBody items={body} regionId={postId} dataUrl={id} />}
    />
  );
};

export default Articles;
