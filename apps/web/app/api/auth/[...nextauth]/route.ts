import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@tripie-pyotato/db';
import addItem from 'app/api/firebase/add';
import listItem from 'app/api/firebase/getList';
import { GITHUB_ID, GITHUB_SECRET, KAKAO_ID, KAKAO_SECRET, NEXT_AUTH_SECRET } from 'constants/auth';
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
      const dbName = 'user-token';
      listItem(dbName).then(userToken => {
        if (userToken?.length == 0) {
          addItem({ id: user?.id, usedTokens: 0, isAdmin: false }, dbName);
        } else {
          const userIdSet = new Set(userToken?.map(user => user.id));
          if (!userIdSet.has(user?.id)) {
            addItem({ id: user?.id, usedTokens: 0 }, dbName);
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
