'use server';

import ArticleLayout from 'app/posts/_components/ArticleLayout';
import ArticleBody from 'app/posts/_components/AttractionLayout/ArticleBody';
import { AttractionArticle } from 'models/Attraction';
import { pageParamData } from '../../page-param-data';

const Articles = async ({ params }: { params: Promise<{ postId: string; articleId: string }> }) => {
  const { data, images, title } = await pageParamData({ params });

  if (data == null) {
    return <>missing...</>;
  }

  return (
    <ArticleLayout
      title={title}
      thumbNailSrc={images}
      articleBody={<ArticleBody source={(data as AttractionArticle).source} dataUrl={data.id} />}
    />
  );
};

export default Articles;
