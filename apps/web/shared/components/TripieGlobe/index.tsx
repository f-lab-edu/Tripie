'use client';

import API from 'constants/api-routes';
import dynamic from 'next/dynamic';
import TripieIcon from '../TripieIcon/TripieIcon';
import Countries from './countries.json';

const TripieGlobe = dynamic(() => import('@tripie-pyotato/design-system/@components/Globe').then(mod => mod.default), {
  ssr: false,
  loading: () => <TripieIcon variant="loading" />,
});

const Globe = () => {
  return (
    <TripieGlobe
      fallback={<TripieIcon variant="loading" />}
      width={250}
      height={300}
      hexPolygonsData={Countries.features}
      cloudinaryUrl={API.MEDIA_URL}
    />
  );
};

export default Globe;
