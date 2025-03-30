import { backendApi } from 'utils/ky';

export async function addImage(imageUrl: string) {
  return await backendApi.post(`cloudinary`, { json: { imageUrl } }).json();
}

export default addImage;
