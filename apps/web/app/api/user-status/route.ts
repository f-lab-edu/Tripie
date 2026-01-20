import { DB_NAME, IP_TOKEN_DB_NAME } from 'constants/auth';
import { NextResponse } from 'next/server';
import firestoreService from '../firebase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get('id');
  const ip = searchParams.get('ip');

  if (id == null) {
    return NextResponse.json({ error: `Error retrieving user status: no id provided` }, { status: 500 });
  }

  // For test users (credential login), check IP-based token usage
  if (ip) {
    const ipToken = await firestoreService.getIpToken(IP_TOKEN_DB_NAME, ip);

    if (ipToken) {
      return NextResponse.json({ user: { usedTokens: ipToken.usedTokens, isAdmin: false } });
    }

    // No IP token record yet, return 0 used tokens
    return NextResponse.json({ user: { usedTokens: 0, isAdmin: false } });
  }

  // For OAuth users, check individual token usage
  const user = await firestoreService.getItem(DB_NAME, id);

  return NextResponse.json({ user });
}
