'use client';

import ROUTE from 'constants/routes';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

import { Menu, UnStyledButton } from '@tripie-pyotato/design-system/@components';

// 로그인 로그아웃 버튼
const AuthButton = () => {
  const { status, data } = useSession();

  return status === 'unauthenticated' ? (
    <Menu.Item key={`unauthenticated`}>
      <Link href={ROUTE.SIGN_IN.href}>{ROUTE.SIGN_IN.label}</Link>
    </Menu.Item>
  ) : (
    <Menu.Item key={`${data?.user?.name}-authenticated-signout`}>
      <UnStyledButton action={() => signOut()}>Sign out</UnStyledButton>
    </Menu.Item>
  );
};
export default AuthButton;
