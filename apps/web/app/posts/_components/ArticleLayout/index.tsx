'use client';
import { Card } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@core';
import { classNames } from 'wrapper';

import { ReactNode } from 'react';
import Style from './article-layout.module.scss';

const cx = classNames.bind(Style);

const ArticleLayout = ({
  title,
  thumbnail,
  articleBody,
}: {
  title: ReactNode;
  thumbnail: ReactNode;
  articleBody: ReactNode;
}) => {
  return (
    <Container applyMargin="left-right-bottom" margin="xl" justifyContent="center" className={cx('article-container')}>
      <Card.Content className={cx('fit-content')}>
        <Container margin="m" applyMargin="top-left-right">
          {title}
        </Container>
        <Container margin="m" applyMargin="all" className={cx('img-container')}>
          {thumbnail}
        </Container>
        <Container>{articleBody}</Container>
      </Card.Content>
    </Container>
  );
};

export default ArticleLayout;
