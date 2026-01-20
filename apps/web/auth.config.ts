import API from 'constants/api-routes';
import { GITHUB_ID, GITHUB_SECRET, KAKAO_ID, KAKAO_SECRET, NEXT_AUTH_SECRET } from 'constants/auth';
import { User } from 'models/User';
import type { NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import Kakao from 'next-auth/providers/kakao';
import getClientIp from './app/helper/getClientIp';
import { MEDIA_URL } from './shared/image';

type Credentials = {
  username: string;
  password: string;
};

export const providers = [
  GitHub({
    clientId: GITHUB_ID,
    clientSecret: GITHUB_SECRET,
  }),
  Kakao({
    clientId: KAKAO_ID,
    clientSecret: KAKAO_SECRET,
  }),
  CredentialsProvider<Credentials>({
    name: 'credentials',
    async authorize(credentials: Credentials, req: Request) {
      const ip = getClientIp(req);
      const { username, password } = credentials;

      const res = await fetch(`${API.BASE_URL}/api/test-account`, {
        method: 'POST',
        body: JSON.stringify({
          id: username,
          pwd: password,
          ip,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      const user = await res.json();
      if (res.ok && user?.data) {
        return {
          id: user.data.docId,
          name: user.data.name,
          email: user.data.email ?? null,
          picture: user.data.picture ?? null,
          ip,
        };
      }

      return null;
    },
  }),
] as const;

const authConfig: NextAuthConfig = {
  providers,
  secret: NEXT_AUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: User & { user: User['session']['user'] }) {
      if (user?.id) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.picture = user.picture;
        if (user?.ip) {
          token.ip = user?.ip;
        }
        // chatgpt API token checker
        await fetch(`${API.BASE_URL}/api/token?sub=${user?.id}`).then(res => res.json());
      }

      return token;
    },
    async session({ session, token }: User) {
      const { picture, email, name, sub, ...others } = token;
      session.token = others;

      // 테스트 계정으로 로그인
      if (others?.ip) {
        await fetch(`${API.BASE_URL}/api/token?sub=${token.id}`).then(res => res.json());
        session.user = {
          id: token.id as string,
          name: token.name,
          email: token.email,
          picture: token.picture,
        };
      } else {
        await fetch(`${API.BASE_URL}/api/token?sub=${sub}`).then(res => res.json());
        if (picture) {
          const res = await fetch(`${API.BASE_URL}/api/profile-avatar?picture=${picture}`).then(res => res.json());

          session.user = {
            id: sub,
            name,
            email,
            picture: MEDIA_URL + 'q_auto,w_32,h_32/' + res?.res,
          };
        }
      }

      return {
        ...session,
      };
    },
  },
};

export default authConfig;
