import { useQuery } from '@tanstack/react-query';
import firestoreService from 'app/api/firebase';

const useCountryArticle = () => {
  const res = useQuery({
    queryKey: useCountryArticle.queryKey(),
    queryFn: () =>
      firestoreService.getList('region-articles2').then(countryArticleList => {
        return countryArticleList;
      }),
    staleTime: Infinity,
  });
  return res;
};

useCountryArticle.queryKey = () => {
  return ['country', 'region-articles'];
};

export default useCountryArticle;
