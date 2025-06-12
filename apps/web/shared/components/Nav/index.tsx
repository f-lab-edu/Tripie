'use client';
import { AnimatedButton, AppBar, Card, Icon, Menu, Toast } from '@tripie-pyotato/design-system/@components';
import AnimatedText from '@tripie-pyotato/design-system/@components/AnimatedText';
import ROUTE, { LANDING_SECTION } from 'constants/routes';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import Link from 'next/link';

import { Stack, Text } from '@tripie-pyotato/design-system/@core';

import { COLORS } from '@tripie-pyotato/design-system/shared';
import { useEffect, useState } from 'react';
import AiTripButton from './AiTripButtons';
import AuthButton from './AuthButton';

const Nav = () => {
  const navigate = useRouter();
  const pathName = usePathname();
  const params = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [touched, setTouched] = useState(false);
  const [navigateUrl, setNavigateUrl] = useState('');

  useEffect(() => {
    return () => {
      setTouched(false);
    };
  }, []);

  return (
    <>
      <AppBar
        position="top"
        fixed={true}
        margin="none"
        alignItems={'center'}
        justifyContent="space-between"
        padding={'m'}
        applyPadding={'top-left-right'}
      >
        <AnimatedText
          action={() => {
            if (params.get('trip-plan.step') != null) {
              setTouched(true);
              setIsOpen(true);
              setNavigateUrl(ROUTE.HOME.href);
              return;
            }
            navigate.push(ROUTE.HOME.href);
          }}
        >
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

      {params.get('trip-plan.step') != null && touched ? (
        <Toast.WithControl
          toastColor={COLORS['40']}
          isOpen={isOpen}
          toggleOpen={setIsOpen}
          position={'top-center'}
          animate={isOpen ? 'animate' : 'initial'}
        >
          <Card margin="none">
            <Stack direction="column" margin="none" alignItems="center">
              <Text bold={true}>선택 사항이 초기화 됩니다!</Text>
              <Stack gap="l">
                <AnimatedButton withBorder={true} isFullSize={true} onClick={() => setIsOpen(false)}>
                  <Text bold={true}>이어서</Text>
                </AnimatedButton>
                <AnimatedButton
                  withBorder={true}
                  isFullSize={true}
                  onClick={() => {
                    setIsOpen(false);
                    navigate.push(navigateUrl);
                  }}
                >
                  <Text bold={true}>다음에</Text>
                </AnimatedButton>
              </Stack>
            </Stack>
          </Card>
        </Toast.WithControl>
      ) : null}
    </>
  );
};

export default Nav;
