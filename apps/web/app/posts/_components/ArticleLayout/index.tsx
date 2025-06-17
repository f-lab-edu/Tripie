'use client';
import { BlurImageOnLoad, Card } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@core';
import { classNames } from 'wrapper';

import { ReactNode } from 'react';
import ArticleTitle from './ArticleTitle';
import Style from './article-layout.module.scss';

const cx = classNames.bind(Style);

const ArticleLayout = ({
  title,
  thumbNailSrc,
  thumbNailAlt,
  articleBody,
}: {
  title: string;
  thumbNailSrc?: string;
  thumbNailAlt?: string | null;
  articleBody: ReactNode;
}) => {
  return (
    <Container applyMargin="left-right-bottom" margin="xl" justifyContent="center" className={cx('article-container')}>
      <Card.Description padding="l" className={cx('fit-content')}>
        <Container margin="m" applyMargin="top-left-right">
          <ArticleTitle names={title} />
        </Container>
        <Container margin="m" applyMargin="all" className={cx('img-container')}>
          <BlurImageOnLoad
            withBorder={true}
            aspectRatio={'cinematic'}
            src={thumbNailSrc?.replace('https://res.cloudinary.com', 'https://media.tripie-api.shop')}
            sizes="large"
            cloudinaryUrl="https://media.tripie-api.shop"
            alt={thumbNailAlt ?? `${thumbNailSrc}`}
          />
        </Container>
        <Container>{articleBody}</Container>
      </Card.Description>
    </Container>
  );
};

export default ArticleLayout;
