'use client';
import { Button } from '@tripie-pyotato/design-system/@components/Button';
import Icon from '@tripie-pyotato/design-system/@components/Icon';
import Stack from '@tripie-pyotato/design-system/@core/Stack';
import { classNames } from '@tripie-pyotato/design-system/@wrappers';

import NextButton from 'app/home/_components/OurProcess/SelectedList/shared/NextAnimatedButton';
import { KOR_CITIES, SELECTED_CITY } from './constants/selected';

import Style from './shared/selected-list.module.scss';

const cx = classNames.bind(Style);

const CitySelect = () => {
  return (
    <>
      <Stack
        display="grid"
        cols={2}
        gridRepeat={{
          'wrap-md': 4,
        }}
        gap="l"
        applyMargin="bottom"
        margin="sm"
      >
        {KOR_CITIES.map((city: string) => (
          <Button sizes="large" selected={SELECTED_CITY === city} className={cx('button-chip')} key={city}>
            {city}
          </Button>
        ))}
      </Stack>
      <NextButton>
        "{SELECTED_CITY}"로 보기 <Icon />
      </NextButton>{' '}
    </>
  );
};

export default CitySelect;
