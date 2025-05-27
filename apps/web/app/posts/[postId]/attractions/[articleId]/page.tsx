'use server';

import ArticleLayout from 'app/posts/_components/ArticleLayout';
import ArticleBody from 'app/posts/_components/AttractionLayout/ArticleBody';
import { AttractionArticle } from 'models/Attraction';
import { ParamProps } from 'models/Props';
import { pageParamData } from '../../page-param-data';

const Attractions = async ({ params }: ParamProps) => {
  const { data, title, images } = await pageParamData({ params });

  if (data == null) {
    return <>missing...</>;
  }

  return (
    <ArticleLayout
      title={title}
      thumbNailSrc={images}
      thumbNailAlt={images}
      articleBody={<ArticleBody source={(data as AttractionArticle).source} dataUrl={data.id} />}
    />
  );
};

export default Attractions;
