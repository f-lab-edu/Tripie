import { SplashContext } from '@/shared/components/SplashContext';
import { useContext } from 'react';

export function useSplash() {
  const context = useContext(SplashContext);
  if (!context) {
    throw new Error('useSplash must be used within a SplashProvider');
  }
  return context;
}
