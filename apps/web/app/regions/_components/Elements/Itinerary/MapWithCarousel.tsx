'use client';
import { Chip, Divider, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { Poi } from 'models/Aws';
import { ItineraryItem } from 'models/Itinery';
import { Dispatch, SetStateAction, createRef, useRef } from 'react';

import Icon from 'shared/components/Icon/Icon';

import { Carousel } from 'shared/components/Carousel';
import PoiCard from '../Pois/PoiCard';
import Style from './map-with-carousel.module.scss';

export type MapWithCarouselProps = {
  type: 'pois';
  value: {
    pois: Array<Poi>;
    memo?: Array<ItineraryItem['memo']>;
    schedule: Array<ItineraryItem['schedule']>;
    transportation: Array<ItineraryItem['transportation']>;
  };
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
    <TripieContainer margin="none">
      <Divider className={cx('timeline-divider')} />
      <Carousel carouselProps={pois}>
        {pois.map((poi, index) => (
          <TripieContainer margin="none" key={index + poi.id + poi.source.areas?.[0]?.id} className={cx('total-wrap')}>
            {transportation[index].map(({ value }) => (
              <TripieContainer
                margin="none"
                key={value.duration + value.transportation + index}
                className={cx('icon-wrap', index !== 0 ? 'other-icons' : 'first-icon')}
              >
                {index === pois.length - 1 ? null : (
                  <>
                    {value.transportation != null ? (
                      <Icon.Transport active={current === `0-${index}`} type={value.transportation} />
                    ) : (
                      value.transportation
                    )}
                    {value.duration}
                  </>
                )}
              </TripieContainer>
            ))}
            {/* 처음과 마지막 이동 정보는 표기하는 대신 깃발 아이콘 표시*/}
            {index === 0 ? <Icon.Transport active={false} type={'flag'} className={cx('flag')} /> : null}
            {index === pois.length - 1 ? (
              <TripieContainer margin="none" className={cx('last-flag')}>
                <Icon.Transport active={false} type={'flag'} />
              </TripieContainer>
            ) : null}

            <TripieContainer margin="none" className={cx('timeline-item-wrap')}>
              <TripieContainer applyMargin="bottom" className={cx('timeline')}>
                <Chip selected={current === `0-${index}`}>{schedule[index] != '' ? schedule[index] : index + 1}</Chip>
              </TripieContainer>
              <PoiCard
                action={() => setCurrent(`0-${index}`)}
                poi={poi}
                cardRef={cardRefs.current[index]}
                className={cx('itinerary-card')}
                selected={current === `0-${index}`}
              />
            </TripieContainer>
          </TripieContainer>
        ))}
      </Carousel>
    </TripieContainer>
  );
};

export default MapWithCarousel;
