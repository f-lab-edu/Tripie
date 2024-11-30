import API from 'constants/api-routes';
import { NextResponse } from 'next/server';

export async function GET(request: NextResponse) {
  const { searchParams } = new URL(request.url);
  const geotagId = searchParams.get('geotagId');
  const apiUrl = `${API.TRIPIE_SERVER_BASE + API.TRIPLE_ARTICLES}?geotagId=${geotagId}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      return NextResponse.json({ message: 'Failed to fetch data' }, { status: response.status });
    }

    const data = await response.json();

    // Return the data as JSON to the frontend
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    // Handle errors
    return NextResponse.json({ message: 'An error occurred', error }, { status: 500 });
  }
}
