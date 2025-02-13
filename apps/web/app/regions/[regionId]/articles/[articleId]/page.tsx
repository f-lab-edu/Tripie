'use server';
import { Card, TripieContainer, TripieImage } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import getArticleDetail from 'app/api/articles/detail';
import Nav from 'app/home/_components/nav/Nav';
import Title from 'app/regions/_components/Title';
import Style from './article-body.module.scss';
import ArticleBody, { BodyItemProps } from './ArticleBody';

const cx = classNames.bind(Style);

const Articles = async ({ params }: { params: Promise<{ regionId: string; articleId: string }> }) => {
  const regionId = (await params).regionId;
  const articleId = (await params).articleId;

  const { data, blurredThumbnail } = await getArticleDetail('article', regionId, articleId);

  if (data == null) {
    return <>missing...</>;
  }

  return (
    <>
      <Nav />
      <Card.Content className={cx('fit-content')}>
        <TripieContainer margin="m" applyMargin="top-left-right">
          <Title withNavigation={false}>{data?.metadataContents?.title}</Title>
        </TripieContainer>
        <TripieContainer margin="m" applyMargin="all" className={cx('img-container')}>
          <TripieImage
            src={data?.metadataContents?.image?.sizes?.full?.url}
            alt={`${data?.metadataContents?.image?.sizes?.full?.url}의 썸네일`}
            blurDataURL={blurredThumbnail?.data}
            sizes="large"
          />
        </TripieContainer>
        <TripieContainer margin="m" applyMargin="left-right">
          <ArticleBody items={data?.body as BodyItemProps[]} regionId={regionId} dataUrl={data.id} />
        </TripieContainer>
      </Card.Content>
    </>
  );
};

export default Articles;
