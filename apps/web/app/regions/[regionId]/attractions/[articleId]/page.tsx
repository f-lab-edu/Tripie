'use server';
import { Card, Container, TripieImage } from '@tripie-pyotato/design-system';

import firestoreService from 'app/api/firebase';
import Nav from 'app/home/_components/nav/Nav';
import AttractionTitle from 'app/regions/_components/shared/_sections/AttractionTitle';
import classNames from 'classnames/bind';
import API from 'constants/api-routes';
import { AttractionArticle } from 'models/Attraction';
import RegionBody from '../../../_components/RegionBody';
import Style from './attractions.module.scss';

const cx = classNames.bind(Style);

const Attractions = async ({ params }: { params: Promise<{ regionId: string; articleId: string }> }) => {
  const { data } = (await firestoreService.getAttractionDetails(
    'attraction-details',
    (await params).regionId,
    (await params).articleId
  )) as { data: AttractionArticle; attractionId: string; id: string; regionId: string };

  const blurredThumbnail = await fetch(
    'http://localhost:3000' + API.BASE + API.BLUR_IMAGE + `?url=${data.source.image.sizes.full.url}`
  ).then(v => v.json());

  console.log({
    ...data.source,
    recommendations: await Promise.all(
      data.source.recommendations.map(async recommendation => ({
        ...recommendation,
        image: {
          ...recommendation.image,
          blurData: await fetch(
            'http://localhost:3000' + API.BASE + API.BLUR_IMAGE + `?url=${recommendation.image.sizes.small_square.url}`
          ).then(v => v.json()),
        },
      }))
    ),
  });

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
            alt={`${data.source.image.sizes.full.url}의 썸네일`}
            sizes="large"
          />
        </Container>
        <Container margin="m" applyMargin="left-right">
          <RegionBody source={data.source} dataUrl={data.id} />
        </Container>
      </Card.Content>
    </>
  );
};

export default Attractions;
