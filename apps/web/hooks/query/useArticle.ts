import { useQuery } from '@tanstack/react-query';
import getRegionArticles from 'app/api/articles/region';
import { usePathname } from 'next/navigation';

const useArticle = () => {
  const pathName = usePathname();
  const locationId = pathName.split('/');
  const res = useQuery({
    queryKey: useArticle.queryKey(locationId[locationId.length - 1]),
    queryFn: async () => await getRegionArticles(locationId[locationId.length - 1]),
    staleTime: Infinity,
  });
  return res;
};

useArticle.queryKey = (locationId: string) => {
  return [locationId];
};

export default useArticle;
