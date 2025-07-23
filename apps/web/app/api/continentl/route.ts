import { Continentl } from 'models/Continentl';
import { NextResponse } from 'next/server';
import firestoreService from '../firebase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country');

  const res = await firestoreService.getListWithIds('continentl');

  if (!country) {
    return NextResponse.json({ message: 'continent is required' }, { status: 400 });
  }

  if (country === 'all') {
    return NextResponse.json(res, { status: 200 });
  }

  const filtered = res?.filter((place: Continentl) => place?.id === country);
  // const filtered = res?.filter((place: Continentl) => place?.name === decodeURIComponent(country));
  return NextResponse.json(filtered, { status: 200 });
}
