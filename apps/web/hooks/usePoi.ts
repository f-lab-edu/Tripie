import { LocationMarker } from 'app/trip-planner/_components/Chat';
import { Activity, Poi } from 'models/Aws';
import { useMemo, useState } from 'react';

const usePoi = ({ pois }: { pois: Poi[] }) => {
  const [coordinates] = useState(() => {
    return pois.reduce((acc, curr, index: number) => {
      if (curr.source.geolocation?.coordinates != null) {
        acc.push({
          index: `0-${index}`,
          parent: `${index}`,
          label: curr.type as Activity['label'],
          lng: curr.source.geolocation?.coordinates[0],
          lat: curr.source.geolocation?.coordinates[1],
          info: curr.source.comment,
        });
      }

      return acc;
    }, [] as LocationMarker[]);
  });

  const [current, setCurrent] = useState('0-0');

  const center = useMemo(() => {
    const coordinates = pois.reduce(
      (acc, curr) => {
        acc.longitude += curr.source.geolocation?.coordinates[0];
        acc.latitude += curr.source.geolocation?.coordinates[1];
        return acc;
      },
      { longitude: 0, latitude: 0 }
    );

    return {
      longitude: +(coordinates.longitude / pois.length),
      latitude: +(coordinates.latitude / pois.length),
      // longitude: +(coordinates.longitude / pois.length).toFixed(4),
      // latitude: +(coordinates.latitude / pois.length).toFixed(4),
    };
  }, [coordinates]);
  return { center, current, setCurrent, coordinates };
};

export default usePoi;
