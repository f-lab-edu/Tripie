import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { DefaultSession, DefaultUser, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import GitHubProvider from 'next-auth/providers/github';
import KakaoProvider from 'next-auth/providers/kakao';
import prisma from '../../../../../../lib/prisma';

const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
  ],
  allowDangerousEmailAccountLinking: true, //여러 계정, 한 이용자
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
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
      return session as Session | DefaultSession;
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
