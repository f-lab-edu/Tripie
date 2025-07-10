const API = {
  TRIPIE_SERVER_BASE: 'https://tripie-server.vercel.app/',
  BASE_URL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_DOMAIN,
  BASE: '/api',
  CHATGPT: 'chat/completions',
  SEARCH_PLACE: 'place/textsearch/json',
  CONTINENTL: 'continentl/country-list',
  SERVER_TIME: '/server-time',
  PLACE_SEARCH: 'v1/places:searchText',
  PLACES: 'places',
  PLACE: 'place',
  PLACE_PHOTOS: 'place-photos',
  OPEN_STREET_MAP: 'open-street-map',
  LOCATION: 'location',
  AWS_LOCATION_TEXT: 'aws/text',
  AWS_LOCATION_SUGGESTED_PLACES: 'aws/suggested-places',
  AWS_LAMBDA: '/aws/lambda',
  GOOGLE_SEARCH_URL: 'https://www.google.com/maps/search/',
  TRIPLE_ARTICLES: 'articles',
  BLUR_IMAGE: '/blur-image',
  BACKEND_URL: process.env.BACKEND_URL,
};

export default API;
