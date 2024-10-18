'use client';

import classNames from 'classnames/bind';
import ROUTES from 'constants/routes';
import { motion } from 'framer-motion';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Icon from 'shared/components/Icon/Icon';
import { MenuItem } from './MenuItem';
import Style from './navigation.module.scss';
import { MENU_VARIANTS } from './variants';

const cx = classNames.bind(Style);

export const Navigation = () => {
  const { status } = useSession();

  return (
    <motion.ul className={cx('navigation')} variants={MENU_VARIANTS.NAVIGATION}>
      {ROUTES.PAGE.LANDING.map(({ label, href }) => (
        <MenuItem key={href}>
          <Link href={href}>{label}</Link>
          {label === 'Contact' ? <Icon src={ROUTES.RESOURCE.ARROW.src} /> : null}
        </MenuItem>
      ))}

      {status === 'unauthenticated' ? (
        <MenuItem key={'unauthenticated'}>
          <Link href={'/api/auth/signin'}>Sign in</Link>
        </MenuItem>
      ) : status === 'authenticated' ? (
        <>
          <MenuItem key={'authenticated'}>
            <Link href={'/trip-planner'}>AI enhanced trip</Link> <Icon src={ROUTES.RESOURCE.ARROW.src} />
          </MenuItem>
          <MenuItem key={'authenticated'}>
            <div onClick={() => signOut()}>Sign out</div>
          </MenuItem>
        </>
      ) : (
        <></>
      )}
      {process.env.NODE_ENV === 'development' ? (
        <MenuItem key={'dev'}>
          <Link href={ROUTES.PAGE.PLAYGROUND.href}>{ROUTES.PAGE.PLAYGROUND.label}</Link>
        </MenuItem>
      ) : null}
      {/* <div className={cx('menu-item')}>
        <Switch current={mode === 'dark' ? 'off' : 'on'} text={`${mode}`} cycle={toggle} />
      </div> */}
    </motion.ul>
  );
};
