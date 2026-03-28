import { useQuery } from '@tanstack/react-query';
import API from 'constants/api-routes';

const useToken = (id?: string, ip?: string) => {
  const res = useQuery({
    queryKey: useToken.queryKey(id, ip),
    queryFn: async () => {
      const userStatus = await fetch(`${API.BASE_URL}/api/user-status?${ip ? 'ip=' + ip + '&' : ''}id=${id}`).then(
        res => res.json()
      );
      return userStatus;
    },
    enabled: !!id,
    staleTime: Infinity,
    notifyOnChangeProps: ['data'],
  });

  return res;
};

useToken.queryKey = (id?: string, ip?: string) => {
  return ['chat-token', id, ip];
};

export default useToken;
