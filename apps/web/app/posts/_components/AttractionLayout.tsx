'use client';
import { TripieImage } from '@tripie-pyotato/design-system';
import ArticleBody from 'app/posts/_components/ArticleBody';
import ArticleLayout from 'app/posts/_components/ArticleLayout';
import ArticleTitle from 'app/posts/_components/Elements/ArticleTitle';
import { AttractionArticle } from 'models/Attraction';

const AttractionLayout = ({
  id,
  title,
  imgSrc,
  blurredThumbnail,
  imgAlt,
  body,
}: {
  id: string;
  title: string;
  imgSrc?: string;
  imgAlt?: string;
  blurredThumbnail?: string;
  body: AttractionArticle['source'];
}) => {
  return (
    <ArticleLayout
      title={<ArticleTitle names={title} />}
      thumbnail={<TripieImage blurDataURL={blurredThumbnail} src={imgSrc} sizes="large" alt={`${imgAlt}의 썸네일`} />}
      articleBody={<ArticleBody source={body} dataUrl={id} />}
    />
  );
};

export default AttractionLayout;
