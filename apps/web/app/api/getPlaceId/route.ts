import {
  AFRICA,
  ANTARCTICA,
  ASIA,
  EUROPE,
  NORTH_AMERICA,
  OCEANIA_AUSTRALIA,
  SOUTH_AMERICA,
} from 'app/playground/countries/continents';
import ROUTES from 'constants/routes';
import ky from 'ky';
import addItem from '../firebase/add';

const api = ky.extend({
  prefixUrl: ROUTES.API.BASE,
  hooks: {
    afterResponse: [
      (_, __, res) => {
        console.log(res?.status);
        if (res?.status === 401) {
          console.log('invalid token');
        } else if (res?.status === 429) {
          console.log('too many requests..');
        }
        console.log(res);
      },
    ],
  },
});
type Location = { lat: number; lng: number };
type Geometry = {
  location: Location;
  viewport: {
    northeast: Location;

    southwest: Location;
  };
};

type Photos = {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
};

type GeocodeResult = {
  business_status: string;
  formatted_address: string;
  geometry: Geometry;
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  opening_hours: { open_now: boolean };
  photos: Photos[];
  place_id: string;
  rating: number;
  reference: string;
  types: string[];
  user_ratings_total: number;
};

type GeocodeResponse = {
  html_attributions: [];
  results: GeocodeResult[];
  status: string;
};

// const africaSet = new Set(AFRICA.split('\n'));
// const asiaSet = new Set(ASIA.split('\n'));
// const europeSet =  new Set(EUROPE.split('\n'));
// const northAmericaSet =  new Set(NORTH_AMERICA.split('\n'));
// const SouthAmerica =  new Set(SOUTH_AMERICA.split('\n'));
// const inOceaniaAustralia =  new Set(OCEANIA_AUSTRALIA.split('\n'));

export async function getPlaceId({ searchQuery }: { searchQuery: string }) {
  try {
    // const res: GeocodeResponse = await api
    //   .get(ROUTES.API.SEARCH_PLACE, {
    //     searchParams: {
    //       query: searchQuery,
    //       key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
    //     },
    //   })
    //   .json();
    const { Place } = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary;

    const request = {
      textQuery: searchQuery,
      fields: ['displayName', 'location'],
      // includedType: 'restaurant',
      // locationBias: { lat: 37.4161493, lng: -122.0812166 },
      // isOpenNow: true,
      // language: 'en-US',
      maxResultCount: 1,
      // minRating: 3.2,
      // region: 'us',
      useStrictTypeFiltering: false,
    };
    //@ts-ignore
    const { places } = await Place.searchByText(request);
    // res?.results.forEach(item => addItem(item, 'placeIdGeocode'));
    if (places.length > 0) {
      const placeInfo = places.map(place => {
        const continent = () => {
          const locatedContinent: string[] = [];
          const continents = {
            0: 'Africa',
            1: 'Asia',
            2: 'Europe',
            3: 'North America',
            4: 'South America',
            5: 'Oceania Australia',
            6: 'Antarctica',
          };
          [AFRICA, ASIA, EUROPE, NORTH_AMERICA, SOUTH_AMERICA, OCEANIA_AUSTRALIA, ANTARCTICA].forEach(
            (continent, index) =>
              new Set(continent.split('\n')).has(place.displayName as string) &&
              locatedContinent.push(continents[index as keyof typeof continents])
          );
          return locatedContinent;
        };
        return {
          id: place.id,
          name: place.displayName,
          location: place.location?.toJSON(),
          continent: continent(),
        };
      })[0];

      addItem({ ...placeInfo }, 'countries');
      return placeInfo;
    }

    // const { results } = res;
    // if (res.status === 'OK') {
    //   console.log(res);
    //   return results;
    // }
  } catch (error) {
    console.log(error);
  }
}
