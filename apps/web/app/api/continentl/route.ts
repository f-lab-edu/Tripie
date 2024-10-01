import ROUTES from 'constants/routes';
import ky from 'ky';
import addCityData from '../firebase/addCityData';

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

export async function getContinentlApi() {
  try {
    const res = await await api
      .get(ROUTES.API.CONTINENTL, {
        searchParams: {
          page: 1,
          key: process.env.NEXT_PUBLIC_CONTINENTL as string,
        },
      })
      .json();
    if (Array.isArray(res)) {
      res.forEach(item => addCityData(item, 'continentl'));
    }
    return res;
  } catch (error) {
    console.log(error);
  }
}
