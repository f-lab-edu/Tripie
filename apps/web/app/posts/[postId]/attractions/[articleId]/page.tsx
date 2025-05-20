'use server';

import AttractionLayout from 'app/posts/_components/AttractionLayout';
import { AttractionArticle } from 'models/Attraction';
import { ParamProps } from 'models/Props';
import { pageParamData } from '../../page-param-data';

const Attractions = async ({ params }: ParamProps) => {
  const { data, title, images } = await pageParamData({ params });

  if (data == null) {
    return <>missing...</>;
  }

  return (
    <AttractionLayout
      title={title}
      id={data.id}
      // blurredThumbnail={blurredThumbnail?.data}
      imgAlt={images}
      imgSrc={images}
      body={(data as AttractionArticle).source}
    />
  );
};

export default Attractions;
