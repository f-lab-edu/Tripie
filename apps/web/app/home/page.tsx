'use client';
import AboutUs from 'app/home/_components/AboutUs';
import Contacts from 'app/home/_components/Contacts';
import Faq from 'app/home/_components/Faq';
import Footer from 'app/home/_components/Footer';
import Header from 'app/home/_components/Header';
import OurProcess from 'app/home/_components/our-process/OurProcess';
import OurService from 'app/home/_components/our-service/OurService';
import OurWork from 'app/home/_components/our-work/OurWork';
import Plan from 'app/home/_components/plan/Plan';
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
