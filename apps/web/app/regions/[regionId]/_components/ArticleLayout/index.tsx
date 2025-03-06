'use server';
import { Card, Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import { ReactNode } from 'react';
import Style from './article-layout.module.scss';

const cx = classNames.bind(Style);

const ArticleLayout = async ({
  title,
  thumbnail,
  articleBody,
}: {
  title: ReactNode;
  thumbnail: ReactNode;
  articleBody: ReactNode;
}) => {
  return (
    <Container applyMargin="top" margin="l" align="center">
      <Card.Content className={cx('fit-content')}>
        <Container margin="m" applyMargin="left-right">
          {title}
        </Container>
        <Container margin="m" applyMargin="all" className={cx('img-container')}>
          {thumbnail}
          {articleBody}
        </Container>
      </Card.Content>
    </Container>
  );
};

export default ArticleLayout;
