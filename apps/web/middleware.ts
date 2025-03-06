import { NextRequest, NextResponse } from 'next/server';

// https://nextjs.org/docs/app/api-reference/functions/headers
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
