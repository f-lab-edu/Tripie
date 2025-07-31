const API = {
  TRIPIE_SERVER_BASE: 'https://tripie-server.vercel.app/',
  BASE_URL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_DOMAIN,
  MEDIA_URL: 'https://media.tripie-api.shop',
  BASE: '/api',
  SERVER_TIME: '/server-time',
  BLUR_IMAGE: '/blur-image',
  BACKEND_URL: process.env.BACKEND_URL,
};

export default API;
