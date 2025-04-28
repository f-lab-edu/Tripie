export const PLACEHOLDER = 'https://placehold.co/600x600?text=NO IMAGE';
export const LOADING_IMG = 'https://placehold.co/600x600?text=LOADING';

const CLOUDINARY_BUCKET_NAME = 'dbzzletpw';
export const CLOUDINARY_URL = `https://res.cloudinary.com/${CLOUDINARY_BUCKET_NAME}/image/upload/`;

export const RESOURCE = {
  ARROW: 'v1745813635/arrow_x0nsyq.png',
  CHECK: 'v1745813630/check_kpylel.png',
  X: 'v1745813794/x_1_z8ors7.png',
  REFRESH: 'v1743150107/refresh.png',
  PLANE: 'v1743150122/plane.png',
  CLOUD: 'v1743150128/cloud.png',
  LOADING: 'v1743150142/loading.png',
  TRAM: 'v1743150147/tram.png',
  TRAIN: 'v1743150152/train.png',
  WALK: 'v1743150157/walk.png',
  SHIP: 'v1743150164/ship.png',
  BUS: 'v1743150170/bus.png',
  CAR: 'v1743150175/car.png',
  FLAG: 'v1743150180/flag.png',
  CURSOR: 'v1743150185/cursor.avif',
  NEXT: 'v1743150189/next.png',
  KAKAO: 'v1743150194/kakao.png',
  GITHUB: 'v1743150199/github.png',
  EARTH: 'v1744014709/earth-dark_evevy1.jpg',
};

export const ICON_SIZES = { icon: 32, large: 48 };

export const ICON_RESOURCE = (key: keyof typeof RESOURCE) => CLOUDINARY_URL + RESOURCE[key];

export const ICON_RESOURCE_ICON = (key: keyof typeof RESOURCE, width = ICON_SIZES['icon']) =>
  CLOUDINARY_URL + `f_auto,q_auto:good,w_${width},dpr_auto/` + RESOURCE[key];
// f_auto : avif if supported, else backup
