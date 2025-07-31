'use client';
import { AnimatedText, AppBar, Card, FlickTextButton, Toast } from '@tripie-pyotato/design-system/@components';

import { useRouter, useSearchParams } from 'next/navigation';

import { Stack } from '@tripie-pyotato/design-system/@core';
import Text from '@tripie-pyotato/design-system/@core/Text';

import { COLORS } from '@tripie-pyotato/design-system/shared';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { ComponentType, Dispatch, SetStateAction, useEffect, useState } from 'react';
import MenuWithNotification from './MenuWithNotification';

const NavBar = ({
  setTouched,
  setIsOpen,
  setNavigateUrl,
}: {
  setTouched: Dispatch<SetStateAction<boolean>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setNavigateUrl: Dispatch<SetStateAction<string>>;
}) => {
  const navigate = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    return () => {
      setTouched(false);
    };
  }, []);

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
        <Text.Accented
          noGapUnderText={true}
          zIndex="fixed"
          bold={true}
          gap="none"
          padding="none"
          margin="none"
          size="h4"
        >
          Tripie
        </Text.Accented>
      </AnimatedText>

      <MenuWithNotification />
    </AppBar>
  );
};

function withToast<P>(
  Component: ComponentType<
    P & {
      setTouched: Dispatch<SetStateAction<boolean>>;
      setIsOpen: Dispatch<SetStateAction<boolean>>;
      setNavigateUrl: Dispatch<SetStateAction<string>>;
    }
  >
): ComponentType<P> {
  return function WrappedWithToast(props: P) {
    const navigate = useRouter();
    const params = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);
    const [touched, setTouched] = useState(false);
    const [navigateUrl, setNavigateUrl] = useState('');

    const showToast = params.get('trip-plan.step') != null && touched;

    return (
      <>
        <Component {...props} setTouched={setTouched} setIsOpen={setIsOpen} setNavigateUrl={setNavigateUrl} />
        {showToast && (
          <Toast.WithControl
            toastColor={COLORS['40']}
            isOpen={isOpen}
            toggleOpen={setIsOpen}
            position="top-center"
            animate={isOpen ? 'animate' : 'initial'}
          >
            <Card margin="none" cloudinaryUrl={API.MEDIA_URL}>
              <Stack direction="column" margin="none" alignItems="center">
                <Text bold={true}>선택 사항이 초기화 됩니다!</Text>
                <Stack gap="l">
                  <FlickTextButton withBorder sizes={'large'} onClick={() => setIsOpen(false)}>
                    <Text bold>이어서</Text>
                  </FlickTextButton>

                  <FlickTextButton
                    withBorder
                    sizes={'large'}
                    onClick={() => {
                      setIsOpen(false);
                      navigate.push(navigateUrl);
                    }}
                  >
                    <Text bold>다음에</Text>
                  </FlickTextButton>
                </Stack>
              </Stack>
            </Card>
          </Toast.WithControl>
        )}
      </>
    );
  };
}

const NavWithToast = withToast(NavBar);
export default NavWithToast;
