'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from 'react';

type SplashContextType = {
  splash: boolean;
  setSplash: Dispatch<SetStateAction<boolean>>;
};

export const SplashContext = createContext<SplashContextType | null>(null);

export function SplashProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [splash, setSplash] = useState(false);

  const splashContext = useMemo(() => {
    return { splash, setSplash };
  }, [splash, setSplash]);

  return <SplashContext.Provider value={splashContext}>{children}</SplashContext.Provider>;
}
