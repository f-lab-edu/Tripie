import { useQuery } from '@tanstack/react-query';
import getContinentlList from 'app/api/firebase/getContinentl';

const useContinentl = (country: string) => {
  const res = useQuery({
    queryKey: useContinentl.queryKey(country),
    queryFn: () =>
      getContinentlList().then(countries => {
        if (country === '') {
          return countries;
        } else if (countries != null) {
          const selectedCountry = countries.find(place => place.name == country);
          if (!Array.isArray(selectedCountry)) {
            return [selectedCountry];
          } else {
            return selectedCountry;
          }
        }
      }),
    staleTime: 30_000,
    notifyOnChangeProps: ['data'],
  });
  return res;
};

useContinentl.queryKey = (country: string) => {
  return ['continentl', country];
};

export default useContinentl;
