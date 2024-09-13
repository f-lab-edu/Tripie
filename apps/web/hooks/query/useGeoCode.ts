import { useQuery } from '@tanstack/react-query';
import { geocode } from 'app/api/geocode/route';

export const useGeoCode = ({ places }: { places: string[][] }) => {
  console.log('places', places);
  return useQuery({
    queryKey: useGeoCode.queryKey(places[0]),
    queryFn: () => {
      return geocode({ searchQuery: places[0][0] });
    },
    staleTime: 0,
  });
};

useGeoCode.queryKey = (places: string[]) => [...places];
