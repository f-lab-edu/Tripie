'use client';

import AwsMap, { AwsMapCenter } from 'app/regions/_components/Elements/Map/Map';
import { LocationMarker } from 'app/trip-planner/_components/Chat';

const SinglePinMap = ({ locations, center }: { locations: LocationMarker[]; center: AwsMapCenter }) => {
  return <AwsMap locations={locations} center={center} current={'0-0'} />;
};

export default SinglePinMap;
