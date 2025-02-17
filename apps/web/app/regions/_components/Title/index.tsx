'use client';

import { Container, Headings, Icon } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import { ReactNode } from 'react';
// import Icon from 'shared/components/Icon/Icon';
import Style from './title.module.scss';

const cx = classNames.bind(Style);

const Title = ({ children, withNavigation = true }: { children: ReactNode; withNavigation?: boolean }) => {
  return (
    <Container applyMargin="top" margin="l" className={cx('title-wrap')}>
      <Headings.H2>
        {withNavigation ? (
          // <Icon.Navigate src={RESOURCE.ARROW} />
          <Icon.Navigate />
        ) : null}{' '}
        {children}
      </Headings.H2>
    </Container>
  );
};

export default Title;
