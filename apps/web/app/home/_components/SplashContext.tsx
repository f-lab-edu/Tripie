'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react';

type SplashContextType = {
  splash: boolean;
  setSplash: Dispatch<SetStateAction<boolean>>;
};

const SplashContext = createContext<SplashContextType | null>(null);

export function SplashProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [splash, setSplash] = useState(false);

  const splashContext = useMemo(() => {
    return { splash, setSplash };
  }, [splash, setSplash]);

  return <SplashContext.Provider value={splashContext}>{children}</SplashContext.Provider>;
}

export function useSplash() {
  const context = useContext(SplashContext);
  if (!context) {
    throw new Error('useSplash must be used within a SplashProvider');
  }
  return context;
}
