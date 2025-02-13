'use server';
import { Card, TripieContainer, TripieImage } from '@tripie-pyotato/design-system';

import getArticleDetail from 'app/api/articles/detail';
import Nav from 'app/home/_components/nav/Nav';
import AttractionTitle from 'app/regions/_components/shared/_sections/AttractionTitle';
import classNames from 'classnames/bind';
import RegionBody from '../../../_components/RegionBody';
import Style from './attractions.module.scss';

const cx = classNames.bind(Style);

const Attractions = async ({ params }: { params: Promise<{ regionId: string; articleId: string }> }) => {
  const { blurredThumbnail, data } = await getArticleDetail(
    'attraction',
    (await params).regionId,
    (await params).articleId
  );

  if (data == null) {
    return <>missing...</>;
  }

  return (
    <>
      <Nav />
      <Card.Content className={cx('fit-content')}>
        <TripieContainer margin="m" applyMargin="top-left-right">
          <AttractionTitle names={data.source.names} />
        </TripieContainer>
        <TripieContainer margin="m" applyMargin="all" className={cx('img-container')}>
          <TripieImage
            blurDataURL={blurredThumbnail?.data}
            src={data.source.image.sizes.full.url}
            alt={`${data.source.image.sizes.full.url}의 썸네일`}
            sizes="large"
          />
        </TripieContainer>
        <TripieContainer margin="none">
          <RegionBody source={data.source} dataUrl={data.id} />
        </TripieContainer>
      </Card.Content>
    </>
  );
};

export default Attractions;
