import { useQueryClient } from '@tanstack/react-query';
import { Chip } from '@tripie-pyotato/design-system/@components';
import { Stack } from '@tripie-pyotato/design-system/@core';
import { classNames } from '@tripie-pyotato/design-system/@wrappers';

import firestoreService from 'app/api/firebase';
import { CONTINENTS } from 'constants/continents';
import useCountries from 'hooks/query/useCountries';
import { ContinentIds, ContinentKeys } from 'models/Continent';
import { Country } from 'models/Country';
import { Dispatch, SetStateAction } from 'react';

import Style from './continent-list.module.scss';

const cx = classNames.bind(Style);

interface Props {
  selectedContinent: ContinentKeys;
  action: Dispatch<SetStateAction<ContinentKeys>>;
}

export function ContinentList({ selectedContinent, action }: Readonly<Props>) {
  const queryClient = useQueryClient();
  // 대륙 선택 버튼 클릭시 다음 퍼널 스탭으로 넘어가기 전에 미리 해당 대륙에 속한 국가들 prefetch해오기
  const prefetch = (continent: ContinentIds) => {
    queryClient.prefetchQuery({
      queryKey: useCountries.queryKey(continent),
      queryFn: () =>
        firestoreService.getList('countries').then(countryList => {
          if (continent === 'ALL') {
            return countryList;
          } else {
            return countryList?.filter((country: Country) =>
              country?.continent.includes(CONTINENTS[continent as ContinentKeys].id)
            );
          }
        }),
    });
  };

  return (
    <Stack display="grid" margin="none" cols={2} gap="l" gridWrapOn={{ 'wrap-sm': 1 }} gridRepeat={{ 'wrap-md': 4 }}>
      {Object.keys(CONTINENTS).map((continent, index) => (
        <Chip
          key={JSON.stringify(continent)}
          selected={selectedContinent === continent}
          className={cx('chip')}
          onClick={() => {
            action(Object.keys(CONTINENTS)[index] as ContinentKeys);
            prefetch(CONTINENTS[continent as ContinentKeys].id);
          }}
        >
          {CONTINENTS[continent as ContinentKeys].name}
        </Chip>
      ))}
    </Stack>
  );
}
