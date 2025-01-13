import { NextResponse } from 'next/server';
/** 서버 시간,
 * 여행 일정 짤 경우, 달력이 현재 시간을 기준으로 업데이트 되도록 */
export async function GET() {
  const serverTime = new Date().toISOString();
  try {
    return NextResponse.json({ serverTime }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'An error occurred', e }, { status: 500 });
  }
}
