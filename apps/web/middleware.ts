import NextAuth from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import authConfig from './auth.config';

const { auth } = NextAuth(authConfig);

export default auth(async function middleware(request: NextRequest) {
  // Your custom middleware logic goes here
  // https://nextjs.org/docs/app/api-reference/functions/headers
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', request.nextUrl.pathname);

  const { pathname } = request.nextUrl;

  const session = await auth();

  // dev 일 경우에만 playground 경로 접근
  if (process.env.NODE_ENV === 'production' && pathname.startsWith('/playground')) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  // '/' 경로는 /home으로 redirect
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  // https://continentl.com/api/country-list 에서 국가 리스트 정보 가져오기 위한
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

  // '/trip-planner'은 로그인 유저가 아닌 경우 로그인 페이지로 이동시키기
  if (pathname.startsWith('/trip-planner') && !session) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.url));
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
});

export const config = {
  matcher: [
    '/',
    '/playground',
    '/api/:path*',
    '/trip-planner',
    // '/trip-planner/:path*' // /trip-planner 하위 모든 경로 X, 링크 공유 시에는 비로그인, 작성자 아니어도 모두 볼 수는 있도록
  ],
};
