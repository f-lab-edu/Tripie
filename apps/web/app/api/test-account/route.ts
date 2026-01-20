import { USER_DB_NAME } from '@/constants/auth';
import { NextRequest, NextResponse } from 'next/server';
import firestoreService from '../firebase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { id, pwd, ip } = body;

    const user = await firestoreService.getTestUser(USER_DB_NAME, id, pwd, ip);

    // 없는 유저면 새로 추가
    if (!user) {
      const res = await firestoreService.addTestUser(USER_DB_NAME, body);
      return NextResponse.json({ data: { docId: res } }, { status: 200 });
    }

    return NextResponse.json({ message: 'Success', data: user, status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `Something went wrong :${error}` }, { status: 500 });
  }
}
