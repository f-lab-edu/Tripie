'use client';
import { AnimatedCard } from '@tripie-pyotato/design-system/@components';
import { Stack, Text, TripieCard } from '@tripie-pyotato/design-system/@core';
import { RefObject, useEffect } from 'react';
import { useMap } from 'wrapper';

import useImgAlt from 'hooks/useImgAlt';

import POI_TYPE from 'constants/triple';
import { Poi } from 'models/Aws';

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
      <TripieCard.WithImage
        sizes={length > 2 ? 'card' : 'full'}
        margin={'none'}
        src={poi.source.image?.sizes.full.url}
        alt={alt}
        imgSize={'card'}
        sourceUrl={poi.source.image.sourceUrl}
        withImageBorder={true}
        aspectRatio={'photo'}
      >
        <TripieCard.Header applyMargin="left-right" size="tiny">
          <Text.Accented isButtonText={true}>{poi.source.areas[0]?.name ?? poi.source.areas[0]?.name}</Text.Accented>
        </TripieCard.Header>
        <TripieCard.Header applyMargin="left-right" size={'h4'} bold={true}>
          {poi.source.names.ko}
        </TripieCard.Header>
        <TripieCard.Content margin="m">
          <Stack margin="none" gap="sm" alignItems="start" justifyContent="start">
            {poi.region.source.names.ko} | {POI_TYPE[poi.type]}
          </Stack>
        </TripieCard.Content>
        <TripieCard.Content margin="m">{poi.source.comment}</TripieCard.Content>
      </TripieCard.WithImage>
    </AnimatedCard>
  );
};

export default PoiCard;
