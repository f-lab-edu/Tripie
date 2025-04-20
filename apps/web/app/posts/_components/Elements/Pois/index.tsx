'use client';
import { createRef, useRef } from 'react';

import { Carousel } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@components/core';
import usePoi from 'hooks/usePoi';
import { PoisProps } from 'models/Props';
import { MapProvider } from 'react-map-gl/dist/esm/exports-maplibre';
import AwsMap from '../TripieMap';
import PoiCard from './PoiCard';

const ArticlePois = ({ item }: { item: PoisProps }) => {
  const { pois } = item.value;
  const cardRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(pois.map(() => createRef()));
  const { center, current, setCurrent, coordinates } = usePoi({ pois });

  return (
    <Container applyMargin="top-bottom">
      <MapProvider>
        <Container applyMargin="bottom" margin="m">
          <Carousel.Controlled>
            {pois.map((poi, index) => (
              <PoiCard
                action={() => setCurrent(`0-${index}`)}
                poi={poi}
                cardRef={cardRefs.current[index]}
                key={index + poi.id + poi.source.areas?.[0]?.id}
                selected={current === `0-${index}`}
              />
            ))}
          </Carousel.Controlled>
        </Container>
        {coordinates.length === 0 ? null : (
          <AwsMap locations={coordinates} center={center} current={current} setCurrent={setCurrent} />
        )}
      </MapProvider>
    </Container>
  );
};

export default ArticlePois;
