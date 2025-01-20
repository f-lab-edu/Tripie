import { useQuery } from '@tanstack/react-query';

import incrementUsedGptToken, { CustomUser } from 'app/api/gpt/route';
import { Session } from 'next-auth';

export type CustomSession = { expires: Session['expires'] } & { user: CustomUser };

const useChatToken = ({ data }: { data: CustomSession }) => {
  const res = useQuery({
    queryKey: useChatToken.queryKey({ data }),
    queryFn: async () => {
      if (data != null) {
        return await incrementUsedGptToken({ data }).then(res => {
          return res;
        });
      }
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    enabled: !!data,
  });
  return res;
};

useChatToken.queryKey = ({ data }: { data: Session }) => {
  return [data];
};

export default useChatToken;
