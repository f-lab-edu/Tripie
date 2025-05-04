'use client';
import { Chip, Icon } from '@tripie-pyotato/design-system/@components';
import { Stack } from '@tripie-pyotato/design-system/@core';
import { classNames } from 'wrapper';
import Style from './shared/selected-list.module.scss';

import NextButton from 'app/home/_components/our-process/SelectedList/shared/NextAnimatedButton';
import { KOR_CITIES, SELECTED_CITY } from './constants/selected';

const cx = classNames.bind(Style);

const CitySelect = () => {
  return (
    <>
      <Stack
        display="grid"
        cols={2}
        gridRepeat={{
          'wrap-md': 4,
          'wrap-xl': 6,
        }}
        gap="l"
        applyMargin="bottom"
        margin="sm"
      >
        {KOR_CITIES.map((city: string) => (
          <Chip selected={SELECTED_CITY === city} className={cx('button-chip')} key={city}>
            {city}
          </Chip>
        ))}
      </Stack>
      <NextButton>
        "{SELECTED_CITY}"로 보기 <Icon />
      </NextButton>{' '}
    </>
  );
};

export default CitySelect;
