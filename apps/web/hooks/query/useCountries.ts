import { useQuery } from '@tanstack/react-query';
import listItem from 'app/api/firebase/getList';
import { ContinentIds } from 'models/Continent';

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
