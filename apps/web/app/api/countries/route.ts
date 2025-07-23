import { NextResponse } from 'next/server';
import firestoreService from '../firebase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const continent = searchParams.get('continent');

  const res = await firestoreService.getList('countries');

  if (!continent) {
    return NextResponse.json({ message: 'continent is required' }, { status: 400 });
  }

  if (continent === 'all') {
    return NextResponse.json(res, { status: 200 });
  }

  const filtered = res?.filter(country => country?.continent.includes(continent));
  return NextResponse.json(filtered, { status: 200 });
}
