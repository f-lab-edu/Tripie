'use client';

import { Container, Headings, Icon } from '@tripie-pyotato/design-system/@components';
import { classNames } from 'wrapper';

import { ReactNode } from 'react';

import Style from './title.module.scss';

const cx = classNames.bind(Style);

const Title = ({ children, withNavigation = true }: { children: ReactNode; withNavigation?: boolean }) => {
  return (
    <Container margin="none" className={cx('title-wrap')}>
      <Headings.H2>
        {withNavigation ? <Icon.Navigate /> : null} {children}
      </Headings.H2>
    </Container>
  );
};

export default Title;
