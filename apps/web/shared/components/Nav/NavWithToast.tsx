'use client';
import { AppBar, FlickTextButton } from '@tripie-pyotato/design-system/@components';

import { useRouter, useSearchParams } from 'next/navigation';

import { Text } from '@tripie-pyotato/design-system/@core';
import ROUTE from 'constants/routes';
import { Dispatch, SetStateAction, useEffect } from 'react';
import MenuWithNotification from './MenuWithNotification';
import withToast from './withToast';

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
      <FlickTextButton
        stretched={false}
        onClick={() => {
          if (params.get('trip-plan.step') != null) {
            setTouched(true);
            setIsOpen(true);
            setNavigateUrl(ROUTE.HOME.href);
            return;
          }
          navigate.push(ROUTE.HOME.href);
        }}
        withBorder={false}
        style={{ padding: '0' }}
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
      </FlickTextButton>

      <MenuWithNotification />
    </AppBar>
  );
};

const NavWithToast = withToast(NavBar);
export default NavWithToast;
