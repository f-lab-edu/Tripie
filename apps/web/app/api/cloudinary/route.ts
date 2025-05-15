import { NextRequest, NextResponse } from 'next/server';
import addImage from './addImage';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse JSON body
    const { imageUrl } = body;
    const res = await addImage(imageUrl);

    // Do something with the data (e.g., save to DB, call external API)

    return NextResponse.json({ message: 'Success', data: { msg: res } });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
