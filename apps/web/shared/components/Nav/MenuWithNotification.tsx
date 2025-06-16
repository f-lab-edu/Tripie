'use client';
import { Icon, Menu } from '@tripie-pyotato/design-system/@components';
import Notification from '@tripie-pyotato/design-system/@components/Notification';
import ROUTE, { LANDING_SECTION } from 'constants/routes';
import { usePathname } from 'next/navigation';

import Link from 'next/link';

import useChatToken from 'hooks/useChatToken';
import { ComponentType, useState } from 'react';
import AiTripButton from './AiTripButtons';
import AuthButton from './AuthButton';

function withNotification<P extends {}>(Component: ComponentType<P>): ComponentType<P> {
  return function WrappedWithNotification(props: P) {
    const { isEligible } = useChatToken();
    if (isEligible) {
      return (
        <Notification>
          <Component {...props} />
        </Notification>
      );
    }

    return <Component {...props} />;
  };
}

const MenuBar = () => {
  const pathName = usePathname();
  const [toolTipIsOpen, setToolTipIsOpen] = useState(false);
  return (
    <Menu onToggleAfter={() => setToolTipIsOpen(prev => !prev)}>
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
            <AiTripButton isOpen={toolTipIsOpen} />
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

const MenuWithNotification = withNotification(MenuBar);

export default MenuWithNotification;
