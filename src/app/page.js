import FaqPage from './Faq/page'
import HeroPage from './Hero/page'
import NavbarPage from './Navbar/page'
import TestimonialsPage from './Testimonials/page'
import Hero from "./Hero/page";
import NavbarPage from "./Navbar/page";
import CtaOne from "./CtaOne/page";
import FooterLayout from "./Footer/page";
import TextFeatureOne from "./TextFeatureOne/page";
import TextFeatureTwo from "./TextFeatureTwo/page";
import FeatureImageTwo from "./FeatureImageTwo/page";

export default function Home() {
  return (
    <>
      <NavbarPage />
      <HeroPage />
      <TestimonialsPage />
      <FaqPage />
      <Hero />
      <FeatureImageTwo />
      <CtaOne />
      <TextFeatureOne />
      <TextFeatureTwo />
      <FooterLayout />
    </>
  );
}
