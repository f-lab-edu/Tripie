'use client';
import AboutUs from 'app/home/_components/AboutUs';
import Contacts from 'app/home/_components/contacts';
import Faq from 'app/home/_components/Faqs/Faq';
import Footer from 'app/home/_components/Footer';
import Header from 'app/home/_components/Header';
import OurProcess from 'app/home/_components/OurProcess';
import OurService from 'app/home/_components/OurService';
import OurWork from 'app/home/_components/OurWork';
import Plan from 'app/home/_components/Plan';
// import TanstackQuery from 'provider/TanstackQueryProvider';
import Loading from 'shared/components/Loading';
// import Nav from 'shared/components/Nav';
export default function Home() {
  return (
    // <TanstackQuery>
    <>
      {/* <Nav /> */}
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
    // </TanstackQuery>
  );
}
