'use client';

import { useSplash } from '@/hooks/useSplash';
import { AnimatedText, Icon, SplashScreen } from '@tripie-pyotato/design-system/@components';
import { Stack } from '@tripie-pyotato/design-system/@core';
import AboutUs from 'app/home/_components/AboutUs';
import Footer from 'app/home/_components/Footer';
import Header from 'app/home/_components/Header';
import dynamic from 'next/dynamic';
import Loading from 'shared/components/Loading';
import { SplashProvider } from '../../shared/components/SplashContext';

// below-the-fold 컴포넌트 lazy load
const OurService = dynamic(() => import('./_components/OurService'));
const Plan = dynamic(() => import('./_components/Plan'));
const Contacts = dynamic(() => import('./_components/contacts'));
const Faq = dynamic(() => import('./_components/Faqs'));

function HomeContent() {
  const { splash } = useSplash();

  return (
    <>
      {splash && (
        <SplashScreen loading={splash} variant="backdrop" lock={true}>
          <Stack
            direction="row"
            gap="default"
            justifyContent="center"
            applyPadding="right"
            padding="sm"
            alignItems="center"
          >
            <Icon.Loading />
            <AnimatedText.Jump>loading...</AnimatedText.Jump>
          </Stack>
        </SplashScreen>
      )}
      <Loading />
      <Header />
      <AboutUs />
      <OurService />
      <Plan />
      <Contacts />
      <Faq />
      <Footer />
    </>
  );
}

export default function Home() {
  return (
    <SplashProvider>
      <HomeContent />
    </SplashProvider>
  );
}
