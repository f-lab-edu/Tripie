'use client';
import { Card, Container, TripieImage } from '@tripie-pyotato/design-system';
import POI_TYPE from 'constants/triple';
import { Poi } from 'models/Aws';
import { RefObject, useEffect } from 'react';
import classNames from 'wrapper';
import ArticleHeading from '../Header';
import Style from './poi-card.module.scss';

import useImgAlt from 'hooks/useImgAlt';
import { useMap } from 'react-map-gl/maplibre';
import ArticleText from '../Text';
export type PoisProps = { type: 'pois'; value: { pois: Array<Poi> } };

const cx = classNames.bind(Style);

const PoiCard = ({
  poi,
  selected,
  action,
  cardRef,
  className,
}: {
  poi: Poi;
  selected: boolean;
  action: () => void;
  cardRef: RefObject<HTMLDivElement>;
  className?: string;
}) => {
  const { alt } = useImgAlt({ imgUrl: poi.source.image?.sizes.full.url });
  const { tripieMap } = useMap();

  useEffect(() => {
    // 선택한 카드로 이동
    if (selected && cardRef.current != null) {
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selected, cardRef]);

  useEffect(() => {
    // https://visgl.github.io/react-map-gl/docs/api-reference/maplibre/use-map
    // 부여했던 Map id가 있다면 MapProvider로 감싸줬을 때 해당 map을 가져와 조작할 수 있다.
    if (tripieMap != null && selected != null && poi.source.geolocation?.coordinates != null) {
      tripieMap.flyTo({ center: poi.source.geolocation.coordinates as [number, number] });
    }
  }, [selected, tripieMap, poi]);

  return (
    <Card.ClickableContent ref={cardRef} className={cx('poi-card', className)} selected={selected} onClick={action}>
      <TripieImage.WithSourceUrl
        sourceUrl={poi.source.image.sourceUrl}
        src={poi.source.image?.sizes.full.url}
        alt={alt}
        blurDataURL={poi.source.image.blurData?.data}
        withBorder={true}
        sizes="card"
      />

      <Container applyMargin="top-bottom" margin="sm" className={cx('heading')}>
        <ArticleHeading item={{ type: 'heading4', value: { text: poi.source.names.ko } }} />
        <ArticleText
          item={{
            type: 'text',
            value: {
              text: `${poi.region.source.names.ko}${poi.source.areas[0]?.name != null ? poi.source.areas[0]?.name : ''}`,
            },
          }}
        />
        <ArticleText item={{ type: 'text', value: { text: POI_TYPE[poi.type] } }} />
      </Container>

      <ArticleText item={{ type: 'text', value: { text: poi.source.comment } }} />
    </Card.ClickableContent>
  );
};

export default PoiCard;
