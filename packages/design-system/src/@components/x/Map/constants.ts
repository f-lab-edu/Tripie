import { COLORS } from 'shared';

// aws 지도 호출 상수들
const MAP_NAME = 'explore.map.Esri';
// https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html
const REGION:
  | 'us-east-2'
  | 'us-east-1'
  | 'us-west-1'
  | 'us-west-2'
  | 'af-south-1'
  | 'ap-east-1'
  | 'ap-south-2'
  | 'ap-southeast-3'
  | 'ap-southeast-5'
  | 'ap-southeast-4'
  | 'ap-southeast-4'
  | 'ap-northeast-1'
  | 'ap-south-1'
  | 'ap-northeast-3'
  | 'ap-northeast-2'
  | 'ap-southeast-1'
  | 'ap-southeast-2'
  | 'ap-southeast-7'
  | 'ca-central-1'
  | 'ca-west-1'
  | 'eu-central-1'
  | 'us-west-2' = 'ap-northeast-1';
const STYLE_TYPE: 'Monochrome' | 'Standard' = 'Monochrome';
const COLOR_SCHEME: 'Dark' | 'Light' = 'Dark';
const MAP_ID = 'tripieMap';
const INDEX_NAME = 'explore.place.Esri';

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

export { COLOR_SCHEME, DEFAULT_STYLE, FULL_MAP_STYLE, INDEX_NAME, MAP_ID, MAP_NAME, REGION, STYLE_TYPE };
