import { NextRequest, NextResponse } from 'next/server';
import { backendApi } from 'utils/ky';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse JSON body
    const { duration, country, companion, preference, selectedCities } = body;

    const res = await backendApi
      .post('openai', { json: { duration, country, companion, preference, selectedCities } })
      .json();

    return NextResponse.json({ message: 'Success', data: res });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
