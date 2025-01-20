'use client';

import classNames from 'classnames/bind';
import RESOURCE from 'constants/resources';
import ROUTE from 'constants/routes';
import { motion } from 'framer-motion';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Icon from 'shared/components/Icon/Icon';
import { MenuItem } from './MenuItem';
import Style from './navigation.module.scss';
import { MENU_VARIANTS } from './variants';

const cx = classNames.bind(Style);

const AuthButton = () => {
  const { status, data } = useSession();
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
        <Link href={'/trip-planner'}>AI enhanced trip</Link> <Icon src={RESOURCE.ARROW} />
      </MenuItem>
      <MenuItem key={`${data?.user?.name}-authenticated-signout`}>
        <div onClick={() => signOut()}>Sign out</div>
      </MenuItem>
    </>
  );
};

export const Navigation = () => {
  return (
    <motion.ul className={cx('navigation')} variants={MENU_VARIANTS.NAVIGATION}>
      {ROUTE.LANDING.map(({ label, href }, index) => (
        <MenuItem key={href + index}>
          <Link href={href}>{label}</Link>
          {label === 'Contact' ? <Icon src={RESOURCE.ARROW} /> : null}
        </MenuItem>
      ))}
      <MenuItem>
        <Link href={ROUTE.REGIONS.href}>{ROUTE.REGIONS.label}</Link>
        <Icon src={RESOURCE.ARROW} />
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
