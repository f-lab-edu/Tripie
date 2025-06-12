import 'maplibre-gl/dist/maplibre-gl.css';
import { ReactNode } from 'react';
import TripieContainer from '../../../@core/layout/TripieContainer';
import { Popup, PopupEvent, PopupType } from '../../../wrappers';
import './map-popup.scss';

const MapPopup = ({
  coordinates,
  showPopup,
  offset = 10,
  onClose,
  content,
  anchor = 'bottom',
  focusAfterOpen = true,
  closeOnClick = false,
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
      className={'tripie-popup'}
    >
      <TripieContainer padding={'sm'} margin={'sm'}>
        {content}
      </TripieContainer>
    </Popup>
  ) : null;
};

export default MapPopup;
