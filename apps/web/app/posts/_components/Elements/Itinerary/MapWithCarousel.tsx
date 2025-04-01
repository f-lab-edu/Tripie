'use client';
import { Carousel, Chip, Container, Divider, Icon } from '@tripie-pyotato/design-system';

import { Dispatch, SetStateAction, createRef, memo, useRef } from 'react';
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

const CarouselItems = memo(
  ({
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

    return pois.map((poi, index) => (
      <Container
        margin="none"
        key={index + poi.id + poi.source.areas?.[0]?.id}
        className={cx('total-wrap', index === 0 ? 'first-card-wrap' : '')}
      >
        {transportation[index].map(({ value }) => (
          <Container
            margin="none"
            key={value.duration + value.transportation + index}
            className={cx('icon-wrap', index !== 0 ? 'other-icons' : 'first-icon')}
          >
            {index === pois.length - 1 ? null : (
              <>
                {value.transportation != null ? (
                  <Icon.Transport
                    active={current === `0-${index}`}
                    type={TRANSPORT?.[value?.transportation as keyof typeof TRANSPORT] as Transport}
                  />
                ) : (
                  value.transportation
                )}
                {value.duration}
              </>
            )}
          </Container>
        ))}
        {/* 처음과 마지막 이동 정보는 표기하는 대신 깃발 아이콘 표시*/}
        {index === 0 ? <Icon.Transport active={false} type={'FLAG'} className={cx('flag')} /> : null}
        {index === pois.length - 1 ? (
          <Container margin="none" className={cx('flag', 'last-flag')}>
            <Icon.Transport active={false} type={'FLAG'} />
          </Container>
        ) : null}

        <Container margin="none" className={cx('timeline-item-wrap')}>
          <Container applyMargin="bottom" className={cx('timeline')}>
            <Chip selected={current === `0-${index}`}>{schedule[index] != '' ? schedule[index] : index + 1}</Chip>
          </Container>
          {/* !! 카드의 제목이나 설명 텍스트가 너무 길면 스타일 깨짐!!*/}
          <PoiCard
            action={() => setCurrent(`0-${index}`)}
            poi={poi}
            cardRef={cardRefs.current[index]}
            className={cx('itinerary-card', pois.length > 2 ? 'default' : '')}
            selected={current === `0-${index}`}
          />
        </Container>
      </Container>
    ));
  }
);

const MapWithCarousel = ({
  item,
  current,
  setCurrent,
}: {
  item: MapWithCarouselProps;
  current: string;
  setCurrent: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Container applyMargin="top-bottom">
      <Divider className={cx('timeline-divider')} />
      <Carousel.Controlled>
        <CarouselItems item={item} current={current} setCurrent={setCurrent} />
      </Carousel.Controlled>
    </Container>
  );
};

export default MapWithCarousel;
