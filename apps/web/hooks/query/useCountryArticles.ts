import { useQuery } from '@tanstack/react-query';

const useCountryArticle = (selectedRegionId: string) => {
  const res = useQuery({
    queryKey: useCountryArticle.queryKey(selectedRegionId),
    queryFn: async () => {
      const result = await fetch(`/api/region-articles?regionId=${selectedRegionId}`).then(data => data.json());
      return result;
    },
    staleTime: Infinity,
  });
  return res;
};

useCountryArticle.queryKey = (selectedRegionId: string) => {
  return ['region-articles', selectedRegionId];
};

export default useCountryArticle;
