import { NextResponse } from 'next/server';
import addImage from '../cloudinary/addImage';
import getImage from '../cloudinary/getImage';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const picture = searchParams.get('picture');

  if (picture != null) {
    const match = picture.match(/\/([^\/]+)\.[^\/.]+$/);
    const imageName = match?.[1];
    if (imageName != null) {
      const image = await getImage(imageName);
      if (image == null) {
        const res = await addImage(picture);
        return NextResponse.json({ message: 'successfully added user profile image', res });
      }
      return NextResponse.json({ message: 'successfully retrieved user profile image', res: imageName });
    }
  }

  return NextResponse.json({ message: 'successfully got user token status', res: picture });
}
