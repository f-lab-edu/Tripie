import API from 'constants/api-routes';
import { GITHUB_ID, GITHUB_SECRET, KAKAO_ID, KAKAO_SECRET, NEXT_AUTH_SECRET } from 'constants/auth';
import { User } from 'models/User';
import type { NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Kakao from 'next-auth/providers/kakao';
import { MEDIA_URL } from 'shared/image';

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

      await fetch(`${API.BASE_URL}/api/token?sub=${sub}`).then(res => res.json());
      const res = await fetch(`${API.BASE_URL}/api/profile-avatar?picture=${picture}`).then(res => res.json());

      session.user = {
        id: sub,
        name,
        email,
        picture: MEDIA_URL + 'q_auto,w_32,h_32/' + res?.res,
      };

      return {
        ...session,
      };
    },
  },
} satisfies NextAuthConfig;
