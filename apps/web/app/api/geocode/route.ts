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

export async function geocode({ searchQuery }: { searchQuery: string }) {
  try {
    const res: GeocodeResponse = await api
      .get(ROUTES.API.SEARCH_PLACE, {
        searchParams: {
          query: searchQuery,
          key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
        },
      })
      .json();
    res?.results.forEach(item => addItem(item));

    const { results } = res;
    if (res.status === 'OK') {
      return results;
    }
  } catch (error) {
    console.log(error);
  }
}
