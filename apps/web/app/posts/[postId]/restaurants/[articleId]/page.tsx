'use server';

import AttractionLayout from 'app/posts/_components/AttractionLayout';
import { AttractionArticle } from 'models/Attraction';
import { pageParamData } from '../../page-param-data';

const Articles = async ({ params }: { params: Promise<{ postId: string; articleId: string }> }) => {
  const { data, blurredThumbnail, images, title } = await pageParamData({ params });

  if (data == null) {
    return <>missing...</>;
  }

  return (
    <AttractionLayout
      title={title}
      id={data.id}
      blurredThumbnail={blurredThumbnail?.data}
      imgAlt={images}
      imgSrc={images}
      body={(data as AttractionArticle).source}
    />
  );
};

export default Articles;
