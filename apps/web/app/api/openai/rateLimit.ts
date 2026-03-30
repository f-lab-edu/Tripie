import { RATE_LIMIT_DB_NAME } from 'constants/auth';
import firestoreService from '../firebase';

export type RateLimitConfig = {
  windowMs: number;
  maxRequests: number;
};

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  resetTime: number;
  retryAfterMs?: number;
};

export const DEFAULT_CONFIG: RateLimitConfig = {
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 3,
};

/**
 * Firestore 트랜잭션으로 rate limit 체크 + 카운트 증가를 원자적으로 처리.
 * 여러 인스턴스에서 공유되는 상태를 유지.
 */
export async function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = DEFAULT_CONFIG
): Promise<RateLimitResult> {
  return firestoreService.checkRateLimit(RATE_LIMIT_DB_NAME, identifier, config);
}
