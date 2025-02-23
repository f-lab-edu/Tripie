'use client';

import AwsMap, { AwsMapCenter } from 'app/regions/_components/Elements/Itinerary/TripieMap';
import { LocationMarker } from 'models/Geo';
// import AwsMap from 'shared/components/AwsMap';
// import { AwsMapCenter } from '../Elements/Map';

const SinglePinMap = ({ locations, center }: { locations: LocationMarker[]; center: AwsMapCenter }) => {
  return <AwsMap locations={locations} center={center} current={'0-0'} />;
  // return <AwsMap locationMarker={locations} center={center} />;
};

export default SinglePinMap;
