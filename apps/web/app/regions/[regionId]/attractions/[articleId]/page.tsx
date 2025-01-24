'use server';
import { Container } from '@tripie-pyotato/design-system';

import Navigation from 'app/regions/_components/Navigation';

import firestoreService from 'app/api/firebase';
import classNames from 'classnames/bind';
import { AttractionArticle } from 'models/Attraction';
import Card from 'shared/components/Card/Card';
import RegionBody from '../../../_components/RegionBody';
import AttractionTitle from '../../../_components/shared/_sections/AttractionTitle';
import Style from './attractions.module.scss';

const cx = classNames.bind(Style);

const Attractions = async ({ params }: { params: Promise<{ regionId: string; articleId: string }> }) => {
  const { data } = (await firestoreService.getAttractionDetails(
    'attraction-details',
    (await params).regionId,
    (await params).articleId
  )) as { data: AttractionArticle; attractionId: string; id: string; regionId: string };

  return (
    <Container margin="none" className={cx('background')}>
      <Container margin="none">
        <Navigation />
        <AttractionTitle primary={data.source.names.primary ?? data.source.names.ko} />
      </Container>
      <Card.Content className={cx('fit-content')}>
        <RegionBody source={data.source} dataUrl={data.id} />
      </Card.Content>
    </Container>
  );
};

export default Attractions;
