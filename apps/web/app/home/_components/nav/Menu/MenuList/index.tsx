'use client';

import classNames from 'classnames/bind';

import ROUTE, { LANDING_SECTION } from 'constants/routes';
import { motion } from 'framer-motion';
import useChatToken from 'hooks/useChatToken';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

import { Icon, NoStyleButton } from '@tripie-pyotato/design-system';

import { MenuItem } from '../MenuItem';
import Style from './menu-list.module.scss';
import { NAVIGATION_VARIANT } from './variants';

const cx = classNames.bind(Style);

const AuthButton = () => {
  const { status, data } = useSession();
  const { isEligible } = useChatToken();
  if (status === 'unauthenticated') {
    return (
      <MenuItem key={`unauthenticated`}>
        <Link href={ROUTE.SIGN_IN.href}>{ROUTE.SIGN_IN.label}</Link>
      </MenuItem>
    );
  }
  return (
    <>
      <MenuItem key={`${data?.user?.name}-authenticated`}>
        <Link href={`/trip-planner/${isEligible ? '' : 'not-enough-tokens'}`}>AI 추천 맞춤일정</Link> <Icon />
      </MenuItem>
      <NoStyleButton action={() => signOut()}>
        <MenuItem key={`${data?.user?.name}-authenticated-signout`}>Sign out</MenuItem>
      </NoStyleButton>
    </>
  );
};

export const Navigation = () => {
  return (
    <motion.ul className={cx('navigation')} variants={NAVIGATION_VARIANT}>
      {LANDING_SECTION.map(({ label, href }, index) => (
        <MenuItem key={href + index}>
          <Link href={href}>{label}</Link>
          {label === 'Contact' ? (
            // <Icon src={RESOURCE.ARROW} />
            <Icon />
          ) : null}
        </MenuItem>
      ))}
      <MenuItem>
        <Link href={ROUTE.REGIONS.href}>{ROUTE.REGIONS.label}</Link>

        <Icon />
      </MenuItem>
      <AuthButton />
      {process.env.NODE_ENV === 'development' ? (
        <MenuItem key={'dev'}>
          <Link href={ROUTE.PLAYGROUND.href}>{ROUTE.PLAYGROUND.label}</Link>
        </MenuItem>
      ) : null}
      {/* <div className={cx('menu-item')}>
        <Switch current={mode === 'dark' ? 'off' : 'on'} text={`${mode}`} cycle={toggle} />
      </div> */}
    </motion.ul>
  );
};
