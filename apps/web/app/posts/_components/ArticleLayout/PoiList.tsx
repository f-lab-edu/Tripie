'use client';
import { Carousel } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@core';
import { MapProvider } from '@tripie-pyotato/design-system/@wrappers';

import usePoi from 'hooks/usePoi';
import { PoisProps } from 'models/Props';
import dynamic from 'next/dynamic';
import { createRef, useEffect, useRef } from 'react';
import PoiCard from './PoiCard';

const AwsMap = dynamic(() => import('../../../../shared/components/AwsMap').then(mod => mod.default), {
  ssr: false,
});

const PoiList = ({ item }: { item: PoisProps }) => {
  const { pois } = item.value;
  const cardRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(pois.map(() => createRef()));
  const { center, current, setCurrent, coordinates } = usePoi({ pois });

  useEffect(() => {
    const scrollY = window.scrollY;
    return () => {
      window.scrollTo(0, scrollY); // Restore original position
    };
  }, []);

  return (
    <Container applyMargin="top-bottom">
      <MapProvider>
        <Container applyMargin="bottom" margin="m">
          <Carousel.Controlled>
            {pois.map((poi, index) => {
              return (
                <PoiCard
                  length={pois.length}
                  action={() => setCurrent(`0-${index}`)}
                  poi={poi}
                  cardRef={cardRefs.current[index]}
                  key={index + poi.id + poi.source.areas?.[0]?.id}
                  selected={current === `0-${index}`}
                />
              );
            })}
          </Carousel.Controlled>
        </Container>
        {coordinates.length === 0 ? null : (
          <AwsMap
            height="30vh"
            locationMarker={coordinates}
            center={center}
            currentMarker={current}
            setCurrentMarker={setCurrent}
          />
        )}
      </MapProvider>
    </Container>
  );
};

export default PoiList;
