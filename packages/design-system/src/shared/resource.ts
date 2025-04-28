export const PLACEHOLDER = 'https://placehold.co/600x600?text=NO IMAGE';
export const LOADING_IMG = 'https://placehold.co/600x600?text=LOADING';

const CLOUDINARY_BUCKET_NAME = 'dbzzletpw';
export const CLOUDINARY_URL = `https://res.cloudinary.com/${CLOUDINARY_BUCKET_NAME}/image/upload/`;

export const RESOURCE = {
  ARROW: 'v1743149708/arrow.avif',
  CHECK: 'v1743150067/check.avif',
  X: 'v1743150099/x.avif',
  REFRESH: 'v1745808760/refresh_iquptj.avif',
  PLANE: 'v1743150122/plane.png',
  CLOUD: 'v1745809300/rrshvmw0ekltcld1sirl_ymtcjt.avif',
  LOADING: 'v1745809300/wjao0eqj1ba5ihqg5cya_d8hwp7.avif',
  TRAM: 'v1745809301/zsttthqumjrtvkzwpbng_c2lucu.avif',
  TRAIN: 'v1745809299/asqn3oclevjny619qw2i_sj4hzm.avif',
  WALK: 'v1743150157/walk.png',
  SHIP: 'v1743150164/ship.png',
  BUS: 'v1743150170/bus.png',
  CAR: 'cvcmyoipmrcaxuboypit_btyq2m.avif',
  FLAG: 'v1745809300/t4vv6o53zujpj0uggf8d_c8k42d.avif',
  CURSOR: 'v1743150185/cursor.avif',
  NEXT: 'v1743150189/next.png',
  KAKAO: 'v1743150194/kakao.png',
  GITHUB: 'v1745809300/s0z4wuv7lo5zhhnvjcgl_ahaoil.avif',
  EARTH: 'v1745740431/earth-dark.avif',
};

export const ICON_RESOURCE = (key: keyof typeof RESOURCE) => CLOUDINARY_URL + RESOURCE[key];

export const ICON_RESOURCE_ICON = (key: keyof typeof RESOURCE, width: number) =>
  CLOUDINARY_URL + `f_auto,q_auto:good,w_${width},dpr_auto/` + RESOURCE[key];
