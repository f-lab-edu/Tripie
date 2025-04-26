'use client';
import { Chip, ParticleBackground } from '@tripie-pyotato/design-system/@components';
import { Container, Headings, Text } from '@tripie-pyotato/design-system/@core';
import ROUTE from 'constants/routes';
import { useRouter } from 'next/navigation';
import { classNames } from 'wrapper';
import Style from './error.module.scss';

const cx = classNames.bind(Style);

const errors = { code: 500, msg: 'Oops, something went wrong.' } as const;

export default function SeverError() {
  const router = useRouter();
  const handleClickHome = () => router.replace(ROUTE.HOME.href);

  const errorNums = `${errors.code}`.split('').map((val, index) => ({ id: `error-number-index-${index}`, num: val }));

  return (
    <ParticleBackground>
      <Container className={cx('center')} margin="none">
        <div>
          <Container className={cx('heading')} margin="none">
            <Headings.H1>
              {errorNums.map(({ id, num }, index) =>
                index % 2 === 0 ? <Text.Accented key={id}>{num}</Text.Accented> : <span key={id}>{num}</span>
              )}
            </Headings.H1>
          </Container>
        </div>

        <Container className={cx('button-wrap')} margin="none">
          {errors.msg}
          <Container align="center" margin="none" justifyContent="center" padding="l" applyPadding="top">
            <Chip.Accented onClick={handleClickHome}>bring me back home</Chip.Accented>
          </Container>
        </Container>
      </Container>
    </ParticleBackground>
  );
}
