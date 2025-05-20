import { NextRequest, NextResponse } from 'next/server';
import getTripPlan, { SuccessResponse } from './getTripPlan';
import incrementedTokenId from './incrementedTokenId';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, ...args } = body;

    const res = await getTripPlan({ ...args });

    if (res == null) {
      NextResponse.json({ message: 'Success', data: { msg: res } });
    }

    try {
      const increaseId = await incrementedTokenId(
        { ...args },
        id,
        res?.data as SuccessResponse['data'],
        new Date().toISOString()
      );
      return NextResponse.json({ message: 'Success', data: { id: increaseId } });
    } catch (err) {
      return NextResponse.json({ error: `Error incrementing Token: ${err}` }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
