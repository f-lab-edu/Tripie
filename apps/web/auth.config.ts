import firestoreService from 'app/api/firebase';
import { CustomUser } from 'app/api/gpt/route';
import { DB_NAME, GITHUB_ID, GITHUB_SECRET, KAKAO_ID, KAKAO_SECRET, NEXT_AUTH_SECRET } from 'constants/auth';
import type { NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Kakao from 'next-auth/providers/kakao';

export default {
  providers: [
    GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
    Kakao({
      clientId: KAKAO_ID,
      clientSecret: KAKAO_SECRET,
    }),
  ],
  secret: NEXT_AUTH_SECRET,
  callbacks: {
    async session({ session, token }: CustomUser) {
      const { picture, email, name, sub, ...others } = token;
      session.token = others;
      session.user = { id: sub, name, email, picture };

      await firestoreService.getList(DB_NAME).then(async userToken => {
        // 토큰이 db가 생성 x 일 경우 추가
        if (userToken?.length == 0) {
          await firestoreService.addItem(DB_NAME, { id: sub, usedTokens: 0, isAdmin: false });
        } else {
          // user 가 있는 지 set으로 확인
          const userIdSet = new Set(userToken?.map((user: CustomUser) => user.id));
          if (!userIdSet.has(sub)) {
            await firestoreService.addItem(DB_NAME, { id: sub, usedTokens: 0 });
          }
        }
      });
      return session;
    },
  },
} satisfies NextAuthConfig;
