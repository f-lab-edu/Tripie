export const PLACEHOLDER = 'https://placehold.co/600x600?text=NO IMAGE';
export const LOADING_IMG = 'https://placehold.co/600x600?text=LOADING';

const CLOUDINARY_BUCKET_NAME = 'dbzzletpw';
export const CLOUDINARY_URL = (bucketName = CLOUDINARY_BUCKET_NAME) =>
  `https://res.cloudinary.com/${bucketName}/image/upload/`;

export const RESOURCE = {
  ARROW: 'v1745813635/arrow_x0nsyq',
  CHECK: 'v1745813630/check_kpylel',
  X: 'v1745813794/x_1_z8ors7',
  REFRESH: 'v1743150107/refresh',
  PLANE: 'v1743150122/plane',
  CLOUD: 'v1743150128/cloud',
  LOADING: 'v1743150142/loading',
  TRAM: 'v1743150147/tram',
  TRAIN: 'v1743150152/train',
  WALK: 'v1743150157/walk',
  SHIP: 'v1743150164/ship',
  BUS: 'v1743150170/bus',
  CAR: 'v1743150175/car',
  FLAG: 'v1743150180/flag',
  CURSOR: 'v1743150185/cursor',
  NEXT: 'v1743150189/next',
  KAKAO: 'v1743150194/kakao',
  GITHUB: 'v1743150199/github',
  EARTH: 'v1744014709/earth-dark_evevy1',
  STATIC_BACKGROUND: 'f_auto,q_auto/v1753510934/static-background_pz1ojq',
};

export const ICON_SIZES = { icon: 32, large: 48 };

export const ICON_RESOURCE = (key: keyof typeof RESOURCE) => CLOUDINARY_URL() + RESOURCE[key];

export const ICON_RESOURCE_ICON = (key: keyof typeof RESOURCE, width = ICON_SIZES['icon']) =>
  CLOUDINARY_URL() + `f_auto,q_auto:good,w_${width},dpr_auto/` + RESOURCE[key];
// f_auto : avif if supported, else backup
