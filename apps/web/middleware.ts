import { NextRequest, NextResponse } from 'next/server';

// https://nextjs.org/docs/app/api-reference/functions/headers
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', request.nextUrl.pathname);

  const { pathname } = request.nextUrl;

  // dev 일 경우에만 playground 경로 접근
  if (process.env.NODE_ENV === 'production' && pathname.startsWith('/playground')) {
    return NextResponse.redirect('/home');
  }

  // '/' 경로는 /home으로 redirect
  if (pathname === '/') {
    return NextResponse.redirect('/home');
  }

  // Redirect specific API routes dynamically
  if (pathname.startsWith('/api/continentl/country-list')) {
    return NextResponse.redirect('https://continentl.com/api/country-list');
  }

  // aws 위치 검색 : 검색어로 찾기
  if (pathname.startsWith('/api/aws/text')) {
    return NextResponse.redirect(
      'https://places.geo.ap-northeast-1.amazonaws.com/places/v0/indexes/explore.place.Esri/search/text'
    );
  }

  // 유사 검색어로 찾은 placeId로 위치 검색
  // https://docs.aws.amazon.com/location/latest/APIReference/API_GetPlace.html
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/location/command/GetPlaceCommand/
  if (pathname.startsWith('/api/place')) {
    return NextResponse.redirect('https://tripie-server.vercel.app/api/trip-advisor');
  }

  // 검색어 매칭 없을 경우: 유사 검색어로 찾기
  if (pathname.startsWith('/api/aws/suggested-places')) {
    return NextResponse.redirect(
      'https://places.geo.ap-northeast-1.amazonaws.com/places/v0/indexes/explore.place.Esri/search/suggestions'
    );
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Apply middleware only to API routes
export const config = {
  matcher: ['/api/:path*'], // Runs middleware for all `/api/*` requests
};
