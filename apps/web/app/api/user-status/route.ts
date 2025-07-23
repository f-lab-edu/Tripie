import { DB_NAME } from 'constants/auth';
import { NextResponse } from 'next/server';
import firestoreService from '../firebase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get('id');

  if (id == null) {
    return NextResponse.json({ error: `Error retrieving user status: no id provided` }, { status: 500 });
  }
  const user = await firestoreService.getItem(DB_NAME, id);

  return NextResponse.json({ user });
}
