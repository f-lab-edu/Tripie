import { CLOUDINARY_URL } from '@tripie-pyotato/design-system/shared';

//만약에 이미 이미지가 cloudinary asset에 있다면 해당 이미지 리턴
const cloudinaryMatch = (url: string) => {
  const match = url.match(/\/([^\/]+)\.[^/.]+$/);
  const fileName = match?.[1];
  return fileName != null ? CLOUDINARY_URL + fileName : null;
};

export default cloudinaryMatch;
