import { useQueryClient } from '@tanstack/react-query';
import { FlickTextButton } from '@tripie-pyotato/design-system/@components';
import { Stack } from '@tripie-pyotato/design-system/@core';
import API from 'constants/api-routes';
// import firestoreService from 'app/api/firebase';
import useContinentl from 'hooks/query/useContinentl';
// import { Continentl } from 'models/Continentl';
import { Country } from 'models/Country';
import { Dispatch, SetStateAction } from 'react';
import { regionNameToLocal } from 'utils/lang';

interface Props {
  countries?: Country[];
  selectedCountry: string;
  setSelectedCountry: Dispatch<SetStateAction<string>>;
}

export function CountryList({ countries, selectedCountry, setSelectedCountry }: Readonly<Props>) {
  const queryClient = useQueryClient();

  // 이전 단계 Continents에서 선택했던 대륙/지역에 속한 국가들 정보 가져오기
  const prefetch = (country: string) => {
    queryClient.prefetchQuery({
      queryKey: useContinentl.queryKey(country),
      queryFn: async () => {
        return await fetch(`${API.BASE_URL}/api/continentl?country=${country}`).then(v => v.json());
      },
    });
  };

  if (countries == null) {
    return null;
  }

  return (
    <Stack display="grid" margin="none" cols={2} gap="l" gridWrapOn={{ 'wrap-sm': 1 }} gridRepeat={{ 'wrap-md': 4 }}>
      {countries.map((country: Country) => (
        <FlickTextButton
          withBorder={true}
          sizes="large"
          onClick={() => {
            setSelectedCountry(country.name);
            prefetch(country.name);
          }}
          key={country.id}
          selected={selectedCountry === country.name}
        >
          {country?.code != null && regionNameToLocal({ regionCode: country?.code })}
        </FlickTextButton>
      ))}
    </Stack>
  );
}
