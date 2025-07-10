'use client';

import 'maplibre-gl/dist/maplibre-gl.css';

import { ReactNode } from 'react';
import TripieContainer from '../../../@core/layout/TripieContainer';
import { Popup, PopupEvent, PopupType, classNames } from '../../../wrappers';
import Style from './map-popup.module.scss';

const cx = classNames.bind(Style);

const MapPopup = ({
  coordinates,
  showPopup,
  offset = 10,
  onClose,
  content,
  anchor = 'bottom',
  focusAfterOpen = true,
  closeOnClick = false,
  className,
}: {
  offset?: number;
  coordinates: { lng: number; lat: number };
  content: ReactNode;
  focusAfterOpen?: boolean;
  closeOnClick?: boolean;
  anchor?:
    | 'center'
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | undefined;
  showPopup: boolean;
  className?: string;
  onClose?: (e: PopupEvent<PopupType>) => void;
}) => {
  return showPopup ? (
    <Popup
      longitude={coordinates.lng}
      latitude={coordinates.lat}
      anchor={anchor}
      offset={offset}
      focusAfterOpen={focusAfterOpen}
      key={`popup-${coordinates.lng} + ${coordinates.lat}`}
      closeOnClick={closeOnClick}
      onClose={onClose}
      className={cx('tripie-popup', className)}
    >
      <TripieContainer padding={'sm'} margin={'sm'}>
        {content}
      </TripieContainer>
    </Popup>
  ) : null;
};

export default MapPopup;
