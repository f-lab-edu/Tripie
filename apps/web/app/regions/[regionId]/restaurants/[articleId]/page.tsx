import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import getRestaurantDetails from 'app/api/firebase/getRestaurantDetails';
import NotFoundPage from 'app/not-found';
import Navigation from 'app/regions/_components/Navigation';
import Card from 'shared/components/Card/Card';
import AttractionTitle from '../../_shared/_sections/AttractionTitle';
import Style from './restaurant-body.module.scss';
import AttractionBody from './RestaurantBody';

const cx = classNames.bind(Style);

const Articles = async ({ params }: { params: Promise<{ regionId: string; articleId: string }> }) => {
  let { data } = await getRestaurantDetails('retaurant-details', (await params).regionId, (await params).articleId);
  const today = new Date().getDay();

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
        <AttractionBody source={data.source} today={today} dataUrl={data.id} />
      </Card.Content>
    </Container>
  );
};

export default Articles;
