'use client';

import Map from '@tripie-pyotato/design-system/@components/Map';
import Marker from '@tripie-pyotato/design-system/@components/MapMarker';
import { API_KEY } from 'constants/maps';
import useContinentl from 'hooks/query/useContinentl';
import { useEffect, useMemo, useState } from 'react';
import Loading from 'shared/components/Loading';
import dmsToDecimalLatLng from 'utils/coordinate';
import CountryInfoPopup from './CountryInfoPopup';

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
    <Map
      apiKey={API_KEY}
      style={{
        height: '40vh',
      }}
      initialViewState={{
        zoom: 2,
        latitude: coordinates.lat,
        longitude: coordinates.lng,
      }}
    >
      <CountryInfoPopup
        name={countryDetail.name}
        code={countryDetail.code}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        coordinates={coordinates}
        capital={countryDetail.capital}
        officialLanguage={countryDetail.official_language}
      />
      <Marker coordinates={coordinates} onClick={() => setShowPopup(true)} />
    </Map>
  );
};
export default CountryDetail;
