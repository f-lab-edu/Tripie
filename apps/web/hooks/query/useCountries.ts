import { useQuery } from '@tanstack/react-query';
import { ContinentIds } from 'models/Continent';

const useCountries = (continent: ContinentIds = 'all') => {
  const res = useQuery({
    queryKey: useCountries.queryKey(continent),
    queryFn: async () => {
      const result = await fetch(`/api/countries?continent=${continent}`).then(data => data.json());
      return result;
    },
    staleTime: Infinity,
  });
  return res;
};

useCountries.queryKey = (continent: ContinentIds) => {
  return ['countries', continent];
};

export default useCountries;
