import { useQuery } from '@tanstack/react-query';
import firestoreService from 'app/api/firebase';
import { Continentl } from 'models/Continentl';

const useContinentl = (country: string) => {
  const res = useQuery({
    queryKey: useContinentl.queryKey(country),
    queryFn: () =>
      // firestoreService.getListWithIds('continentl')
      firestoreService.getListWithIds('continentl').then(countries => {
        if (country === '') {
          return countries;
        } else if (countries != null) {
          const selectedCountry = countries.find((place: Continentl) => place.name == country);
          if (!Array.isArray(selectedCountry)) {
            return [selectedCountry];
          } else {
            return selectedCountry;
          }
        }
      }),
    staleTime: Infinity,
    notifyOnChangeProps: ['data'],
  });
  return res;
};

useContinentl.queryKey = (country: string) => {
  return ['continentl', country];
};

export default useContinentl;
