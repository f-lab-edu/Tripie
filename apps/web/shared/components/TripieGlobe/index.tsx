'use client';

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
      cloudinaryUrl={'https://media.tripie-api.shop'}
    />
  );
};

export default Globe;
