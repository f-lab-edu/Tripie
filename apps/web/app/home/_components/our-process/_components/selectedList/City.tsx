'use client';
import { Chip, Container, Icon } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import Style from './shared/selected-list.module.scss';

import NextButton from 'app/home/_components/shared/NextAnimatedButton';
import { KOR_CITIES, SELECTED_CITY } from './constants/selected';

const cx = classNames.bind(Style);

const CitySelect = () => {
  return (
    <Container margin="none">
      <Container className={cx('wrap')} applyMargin="bottom">
        {KOR_CITIES.map((city: string) => (
          <Chip selected={SELECTED_CITY === city} className={cx('button-chip')} key={city}>
            {city}
          </Chip>
        ))}
      </Container>
      <NextButton>
        "{SELECTED_CITY}"로 보기 <Icon />
        {/* <Icon src={RESOURCE.ARROW} /> */}
      </NextButton>
    </Container>
  );
};

export default CitySelect;
