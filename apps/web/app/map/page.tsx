'use client';
import { Container } from '@tripie/design-system';
import Directions from 'app/map/_components/Maps/Directions/Directions';

import GoogleMap from 'app/map/_components/Maps/GoogleMap';
import Marker from 'app/map/_components/Maps/Marker';
import { TRAVEL_MODE } from 'constants/maps';

const locations = [
  { lat: 35.62366, lng: 139.753634 },
  { lat: 35.6612723, lng: 139.7775608 },
  { lat: 35.6539099, lng: 139.7975056 },
  { lat: 35.662761, lng: 139.7991693 },
  { lat: 35.6660912, lng: 139.7876416 },
];

export default function Maps() {
  return (
    <Container margin="none">
      <GoogleMap>
        {locations.map((position, index: number) => (
          <div key={JSON.stringify(position)}>
            <Marker position={position} onClick={() => alert(index + 1)} numberOfOrder={index + 1} />
            {index < locations.length && (
              <Directions
                origin={locations[index]}
                destination={locations[index + 1]}
                travelMode={TRAVEL_MODE.DRIVING as google.maps.TravelMode}
              />
            )}
          </div>
        ))}
      </GoogleMap>
    </Container>
  );
}
