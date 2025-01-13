import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import getArticleDetails from 'app/api/firebase/getArticleDetails';

import Navigation from 'app/regions/_components/Navigation';
import Card from 'shared/components/Card/Card';
import Style from './article-body.module.scss';
import ArticleBody from './ArticleBody';

const cx = classNames.bind(Style);

const Articles = async ({ params }: { params: Promise<{ regionId: string; articleId: string }> }) => {
  const regionId = (await params).regionId;
  const articleId = (await params).articleId;
  let data = await getArticleDetails('article-details', regionId, articleId);

  return (
    <Container margin="none" className={cx('background')}>
      <Container margin="none">
        <Navigation />
        <h2>{data?.metadataContents?.title}</h2>
      </Container>

      <Card.Content className={cx('fit-content')}>
        <Container margin="l" applyMargin="all" className={cx('img-container')}>
          <Card.Content className={cx('img-wrap')}>
            <img src={data?.metadataContents?.image?.sizes?.full?.url} alt={'thumbnail'} />
          </Card.Content>
        </Container>
        <Container margin="l" applyMargin="left-right">
          <ArticleBody items={data.body} regionId={regionId} dataUrl={data.id} />
        </Container>
      </Card.Content>
    </Container>
  );
};

export default Articles;
