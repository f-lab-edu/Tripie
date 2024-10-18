// !!  api와 page 분리 필요
const ROUTES = {
  API: {
    BASE: '/api',
    CHATGPT: 'chat/completions',
    SEARCH_PLACE: 'place/textsearch/json',
    CONTINENTL: 'continentl/country-list',
    SERVER_TIME: 'server-time',
    PLACE_SEARCH: 'v1/places:searchText',
    PLACES: 'places',
    PLACE_PHOTOS: 'place-photos',
    OPEN_STREET_MAP: 'open-street-map',
    LOCATION: 'location',
    AWS_LOCATION_TEXT: 'aws/text',
    AWS_LOCATION_SUGGESTED_PLACES: 'aws/suggested-places',
    AWS_LOCATION_BY_PLACE_ID: 'aws/place-by-id',
  },
  PAGE: {
    LANDING: [
      { label: 'Process', href: '#Process' },
      { label: 'Services', href: '#Services' },
      { label: 'Work', href: '#Work' },
      { label: 'Plans', href: '#Plans' },
      { label: 'Contact', href: '#Contact' },
    ],
    PLAYGROUND: { label: 'Playground', href: '/playground' },
    HOME: { label: 'Home', href: '/' },
    SERVICES: { label: 'Services', href: '/#Services' },
    CONTACT: { label: 'Contact', href: '/#Contact' },
    TRIP_PLANNER: { label: 'Trip Planner', href: '/trip-planner' },
  },
  // 이미지 리소스 경로
  RESOURCE: {
    ARROW: { label: 'icon', src: '/arrow.png' },
    CHECK: { label: 'icon', src: '/check.png' },
    X: { label: 'icon', src: '/x.png' },
    REFRESH: { label: 'icon', src: '/refresh.png' },
    PLANE: { label: 'icon', src: '/plane.png' },
    CLOUD: { label: 'icon', src: '/cloud.png' },
    LOADING: { label: 'icon', src: '/loading.png' },
  },
};

export default ROUTES;
