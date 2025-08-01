'use client';
import { Button } from '@tripie-pyotato/design-system/@components/Button';
import Stack from '@tripie-pyotato/design-system/@core/Stack';

import NextButton from 'app/home/_components/OurProcess/SelectedList/shared/NextAnimatedButton';
import TripieIcon from 'shared/components/TripieIcon/TripieIcon';
import { KOR_CITIES, SELECTED_CITY } from './constants/selected';

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
          <Button sizes="large" selected={SELECTED_CITY === city} key={city}>
            {city}
          </Button>
        ))}
      </Stack>
      <NextButton>
        "{SELECTED_CITY}"로 보기 <TripieIcon />
      </NextButton>{' '}
    </>
  );
};

export default CitySelect;
