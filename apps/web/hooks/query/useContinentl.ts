import { useQuery } from '@tanstack/react-query';
import API from 'constants/api-routes';
import { Continentl } from 'models/Continentl';

const useContinentl = (country: string) => {
  const res = useQuery({
    queryKey: useContinentl.queryKey(country),
    queryFn: async () => {
      const data = await fetch(`${API.BASE_URL}/api/continentl?country=${country}`).then(res => res.json());
      if (country === '') {
        return data;
      } else if (data != null) {
        const selectedCountry = data.find((place: Continentl) => place.name == country);
        if (!Array.isArray(selectedCountry)) {
          return [selectedCountry];
        } else {
          return selectedCountry;
        }
      }
    },
    staleTime: Infinity,
    notifyOnChangeProps: ['data'],
  });
  return res;
};

useContinentl.queryKey = (country: string) => {
  return ['continentl', country];
};

export default useContinentl;
