import { useQuery } from '@tanstack/react-query';
import API from 'constants/api-routes';

const useLamdba = ({ places, selectedCities }: { places?: string[]; selectedCities: string }) => {
  if (places == null) {
    return { data: null };
  }
  const res = useQuery({
    queryKey: useLamdba.queryKey(places, selectedCities),
    queryFn: async () => {
      // return await Promise.all(places.map(place => fetch('/api/aws/lambda?place=' + place)));
      return await Promise.all(
        places
          .slice(0, 1)
          // places.
          .map(place =>
            fetch(`${API.BASE}${API.AWS_LAMBDA}?place=${place} near ${selectedCities}`).then(v => {
              console.log('v', v.json());
              return v;
            })
          )
      );
    },
    staleTime: Infinity, // never be considered stale
    refetchOnWindowFocus: false,
    enabled: !!places,
  });
  return res;
};

useLamdba.queryKey = (places: string[], selectedCities: string) => {
  if (places == null) {
    return ['lambda', selectedCities];
  }
  return ['lambda', ...places, selectedCities];
};

export default useLamdba;
