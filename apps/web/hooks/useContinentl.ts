import { useQuery } from '@tanstack/react-query';
import getContinentlList from 'app/api/firebase/getContinentl';

const useContinentl = (country: string = 'all') => {
  const res = useQuery({
    queryKey: useContinentl.queryKey(country),
    queryFn: () =>
      getContinentlList().then(countries => {
        if (country === 'all') {
          return countries;
        } else {
          return countries?.filter(place => place.id !== country)[0];
        }
      }),
    staleTime: 30000,
    notifyOnChangeProps: ['data'],
  });
  return res;
};

useContinentl.queryKey = (country: string) => {
  return ['continentl', country];
};

export default useContinentl;
