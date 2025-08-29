'use client';
import { Button } from '@tripie-pyotato/design-system/@components/Button';
import Stack from '@tripie-pyotato/design-system/@core/Stack';

import NextButton from 'app/home/_components/OurProcess/SelectedList/shared/NextAnimatedButton';
import useCountries from 'hooks/query/useCountries';
import { Country } from 'models/Country';
import { useMemo, useState } from 'react';
import { regionNameToLocal } from 'utils/lang';
import { SELECTED_CONTINENT_NAME, SELECTED_COUNTRY } from './constants/selected';

import { AnimatedText } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@core';
import TripieIcon from 'shared/components/TripieIcon/TripieIcon';

const CountrySelect = () => {
  const { data, isLoading } = useCountries(SELECTED_CONTINENT_NAME.id);
  const [selected, setSelected] = useState<Country | null>(null);
  const countries = useMemo(() => {
    if (isLoading) {
      return [];
    }

    if (data != null) {
      const selected = data?.filter((item: Country) => item.name === SELECTED_COUNTRY)[0];
      setSelected(selected);
      return [...data.slice(17, 19), selected, ...data.slice(10, 14)].filter(v => v != null);
    }
    return [];
  }, [data, isLoading]);
  if (isLoading || selected?.code == null) {
    return (
      <>
        <Container
          alignItems="center"
          display="inline-flex"
          justifyContent="center"
          dimension={[{ apply: 'h', size: 5, unit: 'rem' }]}
        >
          <AnimatedText.Jump>loading...</AnimatedText.Jump>
        </Container>
        <NextButton>
          <AnimatedText.Jump>loading...</AnimatedText.Jump>
        </NextButton>
      </>
    );
  }

  return (
    <>
      <Stack
        display="grid"
        gap="l"
        applyMargin="bottom"
        margin="sm"
        cols={2}
        gridRepeat={{
          'wrap-md': 4,
        }}
      >
        {countries.map((country: Country) => (
          <Button selected={SELECTED_COUNTRY === country.name} key={JSON.stringify(country.code)} sizes="large">
            {country?.code != null && regionNameToLocal({ regionCode: country?.code })}
          </Button>
        ))}
      </Stack>

      <NextButton>
        "{regionNameToLocal({ regionCode: selected.code })}"로 보기 <TripieIcon />
      </NextButton>
    </>
  );
};
export default CountrySelect;
