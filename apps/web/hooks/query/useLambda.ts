import { useQuery } from '@tanstack/react-query';

const useLamdba = (places: string[], selectedCities: string) => {
  const res = useQuery({
    queryKey: useLamdba.queryKey(places, selectedCities),
    queryFn: async () => {
      // return await Promise.all(places.map(place => fetch('/api/aws/lambda?place=' + place)));
      return await Promise.all(
        places.map(place => fetch('/api/aws/lambda?place=' + `${place} near ${selectedCities}`))
      );
    },
    staleTime: Infinity, // never be considered stale
    refetchOnWindowFocus: false,
    enabled: !!places,
  });
  return res;

  // const res = useQueries({
  //   queries: places.map(place => ({
  //     queryKey: useLamdba.queryKey(place),
  //     queryFn: async () => {
  //       await fetch('/api/aws/lambda?place=' + place);
  //     },
  //     staleTime: Infinity,
  //   })),
  // });
  // return res;
};

useLamdba.queryKey = (places: string[], selectedCities: string) => {
  if (places == null) {
    return ['lambda', selectedCities];
  }
  return ['lambda', ...places, selectedCities];
};

export default useLamdba;
