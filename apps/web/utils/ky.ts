import API from 'constants/api-routes';
import ky from 'ky';

const api = ky.extend({
  prefixUrl: API.BASE,
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

export const awsApi = ky.extend({
  prefixUrl: process.env.NEXT_PUBLIC_BASE_URL + API.BASE,
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

export default api;
