'use client';

import Globe from '@tripie-pyotato/design-system/@components/Globe';
import API from 'constants/api-routes';
import TripieIcon from '../TripieIcon/TripieIcon';
import Countries from './countries.json';

const TripieGlobe = ({ width = 250, height = 300 }: { width?: number; height?: number }) => {
  return (
    <Globe
      fallback={<TripieIcon variant="loading" />}
      width={width}
      height={height}
      hexPolygonsData={Countries.features}
      cloudinaryUrl={API.MEDIA_URL}
    />
  );
};

export default TripieGlobe;
