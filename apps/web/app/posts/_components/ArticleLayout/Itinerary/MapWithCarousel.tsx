'use client';

import { Carousel, Chip, Divider } from '@tripie-pyotato/design-system/@components';
import { Container, Stack } from '@tripie-pyotato/design-system/@core/layout';
import { classNames } from '@tripie-pyotato/design-system/@wrappers';

import { Dispatch, SetStateAction, createRef, useMemo, useRef } from 'react';

import { Transport } from 'models/Itinery';
import { MapWithCarouselProps } from 'models/Props';
import TripieIcon from 'shared/components/TripieIcon/TripieIcon';
import PoiCard from '../PoiCard';
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
  const transportationFixedLength = useMemo(() => {
    return transportation.map((item, index) => (index == transportation.length - 1 ? [] : item));
  }, []);

  return (
    <Container applyMargin={'bottom'}>
      <Divider className={cx('timeline-divider')} />
      <Carousel.Controlled>
        {pois.map((poi, index) => (
          <Stack direction="column" key={`${index}-${poi.id}`} margin="none" gap="xl">
            {transportationFixedLength[index].map(({ value }) => (
              <Stack
                zIndex="base"
                margin="none"
                direction="row"
                display="inline-flex"
                justifyContent="right"
                key={value.duration + value.transportation + index}
              >
                <Stack justifyContent="space-between" margin="none" display="inline-flex" alignItems="center">
                  {index === 0 ? <TripieIcon variant="transport" active={false} type={'FLAG'} /> : null}
                  <Container margin="none" justifyContent="flex-end" display="inline-flex" alignItems="center">
                    <Chip selected={current === `0-${index}`} className={cx('chip')}>
                      {schedule[index] == '' ? index + 1 : schedule[index]}
                    </Chip>
                  </Container>
                  {index <= pois.length - 1 ? (
                    <Stack
                      margin="none"
                      alignItems="center"
                      gap="sm"
                      justifyContent="flex-end"
                      className={cx('transport')}
                      display="inline-flex"
                    >
                      {value.transportation == null ? (
                        value.transportation
                      ) : (
                        <TripieIcon
                          variant="transport"
                          active={current === `0-${index}`}
                          type={TRANSPORT?.[value?.transportation as keyof typeof TRANSPORT] as Transport}
                        />
                      )}
                      {value.duration}
                    </Stack>
                  ) : (
                    <Container margin="none" justifyContent={'flex-end'} display="inline-flex">
                      <TripieIcon variant="transport" active={false} type={'FLAG'} />
                    </Container>
                  )}
                </Stack>
              </Stack>
            ))}

            {index >= pois.length - 1 ? (
              <Container margin="none" alignItems={'center'} display="inline-flex">
                <Container margin="none" justifyContent="flex-end" display="inline-flex">
                  <Chip selected={current === `0-${index}`} className={cx('chip')}>
                    {schedule[index] == '' ? index + 1 : schedule[index]}
                  </Chip>
                </Container>
                <Container margin="none" justifyContent={'flex-end'} display="inline-flex">
                  <TripieIcon variant="transport" active={false} type={'FLAG'} />
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
