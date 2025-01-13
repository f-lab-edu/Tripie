'use client';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import Style from './all-info.module.scss';

import RESOURCE from 'constants/resources';
import AnimatedButton from 'shared/components/Button/AnimatedButton';
import Chip from 'shared/components/Chip/Chip';
import Icon from 'shared/components/Icon/Icon';
import { KOR_CITIES, SELECTED_CITY } from './constants/selected';

const cx = classNames.bind(Style);

const CitySelect = () => {
  return (
    <Container margin="none">
      <Container margin="none" className={cx('card-region-wrap')}>
        <Container className={cx('wrap')} applyMargin="bottom">
          {KOR_CITIES.map((city: string) => (
            <Chip selected={SELECTED_CITY === city} className={cx('chip')} key={city}>
              {city}
            </Chip>
          ))}
        </Container>
        <AnimatedButton.Next>
          "{SELECTED_CITY}"로 보기 <Icon src={RESOURCE.ARROW} />
        </AnimatedButton.Next>
      </Container>
    </Container>
  );
};

export default CitySelect;
