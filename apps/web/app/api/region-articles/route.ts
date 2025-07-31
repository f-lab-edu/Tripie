import { NextResponse } from 'next/server';
import firestoreService from '../firebase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const regionId = searchParams.get('regionId');

  const res = await firestoreService.getItem('region-articles2', regionId as string);
  console.log(res);
  if (!regionId) {
    return NextResponse.json({ message: 'regionId is required' }, { status: 400 });
  }

  return NextResponse.json(res);
}
