'use client';
import Section from 'components/landing/Landing';
export default function Home() {
  return (
    <>
      <Section.Loading />
      <Section.Header />
      <Section.AboutUs />
      <Section.OurProcess />
      <Section.OurService />
      <Section.OurWork />
      <Section.Plan />
      <Section.Testimonials />
      <Section.Team />
      <Section.Contact />
      <Section.Faq />
      <Section.Footer />
    </>
  );
}
