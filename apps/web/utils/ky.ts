import API from 'constants/api-routes';
import ky from 'ky';

const api = ky.extend({
  prefixUrl: API.BASE,
  timeout: 60_000,
  hooks: {
    afterResponse: [
      (_, __, res) => {
        console.log(res?.status);
        if (res?.status === 401) {
          console.log('invalid token');
        } else if (res?.status === 429) {
          console.log('too many requests..');
        }
        // console.log(res);
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
        // console.log(res);
      },
    ],
  },
});

export const backendApi = ky.extend({
  prefixUrl: API.BACKEND_URL,
  timeout: 60_000, // https://www.npmjs.com/package/ky/v/0.9.0?activeTab=readme#timeout
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
