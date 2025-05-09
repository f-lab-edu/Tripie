'use client';

import { Carousel, Chip, Icon } from '@tripie-pyotato/design-system/@components';
import { Container, Divider, Stack } from '@tripie-pyotato/design-system/@core';

import { Dispatch, SetStateAction, createRef, useRef } from 'react';
import { classNames } from 'wrapper';

import { Transport } from 'models/Itinery';
import { MapWithCarouselProps } from 'models/Props';
import PoiCard from '../Pois/PoiCard';
import Style from './map-with-carousel.module.scss';

const TRANSPORT = {
  walk: 'WALK',
  tram: 'TRAM',
  train: 'TRAIN',
  bus: 'BUS',
  flag: 'FLAG',
  car: 'CAR',
  ship: 'SHIP',
};

const cx = classNames.bind(Style);

const MapWithCarousel = ({
  item,
  current,
  setCurrent,
}: {
  item: MapWithCarouselProps;
  current: string;
  setCurrent: Dispatch<SetStateAction<string>>;
}) => {
  const { pois, transportation, schedule } = item.value;
  const cardRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(pois.map(() => createRef()));

  return (
    <Container applyMargin={'bottom'}>
      <Divider className={cx('timeline-divider')} />
      <Carousel.Controlled>
        {pois.map((poi, index) => (
          <Stack direction="column" key={JSON.stringify(poi)} margin="none" gap="xl">
            {transportation[index].map(({ value }) => (
              <Stack
                zIndex="base"
                margin="none"
                direction="row"
                justifyContent="right"
                key={value.duration + value.transportation + index}
              >
                <Stack justifyContent="space-between" margin="none">
                  {index === 0 ? <Icon.Transport active={false} type={'FLAG'} /> : null}
                  <Container margin="none" justifyContent="flex-end">
                    <Chip selected={current === `0-${index}`} className={cx('chip')}>
                      {schedule[index] != '' ? schedule[index] : index + 1}
                    </Chip>
                  </Container>
                  {index <= pois.length - 1 ? (
                    <Container margin="none" justifyContent="flex-end" className={cx('transport')}>
                      {value.transportation != null ? (
                        <Icon.Transport
                          active={current === `0-${index}`}
                          type={TRANSPORT?.[value?.transportation as keyof typeof TRANSPORT] as Transport}
                        />
                      ) : (
                        value.transportation
                      )}
                      {value.duration}
                    </Container>
                  ) : null}
                </Stack>
              </Stack>
            ))}

            {index >= pois.length - 1 ? (
              <Container margin="none" alignItems={'center'}>
                <Container margin="none" justifyContent="flex-end">
                  <Chip selected={current === `0-${index}`} className={cx('chip')}>
                    {schedule[index] != '' ? schedule[index] : index + 1}
                  </Chip>
                </Container>
                <Container margin="none" justifyContent={'flex-end'}>
                  <Icon.Transport active={false} type={'FLAG'} />
                </Container>
              </Container>
            ) : null}

            <PoiCard
              key={index + poi.id + poi.source.areas?.[0]?.id}
              length={pois.length}
              action={() => setCurrent(`0-${index}`)}
              poi={poi}
              cardRef={cardRefs.current[index]}
              selected={current === `0-${index}`}
            />
          </Stack>
        ))}
      </Carousel.Controlled>
    </Container>
  );
};

export default MapWithCarousel;
