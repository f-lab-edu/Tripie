'use client';

import { Card } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { DEFAULT_STYLE, MAP_ID, STYLE } from 'constants/maps';
import useContinentl from 'hooks/query/useContinentl';
import { useEffect, useMemo, useState } from 'react';
import { Map, Marker } from 'react-map-gl/maplibre';
import 'shared/components/AwsMap/Marker/marker.module.scss';
import Loading from 'shared/components/Loading';
import dmsToDecimal from 'utils/coordtinate';
import Style from '../countries.module.scss';
import CountryInfoPopup from './CountryInfoPopup';
import CountryName from './CountryName';
const cx = classNames.bind(Style);

const CountryDetail = ({ selectedCountry }: { selectedCountry: string }) => {
  const { data, isLoading } = useContinentl(selectedCountry);
  const [showPopup, setShowPopup] = useState<boolean>(true);

  const countryDetail = useMemo(() => (data != null ? data[0] : null), [selectedCountry, data]);

  const coordinates = useMemo(() => {
    if (countryDetail?.coordinates?.length === 2) {
      const [lat, lng] = dmsToDecimal(countryDetail.coordinates);

      return { lat, lng };
    }
    return null;
  }, [data]);

  useEffect(() => {
    setShowPopup(true);
  }, [selectedCountry]);

  if (countryDetail == null || isLoading || coordinates == null) {
    return <Loading isLoading={countryDetail == null || isLoading || coordinates == null} />;
  }

  return (
    <Card.Content className={cx('card-wrap')}>
      <CountryName
        name={countryDetail.name}
        blurDataUrl={countryDetail?.blurDataURL}
        code={countryDetail.code}
        flagImage={countryDetail['flag-image']}
      />
      <Map
        id={MAP_ID}
        reuseMaps={true}
        style={DEFAULT_STYLE}
        mapStyle={STYLE}
        initialViewState={{
          zoom: 4,
          latitude: coordinates.lat,
          longitude: coordinates.lng,
        }}
      >
        <CountryInfoPopup
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          coordinates={coordinates}
          capital={countryDetail.capital}
          officialLanguage={countryDetail.official_language}
        />
        <Marker
          key={`${countryDetail.coordinates.join(',')}`}
          longitude={coordinates.lng}
          latitude={coordinates.lat}
          anchor="bottom"
          onClick={() => setShowPopup(true)}
          className={cx('marker')}
        />
      </Map>
    </Card.Content>
  );
};
export default CountryDetail;
