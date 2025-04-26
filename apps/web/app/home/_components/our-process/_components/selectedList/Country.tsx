'use client';
import { classNames } from 'wrapper';
import Style from './shared/selected-list.module.scss';

import { Chip, Icon } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@core';

import useCountries from 'hooks/query/useCountries';
import { Country } from 'models/Country';
import { useMemo, useState } from 'react';

import NextButton from 'app/home/_components/our-process/_components/selectedList/shared/NextAnimatedButton';

import { regionNameToLocal } from 'utils/lang';
import { SELECTED_CONTINENT_NAME, SELECTED_COUNTRY } from './constants/selected';

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
    <Container margin="none">
      <Container className={cx('wrap')} applyMargin="bottom">
        {countries.map((country: Country) => (
          <Chip
            selected={SELECTED_COUNTRY === country.name}
            className={cx('button-chip')}
            key={JSON.stringify(country.code)}
          >
            {country?.code != null && regionNameToLocal({ regionCode: country?.code })}
          </Chip>
        ))}
      </Container>

      <NextButton>
        "{regionNameToLocal({ regionCode: selected.code })}"로 보기 <Icon />
      </NextButton>
    </Container>
  );
};
export default CountrySelect;
