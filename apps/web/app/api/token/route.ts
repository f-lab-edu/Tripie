import { DB_NAME } from 'constants/auth';
import { NextResponse } from 'next/server';
import firestoreService from '../firebase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const sub = searchParams.get('sub');

  if (!sub) {
    return NextResponse.json({ message: 'failed to provide user id', status: 400 });
  }

  await firestoreService.getList(DB_NAME).then(async userToken => {
    // 토큰이 db가 생성 x 일 경우 추가
    if (userToken?.length == 0) {
      await firestoreService.addItem(DB_NAME, { id: sub, usedTokens: 0, isAdmin: false });
      return NextResponse.json({ message: 'successfully added user token status' });
    } else {
      // user 가 있는 지 set으로 확인
      const userIdSet = new Set(userToken?.map(user => user.id));
      if (!userIdSet.has(sub)) {
        await firestoreService.addItem(DB_NAME, {
          id: sub,
          usedTokens: 0,
          isAdmin: false,
        });
        return NextResponse.json({ message: 'successfully added user token status' });
      }
    }
  });
  return NextResponse.json({ message: 'successfully got user token status' });
}
