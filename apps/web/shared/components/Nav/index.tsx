'use client';
import { AnimatedText, AppBar, Icon, Menu } from '@tripie-pyotato/design-system/@components';
import ROUTE, { LANDING_SECTION } from 'constants/routes';
import { usePathname, useRouter } from 'next/navigation';

import Link from 'next/link';

import { Text } from '@tripie-pyotato/design-system/@core';
import AiTripButton from './AiTripButtons';
import AuthButton from './AuthButton';

const Nav = () => {
  const navigate = useRouter();
  const pathName = usePathname();

  return (
    <AppBar
      position="top"
      fixed={true}
      margin="none"
      alignItems={'center'}
      justifyContent="space-between"
      padding={'m'}
      applyPadding={'top-left-right'}
    >
      <AnimatedText action={() => navigate.push(ROUTE.HOME.href)}>
        <Text.Accented bold={true} gap="none" padding="none" margin="none" size="h4">
          Tripie
        </Text.Accented>
      </AnimatedText>
      <Menu>
        <Menu.List>
          {LANDING_SECTION.map(({ label, href }, index) => (
            <Menu.Item key={href + index}>
              <Link href={href}>{label}</Link>
              {label === 'Contact' ? <Icon /> : null}
            </Menu.Item>
          ))}
          <Menu.Item>
            <Link href={ROUTE.REGIONS.href}>{ROUTE.REGIONS.label}</Link>
            <Icon />
          </Menu.Item>

          {/** 로그인 페이지에 있을 경우 버튼 표시 X */}
          {pathName === ROUTE.SIGN_IN.href ? null : (
            <>
              <AiTripButton />
              <AuthButton />
            </>
          )}

          {process.env.NODE_ENV === 'development' ? (
            <Menu.Item key={'dev'}>
              <Link href={ROUTE.PLAYGROUND.href}>{ROUTE.PLAYGROUND.label}</Link>
            </Menu.Item>
          ) : null}
        </Menu.List>
      </Menu>
    </AppBar>
  );
};

export default Nav;
