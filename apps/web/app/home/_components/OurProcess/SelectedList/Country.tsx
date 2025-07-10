'use client';
import { Button } from '@tripie-pyotato/design-system/@components/Button';
import Icon from '@tripie-pyotato/design-system/@components/Icon';
import Stack from '@tripie-pyotato/design-system/@core/Stack';
// import { classNames } from '@tripie-pyotato/design-system/@wrappers';
import { classNames } from '../../../../../wrapper/classNames';

import NextButton from 'app/home/_components/OurProcess/SelectedList/shared/NextAnimatedButton';
import useCountries from 'hooks/query/useCountries';
import { Country } from 'models/Country';
import { useMemo, useState } from 'react';
import { regionNameToLocal } from 'utils/lang';
import { SELECTED_CONTINENT_NAME, SELECTED_COUNTRY } from './constants/selected';

import Style from './shared/selected-list.module.scss';

const cx = classNames.bind(Style);

const CountrySelect = () => {
  const { data, isLoading } = useCountries(SELECTED_CONTINENT_NAME.id);
  const [selected, setSelected] = useState<Country | null>(null);
  const countries = useMemo(() => {
    if (isLoading) {
      return [];
    }
    if (data != null) {
      const selected = data.filter((item: Country) => item.name === SELECTED_COUNTRY)[0];
      setSelected(selected);
      return [...data.slice(17, 19), selected, ...data.slice(10, 14)].filter(v => v != null);
    }
    return [];
  }, [data, isLoading]);

  return isLoading || selected?.code == null ? (
    <></>
  ) : (
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
          <Button
            selected={SELECTED_COUNTRY === country.name}
            className={cx('button-chip')}
            key={JSON.stringify(country.code)}
            sizes="large"
          >
            {country?.code != null && regionNameToLocal({ regionCode: country?.code })}
          </Button>
        ))}
      </Stack>
      <NextButton>
        "{regionNameToLocal({ regionCode: selected.code })}"로 보기 <Icon />
      </NextButton>
    </>
  );
};
export default CountrySelect;
