'use client';

import { Card } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@components/core';
import { DEFAULT_STYLE, MAP_ID, STYLE } from 'constants/maps';
import useContinentl from 'hooks/query/useContinentl';
import { useEffect, useMemo, useState } from 'react';
import 'shared/components/AwsMap/Marker/marker.module.scss';
import Loading from 'shared/components/Loading';
import dmsToDecimalLatLng from 'utils/coordinate';
import { Map, Marker, classNames } from 'wrapper';
import Style from './countries.module.scss';
import CountryInfoPopup from './CountryInfoPopup';
import CountryName from './CountryName';
const cx = classNames.bind(Style);

const CountryDetail = ({ selectedCountry }: { selectedCountry: string }) => {
  const { data, isLoading } = useContinentl(selectedCountry);
  const [showPopup, setShowPopup] = useState<boolean>(true);

  const countryDetail = useMemo(() => (data != null ? data[0] : null), [selectedCountry, data]);

  const coordinates = useMemo(() => {
    if (countryDetail?.coordinates?.length === 2) {
      const [lat, lng] = dmsToDecimalLatLng(countryDetail.coordinates);

      return { lat, lng };
    }
    return null;
  }, [data]);

  useEffect(() => {
    setShowPopup(true);
  }, [selectedCountry]);

  if (countryDetail == null || isLoading || coordinates == null) {
    return <Loading />;
  }

  return (
    <Card.Content className={cx('card-wrap')}>
      <CountryName
        name={countryDetail.name}
        blurDataUrl={countryDetail?.blurDataURL}
        code={countryDetail.code}
        flagImage={countryDetail['flag-image']}
      />
      <Container margin="none" className={cx('map-wrap')} padding="sm" applyPadding="bottom">
        <Map
          id={MAP_ID}
          interactive={true}
          reuseMaps={true}
          style={{ ...DEFAULT_STYLE, height: '40vh' }}
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
      </Container>
    </Card.Content>
  );
};
export default CountryDetail;
