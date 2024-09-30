import { useQueryClient } from '@tanstack/react-query';
import getContinentlList from 'app/api/firebase/getContinentl';
import classNames from 'classnames/bind';
import useContinentl from 'hooks/useContinentl';
import { Country } from 'hooks/useCountries';
import { Dispatch, SetStateAction } from 'react';
import AnimatedButton from 'shared/components/Button/AnimatedButton';
import Chip from 'shared/components/Chip/Chip';
import List from 'shared/components/List/List';
import { regionNameToLocal } from 'utils/lang';
import Style from './country-list.module.scss';

interface Props {
  countries: any[];
  selectedCountry: string;
  setSelectedCountry: Dispatch<SetStateAction<string>>;
}

const cx = classNames.bind(Style);

export function CountryList({ countries, selectedCountry, setSelectedCountry }: Props) {
  const queryClient = useQueryClient();

  const prefetch = (country: string) => {
    queryClient.prefetchQuery({
      queryKey: useContinentl.queryKey(country),
      queryFn: () =>
        getContinentlList().then(countries => {
          if (country === 'all') {
            return countries;
          } else {
            return countries?.filter(place => place.id === country);
          }
        }),
      staleTime: 30000,
    });
  };

  return (
    <List.Grid className={cx('grid-wrap')}>
      {countries.map((country: Country) => (
        <Chip
          className={cx('chip-wrap')}
          selected={selectedCountry === country.name}
          key={country.id}
          onClick={() => {
            setSelectedCountry(country.name);
            prefetch(country.name);
          }}
        >
          <AnimatedButton className={cx('animated-text', 'chip')} withBorder={false} otherChild={country.name}>
            {country?.code != null && regionNameToLocal({ regionCode: country?.code })}
          </AnimatedButton>
        </Chip>
      ))}
    </List.Grid>
  );
}
