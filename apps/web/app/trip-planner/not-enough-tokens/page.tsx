'use client';
import { SplashProvider } from '@/shared/components/SplashContext';
import ContactAdmin from './_components/ContactAdmin';

const NotEnoughTokens = () => {
  return (
    <SplashProvider>
      <ContactAdmin />
    </SplashProvider>
  );
};

export default NotEnoughTokens;
