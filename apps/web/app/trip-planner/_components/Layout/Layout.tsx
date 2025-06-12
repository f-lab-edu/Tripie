import { Container, Headings, Stack } from '@tripie-pyotato/design-system/@core';
import { classNames } from 'wrapper';

import { ReactNode } from 'react';

import { FlickTextButton } from '@tripie-pyotato/design-system/@components';
import Style from './preference.module.scss';

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
}: {
  refreshIcon?: ReactNode;
  navigateIcon?: ReactNode;
  decor?: ReactNode;
  disabled?: boolean;
  heading: ReactNode;
  submitButtonChildren: ReactNode;
  listItems?: ReactNode;
  clickAction: () => void;
  children?: ReactNode;
}) => {
  return (
    <Stack className={cx('total-wrap')} direction={'column'} margin="none">
      <Stack applyMargin="top" margin="l" padding="l" applyPadding="top">
        {navigateIcon ?? null}
        <Headings.H2>{heading}</Headings.H2>
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
      <Container alignItems="end" padding="l" applyPadding="bottom" margin="none" className={cx('btn-wrap')}>
        <Container applyMargin={'top'}>
          <FlickTextButton
            disabled={disabled}
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
      </Container>
    </Stack>
  );
};

export default Layout;
