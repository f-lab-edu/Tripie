'use client';
import { Container, Text } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import POI_TYPE from 'constants/triple';
import { Activity, Poi } from 'models/Aws';
import { RefObject, createRef, useEffect, useMemo, useRef, useState } from 'react';
import Card from 'shared/components/Card/Card';
import ArticleHeading from '../Header';
import Style from './pois.module.scss';

import { LocationMarker } from 'app/trip-planner/_components/Chat';
import RESOURCE from 'constants/resources';
import AwsMap from '../Map/Map';
import ArticleText from '../Text';

export type PoisProps = { type: 'pois'; value: { pois: Array<Poi> } };

const cx = classNames.bind(Style);

export const PoiCard = ({
  poi,
  selected,
  onClick,
  cardRef,
  className,
}: {
  poi: Poi;
  selected: boolean;
  onClick: () => void;
  cardRef: RefObject<HTMLDivElement>;
  className?: string;
}) => {
  useEffect(() => {
    // 선택한 카드로 이동
    if (selected && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selected, cardRef]);

  return (
    <Card.ClickableContent
      ref={cardRef}
      className={cx('embedded-card', 'poi-card', className)}
      selected={selected}
      onClick={onClick}
    >
      <Card.Content className={cx('img-wrap')}>
        {poi.source.image == null ? (
          <img src={RESOURCE.PLACEHOLDER} alt={'place-holder'} />
        ) : (
          <img src={poi.source.image?.sizes.full.url} alt={poi.source.image?.sizes.full.url} />
        )}

        <Container className={cx('img-source')} margin="none">
          {poi.source.image?.sourceUrl != null ? (
            <Text className={cx('source-url', 'poi-img-source-ref')}>{`출처 ${poi.source.image.sourceUrl}`}</Text>
          ) : null}
        </Container>
      </Card.Content>
      <ArticleHeading item={{ type: 'heading3', value: { text: poi.source.names.ko } }} />
      <ArticleText item={{ type: 'text', value: { text: poi.source.comment } }} />
      <ArticleText item={{ type: 'text', value: { text: POI_TYPE[poi.type] } }} />
      <ArticleText
        item={{
          type: 'text',
          value: {
            text: `${poi.region.source.names.ko}${poi.source.areas[0]?.name != null ? poi.source.areas[0]?.name : ''}`,
          },
        }}
      />
    </Card.ClickableContent>
  );
};

const ArticlePois = ({ item }: { item: PoisProps }) => {
  const { pois } = item.value;
  const cardRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(pois.map(() => createRef()));

  const [coordinates] = useState(() => {
    return pois.reduce((acc, curr, index: number) => {
      if (curr.source.geolocation?.coordinates != null) {
        acc.push({
          index: `${index + 1}-0`,
          parent: `${index + 1}`,
          label: curr.type as Activity['label'],
          lng: curr.source.geolocation?.coordinates[0],
          lat: curr.source.geolocation?.coordinates[1],
          info: curr.source.comment,
        });
      }

      return acc;
    }, [] as LocationMarker[]);
  });

  const [current, setCurrent] = useState('');
  const center = useMemo(() => {
    const coordinates = pois.reduce(
      (acc, curr) => {
        if (curr.source.geolocation) {
          acc.longitude += curr.source.geolocation?.coordinates[0];
        }
        if (curr.source.geolocation) {
          acc.latitude += curr.source.geolocation?.coordinates[1];
        }

        return acc;
      },
      { longitude: 0, latitude: 0 }
    );

    return { longitude: coordinates.longitude / pois.length, latitude: coordinates.latitude / pois.length };
  }, [coordinates]);

  return (
    <Container applyMargin="top-bottom" className={cx(pois.length > 1 ? ['carousel'] : null)}>
      <Container className={cx(pois.length > 1 ? ['flex-items', 'embedded-card-wrap'] : null)} margin="none">
        {pois.map((poi, index) => (
          <PoiCard
            onClick={() => setCurrent(`${index + 1}-0`)}
            poi={poi}
            cardRef={cardRefs.current[index]}
            key={index + poi.id + poi.source.areas?.[0]?.id}
            selected={current === `${index + 1}-0`}
          />
        ))}
      </Container>
      <Container applyMargin="top-bottom">
        <AwsMap locations={coordinates} center={center} current={current} setCurrent={setCurrent} />
      </Container>
    </Container>
  );
};

export default ArticlePois;
