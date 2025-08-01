'use client';
import { BlurImageOnLoad, Card } from '@tripie-pyotato/design-system/@components';
import Container from '@tripie-pyotato/design-system/@core/Container';
import { classNames } from '@tripie-pyotato/design-system/@wrappers';

import API from 'constants/api-routes';
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
    <Container
      display="inline-flex"
      padding="xl"
      applyPadding="top"
      applyMargin="left-right-bottom"
      margin="xl"
      justifyContent="center"
      className={cx('article-container')}
    >
      <Card.Description padding="l" className={cx('fit-content')}>
        <Container margin="m" applyMargin="top-left-right">
          <ArticleTitle names={title} />
        </Container>
        <Container margin="m" applyMargin="all" className={cx('img-container')}>
          <BlurImageOnLoad
            withBorder={true}
            aspectRatio={'cinematic'}
            src={thumbNailSrc?.replace('https://res.cloudinary.com', API.MEDIA_URL).replace('.jpeg', '')}
            sizes="large"
            cloudinaryUrl={API.MEDIA_URL}
            alt={thumbNailAlt ?? `${thumbNailSrc}`}
          />
        </Container>
        <Container margin="l" applyMargin="top">
          {articleBody}
        </Container>
      </Card.Description>
    </Container>
  );
};

export default ArticleLayout;
