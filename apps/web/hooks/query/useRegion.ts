import { useQuery } from '@tanstack/react-query';
import getRegionFromCountry from 'app/api/firebase/getRegionFromCountry';
import { Preference } from 'app/trip-planner/_components/Preference';

const useRegion = (preference: Preference[]) => {
  const res = useQuery({
    queryKey: useRegion.queryKey(preference),
    queryFn: () =>
      getRegionFromCountry(preference).then(preference => {
        return preference;
      }),
    staleTime: Infinity,
  });
  return res;
};

useRegion.queryKey = (continent: Preference[]) => {
  return [continent];
};

export default useRegion;
