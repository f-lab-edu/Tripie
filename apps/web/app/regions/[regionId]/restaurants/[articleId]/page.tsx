'use server';
import { Card, Container, TripieImage } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import firestoreService from 'app/api/firebase';
import Nav from 'app/home/_components/nav/Nav';
import NotFoundPage from 'app/not-found';
import RegionBody from 'app/regions/_components/RegionBody';
import AttractionTitle from 'app/regions/_components/shared/_sections/AttractionTitle';
import API from 'constants/api-routes';
import Style from './restaurants.module.scss';

const cx = classNames.bind(Style);

const Articles = async ({ params }: { params: Promise<{ regionId: string; articleId: string }> }) => {
  let { data } = await firestoreService.getRestaurantDetails(
    'retaurant-details',
    (await params).regionId,
    (await params).articleId
  );

  if (data === null) {
    return <NotFoundPage />;
  }

  const blurredThumbnail = await fetch(
    'http://localhost:3000' + API.BASE + API.BLUR_IMAGE + `?url=${data.source.image.sizes.full.url}`
  ).then(v => v.json());

  return (
    <>
      <Nav />
      <Card.Content className={cx('fit-content')}>
        <Container margin="m" applyMargin="top-left-right">
          <AttractionTitle names={data.source.names} />
        </Container>
        <Container margin="m" applyMargin="all" className={cx('img-container')}>
          <TripieImage
            blurDataURL={blurredThumbnail?.data}
            src={data.source.image.sizes.full.url}
            sizes="large"
            alt={`${data.source.image.sizes.full.url}의 썸네일`}
          />
        </Container>
        <RegionBody source={data.source} dataUrl={data.id} />
      </Card.Content>
    </>
  );
};

export default Articles;
