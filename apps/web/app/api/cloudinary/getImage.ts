import { backendApi } from 'utils/ky';

export async function getImage(publicId: string) {
  return await backendApi.get(`cloudinary/asset?id=${publicId}`).json();
}

export default getImage;
