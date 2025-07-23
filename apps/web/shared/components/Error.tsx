'use client';
import { ParticleBackground } from '@tripie-pyotato/design-system/@components';
import AccentedButton from '@tripie-pyotato/design-system/@components/AccentedButton';
import { Headings, Stack, Text } from '@tripie-pyotato/design-system/@core';

import ROUTE from 'constants/routes';
import { useRouter } from 'next/navigation';

const Error = ({
  code = 500,
  message = 'Oops, something went wrong.',
  redirectBtnText = 'bring me back home',
  redirectUrl = ROUTE.HOME.href,
}: {
  code?: number;
  message?: string;
  redirectBtnText?: string;
  redirectUrl?: string;
}) => {
  const router = useRouter();
  const handleRedirect = () => router.replace(redirectUrl);

  const errorNums = `${code}`.split('').map((val, index) => ({ id: `error-number-index-${index}`, num: val }));

  return (
    <ParticleBackground>
      <Stack gap="l" zIndex="default" margin="none" alignItems="center" justifyContent="center" direction="column">
        <Headings.H1>
          {errorNums.map(({ id, num }, index) =>
            index % 2 === 0 ? <Text.Accented key={id}>{num}</Text.Accented> : <span key={id}>{num}</span>
          )}
        </Headings.H1>

        <Text>{message}</Text>
        <AccentedButton onClick={handleRedirect}>{redirectBtnText}</AccentedButton>
      </Stack>
    </ParticleBackground>
  );
};

export default Error;
