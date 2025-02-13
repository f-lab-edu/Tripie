'use client';
import { TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { ItineraryItem } from 'models/Itinery';
import { ReactNode } from 'react';
import { MapWithCarouselProps } from '../../../app/regions/_components/Elements/Itinerary/MapWithCarousel';
import Style from './carousel.module.scss';

const cx = classNames.bind(Style);

export const Carousel = ({
  children,
  carouselProps,
}: {
  children: ReactNode;
  carouselProps: MapWithCarouselProps['value']['pois'] | ItineraryItem[];
}) => {
  return (
    <TripieContainer applyMargin="top-bottom" className={cx(carouselProps.length > 1 ? ['carousel'] : null)}>
      <TripieContainer
        className={cx(carouselProps.length > 1 ? ['flex-items', 'embedded-card-wrap', 'itinerary-cards'] : null)}
        margin="none"
      >
        {children}
      </TripieContainer>
    </TripieContainer>
  );
};
