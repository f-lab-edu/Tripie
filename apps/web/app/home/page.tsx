'use client';
import AboutUs from 'app/home/_components/about-us/AboutUs';
import Contact from 'app/home/_components/contact/Contact';
import Faq from 'app/home/_components/faq/Faq';
import Footer from 'app/home/_components/footer/Footer';
import Header from 'app/home/_components/header/Header';
import Loading from 'app/home/_components/loading/loading';
import OurProcess from 'app/home/_components/our-process/OurProcess';
import OurService from 'app/home/_components/our-service/OurService';
import OurWork from 'app/home/_components/our-work/OurWork';
import Plan from 'app/home/_components/plan/Plan';

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
      <Contact />
      <Faq />
      <Footer />
    </>
  );
}
