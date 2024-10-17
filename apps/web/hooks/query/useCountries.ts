import { useQuery } from '@tanstack/react-query';
import listItem from 'app/api/firebase/getList';
import { CONTINENTS } from 'constants/continents';

// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#mapping-modifiers
export type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

export type Continents = CreateMutable<typeof CONTINENTS>;

export type ContinentKeys = keyof Continents;
export type ContinentIds = Continents[ContinentKeys]['id'];

export type Country = {
  continent: string[];
  id: string;
  location: { lat: number; lng: number };
  name: string;
  code: string;
};

const useCountries = (continent: ContinentIds = 'all') => {
  const res = useQuery({
    queryKey: useCountries.queryKey(continent),
    queryFn: () =>
      listItem('countries').then(countryList => {
        if (continent === 'all') {
          return countryList;
        } else {
          return countryList?.filter(country => country?.continent.includes(continent));
        }
      }),
    staleTime: Infinity,
  });
  return res;
};

useCountries.queryKey = (continent: ContinentIds) => {
  return ['countries', continent];
};

export default useCountries;
