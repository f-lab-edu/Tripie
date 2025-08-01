import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@tripie-pyotato/design-system/@components/Button';
import Stack from '@tripie-pyotato/design-system/@core/Stack';
import API from 'constants/api-routes';

import { CONTINENTS } from 'constants/continents';
import useCountries from 'hooks/query/useCountries';
import { ContinentIds, ContinentKeys } from 'models/Continent';

import { Dispatch, SetStateAction } from 'react';

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
      queryFn: async () => {
        const data = await fetch(`${API.BASE_URL}/api/countries?continent=${continent}`).then(res => res.json());
        return data;
      },
    });
  };

  return (
    <Stack display="grid" margin="none" cols={2} gap="l" gridWrapOn={{ 'wrap-sm': 1 }} gridRepeat={{ 'wrap-md': 4 }}>
      {Object.keys(CONTINENTS).map((continent, index) => (
        <Button
          sizes={'large'}
          key={JSON.stringify(continent)}
          selected={selectedContinent === continent}
          onClick={() => {
            action(Object.keys(CONTINENTS)[index] as ContinentKeys);
            prefetch(CONTINENTS[continent as ContinentKeys].id);
          }}
        >
          {CONTINENTS[continent as ContinentKeys].name}
        </Button>
      ))}
    </Stack>
  );
}
