'use client';
import { Container, Headings, Stack, Text } from '@tripie-pyotato/design-system/@core';

import { ReactNode } from 'react';
import { classNames } from 'wrapper/classNames';

import { FlickTextButton } from '@tripie-pyotato/design-system/@components';
import ROUTE from 'constants/routes';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Style from './layout.module.scss';

const cx = classNames.bind(Style);

const Layout = ({
  navigateIcon,
  heading,
  decor = null,
  listItems,
  disabled = false,
  submitButtonChildren,
  clickAction,
  refreshIcon = null,
  children = null,
  progress,
}: {
  refreshIcon?: ReactNode;
  navigateIcon?: ReactNode;
  decor?: ReactNode;
  disabled?: boolean;
  heading: { text?: string; particle?: string; custom?: ReactNode };
  submitButtonChildren: ReactNode;
  listItems?: ReactNode;
  clickAction: () => void;
  children?: ReactNode;
  progress?: ReactNode;
}) => {
  const { status } = useSession();
  const navigate = useRouter();
  if (status === 'unauthenticated') {
    navigate.replace(ROUTE.SIGN_IN.href);
  }
  return (
    <Stack
      className={cx('total-wrap')}
      direction={'column'}
      margin="none"
      display="inline-flex"
      justifyContent="space-between"
    >
      <Stack applyMargin="top" margin="l" padding="l" applyPadding="top">
        {navigateIcon ?? null}
        <Headings.H2>
          {heading?.custom ?? (
            <>
              떠나고 싶은 <Text.Accented noGapUnderText={true}>{heading.text}</Text.Accented>
              {heading.particle}?
            </>
          )}
          &nbsp;{progress}
        </Headings.H2>
      </Stack>

      {decor != null ? <Container className={cx('decor-wrap')}>{decor}</Container> : null}
      {refreshIcon != null ? <Container applyMargin="top-bottom">{refreshIcon}</Container> : null}
      <Stack direction="column" alignItems="end" padding="l" applyPadding="bottom" margin="none">
        {children ?? null}
      </Stack>
      {listItems != null ? (
        <Container margin="none" className={cx('list', `list-wrap${decor == null ? '' : '-with-decor'}`)}>
          {listItems}
        </Container>
      ) : null}

      <Container applyMargin={'top-bottom'} padding="m" applyPadding="bottom">
        <FlickTextButton
          disabled={disabled}
          colorVariant={disabled ? 'disabled' : 'active'}
          withBorder={true}
          sizes="large"
          onClick={() => {
            if (disabled) {
              return;
            }
            clickAction();
          }}
        >
          {submitButtonChildren}
        </FlickTextButton>
      </Container>
    </Stack>
  );
};

export default Layout;
