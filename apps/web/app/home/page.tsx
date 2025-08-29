'use client';

import AboutUs from 'app/home/_components/AboutUs';
import Contacts from 'app/home/_components/contacts';
import Faq from 'app/home/_components/Faqs';
import Footer from 'app/home/_components/Footer';
import Header from 'app/home/_components/Header';
import OurProcess from 'app/home/_components/OurProcess';
import OurService from 'app/home/_components/OurService';
import OurWork from 'app/home/_components/OurWork';
import Plan from 'app/home/_components/Plan';

import Loading from 'shared/components/Loading';

export default function Home() {
  return (
    <>
      <Loading />
      <Header />
      <AboutUs />
      <OurProcess />
      <OurService />
      <OurWork />
      <Plan />
      <Contacts />
      <Faq />
      <Footer />
    </>
  );
}
