import { NextResponse } from 'next/server';

export async function GET(request: NextResponse) {
  const { searchParams } = new URL(request.url);
  const regionId = searchParams.get('regionId');
  // const restaurantId = searchParams.get('restaurantId');
  const attractionId = searchParams.get('attractionId');
  // const articleId = searchParams.get('articleId');

  if (!regionId) {
    return NextResponse.json({ message: 'geotagId is required' }, { status: 400 });
  }

  // const apiUrl = `https://triple.guide/content/regions/${regionId}/restaurants/${restaurantId}`;
  const apiUrl = `https://triple.guide/content/regions/${regionId}/attractions/${attractionId}`;
  // const apiUrl = `https://triple.guide/content/regions/${regionId}/articles/${articleId}`;

  try {
    const response = await fetch(apiUrl).then(v => v.text());

    if (!response) {
      return NextResponse.json({ message: 'Failed to fetch data' }, { status: 500 });
    }

    const data = response;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred', error }, { status: 500 });
  }
}
