import AboutUs from 'components/landing/about-us/AboutUs';
import Contact from 'components/landing/contact/Contact';
import Faq from 'components/landing/faq/Faq';
import Footer from 'components/landing/footer/Footer';
import Header from 'components/landing/header/Header';
import Loading from 'components/landing/loading/loading';
import OurProcess from 'components/landing/our-process/OurProcess';
import OurService from 'components/landing/our-service/OurService';
import OurWork from 'components/landing/our-work/OurWork';
import Plan from 'components/landing/plan/Plan';
import Team from 'components/landing/team/Team';
import Testimonials from 'components/landing/testimonials/Testimonials';

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
      <Testimonials />
      <Team />
      <Contact />
      <Faq />
      <Footer />
    </>
  );
}
