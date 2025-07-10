export const CLOUDINARY_BUCKET_NAME = 'dbzzletpw';

export const CLOUDINARY_URL = (bucketName = CLOUDINARY_BUCKET_NAME) =>
  `https://res.cloudinary.com/${bucketName}/image/upload/`;

export const defaultBlurSize = CLOUDINARY_URL() + 'f_auto,e_blur:2000,q_1,c_limit,f_auto,h_2048,w_2048/';
