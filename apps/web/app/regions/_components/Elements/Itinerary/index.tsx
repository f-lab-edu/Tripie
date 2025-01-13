'use client';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { Activity } from 'models/Aws';
import { useMemo, useState } from 'react';
import AwsMap from '../Map/Map';
import { Poi } from '../Pois';
import Style from './itinerary.module.scss';
import MapWithCarousel from './MapWithCarousel';

export type Transportation = {
  type: 'transportation';
  value: { duration: string; transportation: string };
};

export type ItineraryItem = {
  memo: string;
  poi: Poi;
  schedule: string;
  transportation: Transportation[];
};

export type MapWithCarouselProps = {
  type: 'pois';
  value: {
    pois: Array<Poi>;
    memo: Array<ItineraryItem['memo']>;
    schedule: Array<ItineraryItem['schedule']>;
    transportation: Array<ItineraryItem['transportation']>;
  };
};

export type Itinerary = {
  day: number;
  hideAddButton: boolean;
  items: ItineraryItem[];
};

export type ItineraryProps = { type: 'itinerary'; value: { itinerary: Itinerary } };

const cx = classNames.bind(Style);

const ArticleItinerary = ({ item }: { item: ItineraryProps }) => {
  const { itinerary } = item.value;

  const [current, setCurrent] = useState('');

  const [coordinates] = useState(() =>
    itinerary.items.map(({ poi }, index: number) => ({
      index: `${index + 1}-0`,
      parent: `${index + 1}`,
      label: poi.type as Activity['label'],
      lng: poi.source.geolocation.coordinates[0],
      lat: poi.source.geolocation.coordinates[1],
      info: poi.source.comment,
    }))
  );

  const center = useMemo(() => {
    const pois = itinerary.items.map(({ poi }) => poi);
    const coordinates = pois.reduce(
      (acc, curr) => {
        acc.longitude += curr.source.geolocation.coordinates[0];
        acc.latitude += curr.source.geolocation.coordinates[1];

        return acc;
      },
      { longitude: 0, latitude: 0 }
    );

    return { longitude: coordinates.longitude / pois.length, latitude: coordinates.latitude / pois.length };
  }, [coordinates]);

  return (
    <Container applyMargin="top-bottom" className={cx(itinerary.items.length > 1 ? ['carousel'] : null)}>
      <Container className={cx(itinerary.items.length > 1 ? ['flex-items', 'embedded-card-wrap'] : null)} margin="none">
        <MapWithCarousel
          item={{
            type: 'pois',
            value: {
              pois: itinerary.items.map(({ poi }) => poi),
              memo: itinerary.items.map(({ memo }) => memo),
              schedule: itinerary.items.map(({ schedule }) => schedule),
              transportation: itinerary.items.map(({ transportation }) => transportation),
            },
          }}
          current={current}
          setCurrent={setCurrent}
        />
      </Container>
      <Container margin="none">
        <AwsMap locations={coordinates} center={center} current={current} setCurrent={setCurrent} />
      </Container>
    </Container>
  );
};

export default ArticleItinerary;
