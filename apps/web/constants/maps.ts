// aws 지도 호출 상수들
const MAP_NAME = 'explore.map.Esri';
const REGION = 'ap-northeast-1';
const API_KEY = process.env.NEXT_PUBLIC_AWS_MAP_ACTIONS as string;
const STYLE = `https://maps.geo.${REGION}.amazonaws.com/maps/v0/maps/${MAP_NAME}/style-descriptor?key=${API_KEY}`;
const MAP_ID = 'tripieMap';
const INDEX_NAME = 'explore.place.Esri';

export { API_KEY, INDEX_NAME, MAP_ID, MAP_NAME, REGION, STYLE };
