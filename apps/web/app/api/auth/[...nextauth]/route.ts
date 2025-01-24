import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@tripie-pyotato/db';
import firestoreService from 'app/api/firebase';
import { DB_NAME, GITHUB_ID, GITHUB_SECRET, KAKAO_ID, KAKAO_SECRET, NEXT_AUTH_SECRET } from 'constants/auth';
import NextAuth, { DefaultSession, DefaultUser, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import GitHubProvider from 'next-auth/providers/github';
import KakaoProvider from 'next-auth/providers/kakao';

type CustomUser = DefaultUser & {
  id: string;
  usedGptToken: number;
};

interface CustomSession extends DefaultSession {
  user: CustomUser;
}
const options = {
  providers: [
    GitHubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
    KakaoProvider({
      clientId: KAKAO_ID,
      clientSecret: KAKAO_SECRET,
    }),
  ],
  allowDangerousEmailAccountLinking: true, //여러 계정, 한 이용자
  adapter: PrismaAdapter(prisma),
  secret: NEXT_AUTH_SECRET,
  callbacks: {
    async session({
      session,
      token,
      user,
    }: {
      session: Partial<Session & { token: JWT }>;
      token: JWT;
      user: DefaultUser;
    }) {
      session.user = user;
      session.token = token;

      firestoreService.getList(DB_NAME).then(userToken => {
        // 토큰이 db가 생성 x 일 경우 추가
        if (userToken?.length == 0) {
          firestoreService.addItem(DB_NAME, { id: user?.id, usedTokens: 0, isAdmin: false });
        } else {
          // user 가 있는 지 set으로 확인
          const userIdSet = new Set(userToken?.map((user: CustomUser) => user.id));
          if (!userIdSet.has(user?.id)) {
            firestoreService.addItem(DB_NAME, { id: user?.id, usedTokens: 0 });
          }
        }
      });
      return session as CustomSession;
    },
  },
  // 커스텀 인증 페이지들
  // pages: {
  // signIn: '/auth/sign-in',
  // signIn: '/auth/signin',
  // signOut: '/auth/signout',
  // error: '/auth/error',
  // verifyRequest: '/auth/verify-request',
  // newUser: '/auth/new-user'
  // },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
