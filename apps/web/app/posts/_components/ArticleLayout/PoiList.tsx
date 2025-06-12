'use client';
import { AwsMap, Carousel } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@core';
import { API_KEY } from 'constants/maps';
import usePoi from 'hooks/usePoi';
import { PoisProps } from 'models/Props';
import { createRef, useRef } from 'react';
import { MapProvider } from 'wrapper';
import PoiCard from './PoiCard';

const PoiList = ({ item }: { item: PoisProps }) => {
  const { pois } = item.value;
  const cardRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(pois.map(() => createRef()));
  const { center, current, setCurrent, coordinates } = usePoi({ pois });

  return (
    <Container applyMargin="top-bottom">
      <MapProvider>
        <Container applyMargin="bottom" margin="m">
          <Carousel.Controlled>
            {pois.map((poi, index) => {
              console.log('key', index + poi.id + poi.source.areas?.[0]?.id);
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
            focusAfterOpen={false}
            style={{ height: '30vh' }}
            apiKey={API_KEY}
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
