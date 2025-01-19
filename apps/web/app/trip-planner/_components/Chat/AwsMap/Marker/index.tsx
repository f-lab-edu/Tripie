'use client';

import { Marker, Popup } from 'react-map-gl/maplibre';

import classNames from 'classnames/bind';
import usePopUp from 'hooks/awsMap/usePopUp';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useContext } from 'react';
import Chip from 'shared/components/Chip/Chip';
import { LocationMarker, TabContext } from '../..';
import Style from './marker.module.scss';
import './marker.scss';

const cx = classNames.bind(Style);

const Markers = ({
  locationMarker,
  focusAfterOpen,
}: {
  locationMarker: LocationMarker[];
  focusAfterOpen?: boolean;
}) => {
  const { current, cycle } = useContext(TabContext);
  const { setPopup, popup, setCurrentSelected, popupMarkers } = usePopUp({ locationMarker, current });

  return (
    <>
      {popup === current &&
        popupMarkers.map((markers, index) => (
          <Popup
            longitude={markers.lng}
            latitude={markers.lat}
            anchor="bottom"
            offset={24}
            focusAfterOpen={focusAfterOpen}
            key={`popup-${markers.lng} + ${markers.lat}+${index}`}
            className={cx('popup')}
          >
            {JSON.stringify(markers.info)}
          </Popup>
        ))}
      {locationMarker.map((marker, index) => (
        <Marker
          key={`location-${marker.lng} + ${marker.lat}+${index}`}
          longitude={marker.lng}
          latitude={marker.lat}
          anchor="bottom"
          onClick={() => {
            cycle(marker.index);
            setPopup(marker.index);
            setCurrentSelected(marker.index);
          }}
        >
          <Chip.Marker className={cx(marker.label)} marker={marker} popup={popup} />
        </Marker>
      ))}
    </>
  );
};

export default Markers;
