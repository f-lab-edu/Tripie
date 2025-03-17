'use client';

import ROUTE from 'constants/routes';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

import { MenuToggle, NoStyleButton } from '@tripie-pyotato/design-system';

// 로그인 로그아웃 버튼
const AuthButton = () => {
  const { status, data } = useSession();

  return status === 'unauthenticated' ? (
    <MenuToggle.Item key={`unauthenticated`}>
      <Link href={ROUTE.SIGN_IN.href}>{ROUTE.SIGN_IN.label}</Link>
    </MenuToggle.Item>
  ) : (
    <MenuToggle.Item key={`${data?.user?.name}-authenticated-signout`}>
      <NoStyleButton action={() => signOut()}>Sign out</NoStyleButton>
    </MenuToggle.Item>
  );
};
export default AuthButton;
