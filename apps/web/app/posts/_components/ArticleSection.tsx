// import { TripieImage } from '@tripie-pyotato/design-system/@core';

'use client';
import { BlurImageOnLoad } from '@tripie-pyotato/design-system/@components';
import ArticleLayout from 'app/posts/_components/ArticleLayout';
import ArticleTitle from 'app/posts/_components/Elements/ArticleTitle';
import { BodyItemProps } from 'models/Props';
import ArticleBody from './DefaultArticleBody';

const ArticleSection = ({
  postId,
  id,
  title,
  imgSrc,
  imgAlt,
  body,
}: {
  postId: string;
  id: string;
  title: string;
  imgSrc?: string;
  imgAlt?: string;
  body: Array<BodyItemProps>;
}) => {
  return (
    <ArticleLayout
      title={<ArticleTitle names={title} />}
      thumbnail={
        <BlurImageOnLoad
          aspectRatio={'cinematic'}
          src={imgSrc}
          alt={`${imgAlt}의 썸네일`}
          withBorder={true}
          sizes="large"
        />
      }
      articleBody={<ArticleBody items={body} regionId={postId} dataUrl={id} />}
    />
  );
};

export default ArticleSection;
