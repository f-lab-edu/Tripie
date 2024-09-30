import { useQuery } from '@tanstack/react-query';
import { getContinentlApi } from 'app/api/continentl/route';

const useContinentlApi = () => {
  const res = useQuery({
    queryKey: useContinentlApi.queryKey(),
    queryFn: () => getContinentlApi().then(item => item),
    staleTime: Infinity,
  });
  return res;
};

useContinentlApi.queryKey = () => {
  return ['continentl'];
};

export default useContinentlApi;
