'use client';
import { AnimatedCard, Card } from '@tripie-pyotato/design-system/@components';
import { Stack, Text } from '@tripie-pyotato/design-system/@core';
import { useMap } from '@tripie-pyotato/design-system/@wrappers';

import { RefObject, useEffect } from 'react';

import useImgAlt from 'hooks/useImgAlt';

import POI_TYPE from 'constants/triple';
import { Poi } from 'models/Aws';

import API from 'constants/api-routes';
import { classNames } from 'wrapper/classNames';
import Style from './poi-card.module.scss';

const cx = classNames.bind(Style);

const PoiCard = ({
  poi,
  selected,
  action,
  cardRef,
  length,
}: {
  poi: Poi;
  selected: boolean;
  action: () => void;
  cardRef: RefObject<HTMLDivElement>;
  length: number;
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
    <AnimatedCard selected={selected} onClick={action} ref={cardRef}>
      <Card.WithImage
        className={cx('card-wrap')}
        sizes={length > 2 ? 'card' : 'full'}
        margin={'none'}
        src={poi.source.image?.sizes.full.url.replace('https://res.cloudinary.com', API.MEDIA_URL)}
        alt={alt}
        cloudinaryUrl={API.MEDIA_URL}
        padding={'none'}
        imgSize={'card'}
        sourceUrl={poi.source.image.sourceUrl}
        withImageBorder={true}
        aspectRatio={'photo'}
      >
        <Card.Header applyMargin="left-right" size="tiny">
          <Text.Accented noGapUnderText={true}>{poi.source.areas[0]?.name ?? poi.source.areas[0]?.name}</Text.Accented>
        </Card.Header>
        <Card.Header applyMargin="left-right" size={'h4'} bold={true}>
          {poi.source.names.ko}
        </Card.Header>
        <Card.Content margin="m">
          <Stack margin="none" gap="sm" alignItems="start" justifyContent="start">
            {poi.region.source.names.ko} | {POI_TYPE[poi.type]}
          </Stack>
        </Card.Content>
        <Card.Content margin="m">{poi.source.comment}</Card.Content>
      </Card.WithImage>
    </AnimatedCard>
  );
};

export default PoiCard;
