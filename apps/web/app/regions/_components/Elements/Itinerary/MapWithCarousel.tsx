'use client';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { Poi } from 'models/Aws';
import { Itinerary, ItineraryItem } from 'models/Itinery';
import { Dispatch, SetStateAction, createRef, useRef } from 'react';
import Chip from 'shared/components/Chip/Chip';
import Divider from 'shared/components/Divider/Divider';
import Icon from 'shared/components/Icon/Icon';
import { PoiCard } from '../Pois';
import Style from './map-with-carousel.module.scss';

export type MapWithCarouselProps = {
  type: 'pois';
  value: {
    pois: Array<Poi>;
    memo: Array<ItineraryItem['memo']>;
    schedule: Array<ItineraryItem['schedule']>;
    transportation: Array<ItineraryItem['transportation']>;
  };
};

export type ItineraryProps = { type: 'itinerary'; value: { itinerary: Itinerary } };

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
  console.log('transportation', transportation);
  return (
    <Container margin="none">
      <Divider className={cx('timeline-divider')} />
      <Container applyMargin="top-bottom" className={cx(pois.length > 1 ? ['carousel'] : null)}>
        <Container
          className={cx(pois.length > 1 ? ['flex-items', 'embedded-card-wrap', 'itinerary-cards'] : null)}
          margin="none"
        >
          {pois.map((poi, index) => (
            <Container margin="none" key={index + poi.id + poi.source.areas?.[0]?.id} className={cx('total-wrap')}>
              {transportation[index].map(({ value }) => (
                <Container
                  margin="none"
                  key={value.duration + value.transportation + index}
                  className={cx('icon-wrap', index !== 0 ? 'other-icons' : 'first-icon')}
                >
                  {index === pois.length - 1 ? null : (
                    <>
                      {value.transportation != null ? (
                        <Icon.Transport active={current === `${index + 1}-0`} type={value.transportation} />
                      ) : (
                        value.transportation
                      )}
                      {value.duration}
                    </>
                  )}
                </Container>
              ))}
              {/* 처음과 마지막 이동 정보는 표기하는 대신 깃발 아이콘 표시*/}
              {index === 0 ? <Icon.Transport active={false} type={'flag'} className={cx('flag')} /> : null}
              {index === pois.length - 1 ? (
                <Container margin="none" className={cx('last-flag')}>
                  <Icon.Transport active={false} type={'flag'} />
                </Container>
              ) : null}

              <Container margin="none" className={cx('timeline-item-wrap')}>
                <Container applyMargin="bottom" className={cx('timeline')}>
                  <Chip className={cx('marker', poi.type)} selected={current === `${index + 1}-0`}>
                    {schedule[index] != '' ? schedule[index] : index + 1}
                  </Chip>
                </Container>
                <PoiCard
                  onClick={() => setCurrent(`${index + 1}-0`)}
                  poi={poi}
                  cardRef={cardRefs.current[index]}
                  className={cx('itinerary-card')}
                  selected={current === `${index + 1}-0`}
                />
              </Container>
            </Container>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default MapWithCarousel;
