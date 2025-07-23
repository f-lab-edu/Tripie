import API from 'constants/api-routes';
import { GITHUB_ID, GITHUB_SECRET, KAKAO_ID, KAKAO_SECRET, NEXT_AUTH_SECRET } from 'constants/auth';
// import { GITHUB_ID, GITHUB_SECRET, KAKAO_ID, KAKAO_SECRET, NEXT_AUTH_SECRET } from 'constants/auth';
import { User } from 'models/User';
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
    async session({ session, token }: User) {
      const { picture, email, name, sub, ...others } = token;
      session.token = others;
      session.user = { id: sub, name, email, picture };

      await fetch(`${API.BASE_URL}/api/token?sub=${sub}`).then(res => res.json());

      return session;
    },
  },
} satisfies NextAuthConfig;
