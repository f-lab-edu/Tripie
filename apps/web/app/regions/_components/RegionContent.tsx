'use client';

import { useSplash } from '@/hooks/useSplash';
import { AnimatedText, Icon, SplashScreen } from '@tripie-pyotato/design-system/@components';
import { Stack } from '@tripie-pyotato/design-system/@core';
import RegionList, { RegionArticleData } from './RegionList';

export default function RegionContent({ data }: Readonly<{ data: RegionArticleData['data'] }>) {
  const { splash, setSplash } = useSplash();

  return (
    <>
      {splash && (
        <SplashScreen loading={splash} variant="backdrop" lock={true}>
          <Stack
            direction="row"
            gap="default"
            justifyContent="center"
            applyPadding="right"
            padding="sm"
            alignItems="center"
          >
            <Icon.Loading />
            <AnimatedText.Jump>loading...</AnimatedText.Jump>
          </Stack>
        </SplashScreen>
      )}

      <RegionList data={data} setSplash={setSplash} />
    </>
  );
}
