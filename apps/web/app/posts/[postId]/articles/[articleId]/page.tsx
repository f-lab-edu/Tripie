'use server';

import ArticleSection from 'app/posts/_components/ArticleSection';
import { ParamProps } from 'models/Props';
import { pageParamData } from '../../page-param-data';

const Articles = async ({ params }: ParamProps) => {
  const { postId, id, metadataContents, images, body } = await pageParamData({ params });

  if (metadataContents?.title == null || id == null) {
    return <>missing...</>;
  }

  return (
    <ArticleSection
      postId={postId}
      id={id}
      title={metadataContents.title}
      imgAlt={images}
      imgSrc={images}
      body={body}
    />
  );
};

export default Articles;
