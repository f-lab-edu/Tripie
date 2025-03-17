'use client';
import classNames from 'wrapper';
import Style from './nav.module.scss';

import { Icon, MenuToggle, NoStyleButton, Text } from '@tripie-pyotato/design-system';
import ROUTE, { LANDING_SECTION } from 'constants/routes';
import { usePathname, useRouter } from 'next/navigation';

import Link from 'next/link';

import AiTripButton from './AiTripButtons';
import AuthButton from './AuthButton';

const cx = classNames.bind(Style);

const Nav = () => {
  const navigate = useRouter();
  const pathName = usePathname();

  return (
    <MenuToggle>
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

        {/** 로그인 페이지에 있을 경우 버튼 표시 X */}
        {pathName === ROUTE.SIGN_IN.href ? null : (
          <>
            <AiTripButton />
            <AuthButton />
          </>
        )}

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
