'use client';

import AboutUs from './about-us/AboutUs';
import Contact from './contact/Contact';
import Faq from './faq/Faq';
import Footer from './footer/Footer';
import Header from './header/Header';
import Loading from './loading/loading';
import OurProcess from './our-process/OurProcess';
import OurService from './our-service/OurService';
import OurWork from './our-work/OurWork';
import Plan from './plan/Plan';
import Team from './team/Team';
import Testimonials from './testimonials/Testimonials';

const Section = () => {
  return <>Landing Page sections</>;
};

Section.Loading = Loading;
Section.Header = Header;
Section.AboutUs = AboutUs;
Section.OurProcess = OurProcess;
Section.OurService = OurService;
Section.OurWork = OurWork;
Section.Plan = Plan;
Section.Testimonials = Testimonials;
Section.Team = Team;
Section.Contact = Contact;
Section.Faq = Faq;
Section.Footer = Footer;

export default Section;
