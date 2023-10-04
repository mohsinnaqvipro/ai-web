import FaqPage from './Faq/page'
import HeroPage from './Hero/page'
import NavbarPage from './Navbar/page'
import TestimonialsPage from './Testimonials/page'
import CtaOne from "./CtaOne/page";
import FooterLayout from "./Footer/page";
import TextFeatureOnePage from "./TextFeatureOne/page";
import TextFeatureTwoPage from "./TextFeatureTwo/page";
import FeatureImageTwoPage from "./FeatureImageTwo/page";

export default function Home() {
  return (
    <>
      <NavbarPage />
      <HeroPage />
      <FeatureImageTwoPage />
      <TestimonialsPage />
      <TextFeatureOnePage />
      <TextFeatureTwoPage />
      <CtaOne />
      <FaqPage />
      <FooterLayout />
    </>
  );
}
