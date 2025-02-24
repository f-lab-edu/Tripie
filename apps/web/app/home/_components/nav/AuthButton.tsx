'use client';

import ROUTE from 'constants/routes';
import useChatToken from 'hooks/useChatToken';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

import { Icon, MenuToggle, NoStyleButton } from '@tripie-pyotato/design-system';
import API from 'constants/api-routes';
import { handleTabAction } from 'utils/new-tab';

const AuthButton = () => {
  const { status, data } = useSession();
  const { isEligible } = useChatToken();

  if (status === 'unauthenticated') {
    return (
      <MenuToggle.Item key={`unauthenticated`}>
        <Link href={ROUTE.SIGN_IN.href}>{ROUTE.SIGN_IN.label}</Link>
      </MenuToggle.Item>
    );
  }
  return (
    <>
      <MenuToggle.Item key={`${data?.user?.name}-authenticated`}>
        {!isEligible ? (
          <Link href={`${API.BASE_URL + ROUTE.TRIP_PLANNER.href}/not-enough-tokens`}>AI 추천 맞춤일정</Link>
        ) : (
          <NoStyleButton action={() => handleTabAction({ url: API.BASE_URL + ROUTE.TRIP_PLANNER.href })}>
            AI 추천 맞춤일정
          </NoStyleButton>
        )}
        <Icon />
      </MenuToggle.Item>
      <NoStyleButton action={() => signOut()}>
        <MenuToggle.Item key={`${data?.user?.name}-authenticated-signout`}>Sign out</MenuToggle.Item>
      </NoStyleButton>
    </>
  );
};
export default AuthButton;
