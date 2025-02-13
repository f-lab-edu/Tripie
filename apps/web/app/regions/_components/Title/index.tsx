'use client';

import { Container, Headings } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import RESOURCE from 'constants/resources';
import { ReactNode } from 'react';
import Icon from 'shared/components/Icon/Icon';
import Style from './title.module.scss';

const cx = classNames.bind(Style);

const Title = ({ children, withNavigation = true }: { children: ReactNode; withNavigation?: boolean }) => {
  return (
    <Container applyMargin="top" margin="l" className={cx('title-wrap')}>
      {withNavigation ? <Icon.Navigate src={RESOURCE.ARROW} /> : null}
      <Headings.H2>{children}</Headings.H2>
    </Container>
  );
};

export default Title;
