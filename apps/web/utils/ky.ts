import ROUTES from 'constants/routes';
import ky from 'ky';

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

export const awsApi = ky.extend({
  // server functions
  // https://stackoverflow.com/questions/73876919/why-do-i-need-to-put-http-localhost3000-for-fetching-from-api-routes-in-next
  prefixUrl: process.env.NEXT_PUBLIC_BASE_URL + ROUTES.API.BASE,
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
