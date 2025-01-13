import { NextRequest } from 'next/server';

// https://nextjs.org/docs/app/api-reference/functions/next-request#nexturl
export async function GET(req: NextRequest) {
  try {
    const place = req.nextUrl.searchParams.get('query') as string;
  } catch (e) {
    console.log(e);
    return e;
  }
}
