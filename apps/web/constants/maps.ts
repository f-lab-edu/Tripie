const DEFAULT_MAP_CONTAINER_STYLE = {
  width: '100%',
  position: 'absolute',
  left: '0px',
  top: '0px',
  right: '0px',
  height: '100%',
};

const DEFAULT_MAP_CENTER = {
  lat: -31.56391,
  lng: 147.154312,
};
const DEFAULT_MAP_ZOOM = 18;

const DEFAULT_MAP_OPTIONS = {
  zoomControl: true,
  tilt: 0,
  mapTypeId: 'roadmap',
  mapId: 'DEMO_MAP_ID',
  gestureHandling: 'greedy',
  disableDefaultUI: true,
  fullscreenControl: false,
  colorScheme: 'FOLLOW_SYSTEM',
};

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string;

const PIN_VARIATION = {
  accommodation: {
    background: '#0f6e9d',
    borderColor: '#003f64',
    glyphColor: '#6096d9',
  },
  restaurant: {
    background: '#9d220f',
    borderColor: '#642100',
    glyphColor: '#d98860',
  },
  attraction: {
    background: '#4e0074',
    borderColor: '#2f0064',
    glyphColor: '#9660d9',
  },
};

const TRAVEL_MODE = {
  BICYCLING: 'BICYCLING',
  DRIVING: 'DRIVING',
  TRANSIT: 'TRANSIT',
  WALKING: 'WALKING',
};

const LINE_SYMBOL = {
  path: 'M 0,-1 0,1',
  strokeOpacity: 1,
  scale: 4,
};

const POLYGON_DOTTED = {
  icon: LINE_SYMBOL,
  offset: '0',
  repeat: '20px',
};

export {
  API_KEY,
  DEFAULT_MAP_CENTER,
  DEFAULT_MAP_CONTAINER_STYLE,
  DEFAULT_MAP_OPTIONS,
  DEFAULT_MAP_ZOOM,
  PIN_VARIATION,
  POLYGON_DOTTED,
  TRAVEL_MODE,
};
