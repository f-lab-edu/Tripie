'use client';
import { Icon, Menu } from '@tripie-pyotato/design-system/@components';
import ROUTE, { LANDING_SECTION } from 'constants/routes';
import { usePathname, useRouter } from 'next/navigation';

import Link from 'next/link';

import AiTripButton from './AiTripButtons';
import AuthButton from './AuthButton';

const Nav = () => {
  const navigate = useRouter();
  const pathName = usePathname();

  return (
    <Menu>
      {/* <AnimatedText withBorder={false} className={cx('tripie-home-btn')} action={() => navigate.push(ROUTE.HOME.href)}>
        Tripie
      </AnimatedText> */}
      {/* <AnimatedText action={() => navigate.push(ROUTE.HOME.href)}>
        <Text.Accented gap="none" padding="none" margin="none" bold={true} size="h2">
          Tripie
        </Text.Accented>
      </AnimatedText> */}
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
  );
};

export default Nav;
