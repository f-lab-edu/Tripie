import NextAuth from 'next-auth';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@tripie-pyotato/db';

import authConfig from './auth.config';

export const providerMap = authConfig.providers
  .map(provider => {
    if (typeof provider === 'function') {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  })
  .filter(provider => provider.id !== 'credentials');

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/sign-in',
  },
  ...authConfig,
});
