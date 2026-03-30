import { DB_NAME, IP_TOKEN_DB_NAME } from 'constants/auth';
import { MAX_TOKEN } from 'constants/chat';
import { NextRequest, NextResponse } from 'next/server';
import firestoreService from '../firebase';
import getTripPlan, { SuccessResponse } from './getTripPlan';
import incrementedTokenId from './incrementedTokenId';
import { checkRateLimit } from './rateLimit';

/** IP 당 1분에 요청 3개로 제한*/
const RATE_LIMIT_CONFIG = {
  windowMs: 60 * 1000, // 1 min
  maxRequests: 3,
};

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');
  return forwarded?.split(',')[0]?.trim() || realIp || 'unknown';
}

export async function POST(req: NextRequest) {
  const clientIp = getClientIp(req);

  /** 어뷰징 방지 */
  const rateLimitResult = await checkRateLimit(clientIp, RATE_LIMIT_CONFIG);
  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      {
        error: 'Too many requests. Please try again later.',
        retryAfterMs: rateLimitResult.retryAfterMs,
      },
      {
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil((rateLimitResult.retryAfterMs || 0) / 1000)),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': String(rateLimitResult.resetTime),
        },
      }
    );
  }

  try {
    const body = await req.json();
    const { id, ip, ...args } = body;

    const isTestUser = !!ip;
    let currentTokens = 0;
    let isAdmin = false;

    if (isTestUser) {
      // 테스트 계정일 경우 :  IP 토큰 확인
      const ipTokenData = await firestoreService.getIpToken(IP_TOKEN_DB_NAME, ip);
      currentTokens = ipTokenData?.usedTokens || 0;
    } else if (id) {
      // OAuth 계정일 경우 : 유저기반 토큰 확인
      const userData = await firestoreService.getItem(DB_NAME, id);
      currentTokens = userData?.usedTokens || 0;
      isAdmin = userData?.isAdmin || false;
    }

    if (!isAdmin && currentTokens >= MAX_TOKEN) {
      return NextResponse.json({ error: 'Token limit exceeded. Please try again tomorrow.' }, { status: 403 });
    }

    const res = await getTripPlan({ ...args });

    if (res == null) {
      NextResponse.json({ message: 'Success', data: { msg: res } });
    }

    try {
      const increaseId = await incrementedTokenId(
        { ...args },
        id,
        res?.data as SuccessResponse['data'],
        new Date().toISOString(),
        ip // 테스트 계정일 경우 ip 제공
      );
      return NextResponse.json(
        { message: 'Success', data: { id: increaseId } },
        {
          headers: {
            'X-RateLimit-Remaining': String(rateLimitResult.remaining),
            'X-RateLimit-Reset': String(rateLimitResult.resetTime),
          },
        }
      );
    } catch (err) {
      return NextResponse.json({ error: `Error incrementing Token: ${err}` }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: `Something went wrong :${error}` }, { status: 500 });
  }
}
