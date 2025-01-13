import { useQuery } from '@tanstack/react-query';
import listCountryArticles from 'app/api/firebase/getArticles';

const useCountryArticle = () => {
  const res = useQuery({
    queryKey: useCountryArticle.queryKey(),
    queryFn: () =>
      listCountryArticles('region-articles').then(countryArticleList => {
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
