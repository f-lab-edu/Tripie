'use client';

import incrementUsedGptToken from 'app/api/gpt/incrementUsedGptToken';
import { ChatFunnelProps } from 'app/trip-planner/_components/Chat';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useCallback } from 'react';

type CustomUser = { data: { user: Session['user'] & { usedGptToken: number } } };

const useChatToken = ({ context }: ChatFunnelProps) => {
  const { data } = useSession() as unknown as CustomUser;

  useCallback(() => {
    if (data?.user?.email != null) {
      const increaseGptUse = async () => {
        const response = await incrementUsedGptToken(data?.user?.email as string);
        return response;
      };
      increaseGptUse();
    }
  }, [data?.user?.email, context]);

  return { tokenData: data?.user.usedGptToken };
};
export default useChatToken;
