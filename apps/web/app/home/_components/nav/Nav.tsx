'use client';
import classNames from 'classnames/bind';
import Style from './nav.module.scss';

import { Icon, MenuToggle, NoStyleButton, Text } from '@tripie-pyotato/design-system';
import ROUTE, { LANDING_SECTION } from 'constants/routes';
import { useRouter } from 'next/navigation';

import Link from 'next/link';

import AuthButton from './AuthButton';

const cx = classNames.bind(Style);

const Nav = () => {
  const navigate = useRouter();

  return (
    <MenuToggle>
      {/* <AnimatedButton onClick={() => navigate.push(ROUTE.HOME.href)} className={cx('tripie-home-btn')}>
        Tripie
      </AnimatedButton> */}
      <NoStyleButton action={() => navigate.push(ROUTE.HOME.href)}>
        <Text.Animated withBorder={false} className={cx('tripie-home-btn')}>
          Tripie
        </Text.Animated>
      </NoStyleButton>
      <MenuToggle.List>
        {LANDING_SECTION.map(({ label, href }, index) => (
          <MenuToggle.Item key={href + index}>
            <Link href={href}>{label}</Link>
            {label === 'Contact' ? <Icon /> : null}
          </MenuToggle.Item>
        ))}
        <MenuToggle.Item>
          <Link href={ROUTE.REGIONS.href}>{ROUTE.REGIONS.label}</Link>
          <Icon />
        </MenuToggle.Item>
        <AuthButton />
        {process.env.NODE_ENV === 'development' ? (
          <MenuToggle.Item key={'dev'}>
            <Link href={ROUTE.PLAYGROUND.href}>{ROUTE.PLAYGROUND.label}</Link>
          </MenuToggle.Item>
        ) : null}
      </MenuToggle.List>
    </MenuToggle>
  );
};

export default Nav;
