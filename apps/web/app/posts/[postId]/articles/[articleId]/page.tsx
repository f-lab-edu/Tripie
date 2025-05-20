'use server';

import ArticleSection from 'app/posts/_components/ArticleSection';
import { ParamProps } from 'models/Props';
import { pageParamData } from '../../page-param-data';

const Articles = async ({ params }: ParamProps) => {
  const { postId, id, metadataContents, body } = await pageParamData({ params });

  if (metadataContents?.title == null || id == null) {
    return <>missing...</>;
  }

  return (
    <ArticleSection
      postId={postId}
      id={id}
      title={metadataContents.title}
      imgAlt={metadataContents?.image?.sizes?.full?.url}
      imgSrc={metadataContents?.image?.sizes?.full?.url}
      body={body}
    />
  );
};

export default Articles;
