import { useQueryClient } from '@tanstack/react-query';
import { Container } from '@tripie-pyotato/design-system';
import listItem from 'app/api/firebase/getList';
import classNames from 'classnames/bind';
import { CONTINENTS } from 'constants/continents';
import useCountries, { ContinentIds, ContinentKeys } from 'hooks/useCountries';
import { Dispatch, SetStateAction } from 'react';
import Chip from 'shared/components/Chip/Chip';
import Style from './continent-list.module.scss';

const cx = classNames.bind(Style);

interface Props {
  selectedContinent: ContinentKeys;
  setSelectedContinent: Dispatch<SetStateAction<ContinentKeys>>;
}

export function ContinentList({ selectedContinent, setSelectedContinent }: Props) {
  const queryClient = useQueryClient();

  const prefetch = (continent: ContinentIds) => {
    queryClient.prefetchQuery({
      queryKey: useCountries.queryKey(continent),
      queryFn: () =>
        listItem('countries').then(countryList => {
          if (continent === 'all') {
            return countryList;
          } else {
            return countryList?.filter(country => country?.continent.includes(continent));
          }
        }),
      staleTime: 60000,
    });
  };

  return (
    <Container className={cx('wrap')} applyMargin="bottom">
      {Object.values(CONTINENTS).map((continent, index) => (
        <Chip
          selected={CONTINENTS[selectedContinent].name === continent.name}
          className={cx('chip')}
          key={JSON.stringify(continent)}
          onClick={() => {
            setSelectedContinent(Object.keys(CONTINENTS)[index] as ContinentKeys);
            prefetch(continent.id);
          }}
        >
          {continent.name}
        </Chip>
      ))}
    </Container>
  );
}
