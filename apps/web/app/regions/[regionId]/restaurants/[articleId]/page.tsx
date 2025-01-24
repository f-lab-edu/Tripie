'use server';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import firestoreService from 'app/api/firebase';
import NotFoundPage from 'app/not-found';
import Navigation from 'app/regions/_components/Navigation';
import Card from 'shared/components/Card/Card';
import RegionBody from '../../../_components/RegionBody';
import AttractionTitle from '../../../_components/shared/_sections/AttractionTitle';
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

  return (
    <Container margin="none" className={cx('background')}>
      <Container margin="none">
        <Navigation />
        <AttractionTitle primary={data.source.names.primary} />
      </Container>
      <Card.Content className={cx('fit-content')}>
        <RegionBody source={data.source} dataUrl={data.id} />
      </Card.Content>
    </Container>
  );
};

export default Articles;
