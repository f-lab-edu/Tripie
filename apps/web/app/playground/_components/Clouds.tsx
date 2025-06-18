'use client';
import { Icon } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@core';
import { classNames } from '@tripie-pyotato/design-system/@wrappers';

import Style from './trip-planner.module.scss';

const cx = classNames.bind(Style);

const Clouds = () => {
  return (
    <Container zIndex="hide" className={cx('cloud-wrap')}>
      {Array.from({ length: 13 }, (_, index) => (
        <Icon.Cloud
          key={index}
          index={index}
          // delay={0}
        />
      ))}
    </Container>
  );
};
export default Clouds;
