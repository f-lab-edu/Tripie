export const PLACEHOLDER = 'https://placehold.co/600x600?text=NO IMAGE';
export const LOADING_IMG = 'https://placehold.co/600x600?text=LOADING';

export const ICON_URL = '/icons';
export const RESOURCE = {
  ARROW: '/arrow.png',
  CHECK: '/check.png',
  X: '/x.png',
  REFRESH: '/refresh.png',
  PLANE: '/plane.png',
  CLOUD: '/cloud.png',
  LOADING: '/loading.png',
  TRAM: '/tram.png',
  TRAIN: '/train.png',
  WALK: '/walk.png',
  SHIP: '/ship.png',
  BUS: '/bus.png',
  CAR: '/car.png',
  FLAG: '/flag.png',
  CURSOR: '/cursor.png',
  NEXT: '/next.png',
  KAKAO: '/kakao.png',
  GITHUB:'/github.png'
};

export const ICON_RESOURCE = (key: keyof typeof RESOURCE) => ICON_URL + RESOURCE[key];
