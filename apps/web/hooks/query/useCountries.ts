import { useQuery } from '@tanstack/react-query';
import firestoreService from 'app/api/firebase';
import { ContinentIds } from 'models/Continent';
import { Country } from 'models/Country';

const useCountries = (continent: ContinentIds = 'all') => {
  const res = useQuery({
    queryKey: useCountries.queryKey(continent),
    queryFn: () =>
      firestoreService.getList('countries').then((countryList: Country[]) => {
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
