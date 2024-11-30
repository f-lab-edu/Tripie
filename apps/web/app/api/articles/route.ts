import API from 'constants/api-routes';
import { NextResponse } from 'next/server';

export async function GET(request: NextResponse) {
  const { searchParams } = new URL(request.url);
  const geotagId = searchParams.get('geotagId');

  if (!geotagId) {
    return NextResponse.json({ message: 'geotagId is required' }, { status: 400 });
  }

  const apiUrl = `${API.TRIPIE_SERVER_BASE}${API.BASE}/articles?geotagId=${geotagId}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      return NextResponse.json({ message: 'Failed to fetch data' }, { status: response.status });
    }

    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred', error }, { status: 500 });
  }
}
