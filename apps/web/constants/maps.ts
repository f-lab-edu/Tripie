import COLORS from './colors';

// aws 지도 호출 상수들
const MAP_NAME = 'explore.map.Esri';
const REGION = 'ap-northeast-1';
const API_KEY = process.env.NEXT_PUBLIC_AWS_MAP_ACTIONS as string;
const STYLE_TYPE = 'Monochrome'; // "Standard" |'MonoChrome'
const COLOR_SCHEME = 'Dark'; // 'Light'

const DEFAULT_STYLE = {
  width: '100%',
  height: '50vh',
  display: 'inline-block',
  borderRadius: '8px',
  border: `1px solid ${COLORS[30]}`,
};

const FULL_MAP_STYLE = {
  ...DEFAULT_STYLE,
  height: '85vh',
};

const STYLE = `https://maps.geo.${REGION}.amazonaws.com/v2/styles/${STYLE_TYPE}/descriptor?key=${API_KEY}&color-scheme=${COLOR_SCHEME}`;
const MAP_ID = 'tripieMap';
const INDEX_NAME = 'explore.place.Esri';

export { API_KEY, DEFAULT_STYLE, FULL_MAP_STYLE, INDEX_NAME, MAP_ID, MAP_NAME, REGION, STYLE };
