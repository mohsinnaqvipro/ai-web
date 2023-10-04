import FaqPage from './Faq/page'
import HeroPage from './Hero/page'
import NavbarPage from './Navbar/page'
import TestimonialsPage from './Testimonials/page'
import CtaOne from "./CtaOne/page";
import FooterLayout from "./Footer/page";
import TextFeatureOnePage from "./TextFeatureOne/page";
import TextFeatureTwoPage from "./TextFeatureTwo/page";
import FeatureImageTwoPage from "./FeatureImageTwo/page";
import FeatureImagePage from '@/components/FeatureImage';

export default function Home() {
  return (
    <>
      <NavbarPage />
      <HeroPage />
      <TestimonialsPage />
      <FaqPage />
      <FeatureImageTwoPage />
      <CtaOne />
      <TextFeatureOnePage />
      <TextFeatureTwoPage />
      <FooterLayout />
      <FeatureImagePage flag={true} />
      <FeatureImagePage flag={false} />
    </>
  );
}
