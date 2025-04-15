import { useQueryClient } from '@tanstack/react-query';
import { AnimatedButton, Chip, Container, List } from '@tripie-pyotato/design-system/@components';
import firestoreService from 'app/api/firebase';
import useContinentl from 'hooks/query/useContinentl';
import { Continentl } from 'models/Continentl';
import { Country } from 'models/Country';
import { Dispatch, SetStateAction } from 'react';
import { classNames } from 'wrapper';

import { regionNameToLocal } from 'utils/lang';
import Style from './country-list.module.scss';

interface Props {
  countries?: Country[];
  selectedCountry: string;
  setSelectedCountry: Dispatch<SetStateAction<string>>;
}

const cx = classNames.bind(Style);

export function CountryList({ countries, selectedCountry, setSelectedCountry }: Readonly<Props>) {
  const queryClient = useQueryClient();

  // 이전 단계 Continents에서 선택했던 대륙/지역에 속한 국가들 정보 가져오기
  const prefetch = (country: string) => {
    queryClient.prefetchQuery({
      queryKey: useContinentl.queryKey(country),
      queryFn: () =>
        firestoreService.getListWithIds('continentl').then(countries => {
          if (country === 'all') {
            return countries;
          } else {
            const filtered = countries?.filter((place: Continentl) => place.id === country);

            return filtered;
          }
        }),
    });
  };

  if (countries == null) {
    return null;
  }

  return (
    <Container margin="none" className={cx('list-wrap', 'scroll')}>
      <List.Grid>
        {countries.map((country: Country) => (
          <Chip
            onClick={() => {
              setSelectedCountry(country.name);
              prefetch(country.name);
            }}
            key={country.id}
            className={cx('chip-wrap')}
            selected={selectedCountry === country.name}
          >
            <AnimatedButton.Text className={cx('animated-text', 'chip')} withBorder={false} otherChild={country.name}>
              {country?.code != null && regionNameToLocal({ regionCode: country?.code })}
            </AnimatedButton.Text>
          </Chip>
        ))}
      </List.Grid>
    </Container>
  );
}
