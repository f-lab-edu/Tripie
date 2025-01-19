import { NextResponse } from 'next/server';

const ids = { attractions: 'attractionId', restaurant: 'restaurantId', article: 'articleId' };

export async function GET(request: NextResponse) {
  const { searchParams } = new URL(request.url);
  const regionId = searchParams.get('regionId');

  if (!regionId) {
    return NextResponse.json({ message: 'geotagId is required' }, { status: 400 });
  }

  const key = Object.keys(ids).filter(key => searchParams.get(key) != null)?.[0] as keyof typeof ids;

  if (key == null) {
    return NextResponse.json({ message: 'provide either attractionId/restaurantId/ articleId' }, { status: 400 });
  }

  const apiUrl = `https://triple.guide/content/regions/${regionId}/${key}/${ids[key]}`;

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
