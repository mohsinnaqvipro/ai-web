import FaqPage from './Faq/page'
import HeroPage from './Hero/page'
import NavbarPage from './Navbar/page'
import TestimonialsPage from './Testimonials/page'
import FooterLayout from './Footer/page'
import TextFeatureOnePage from './TextFeatureOne/page'
import TextFeatureTwoPage from './TextFeatureTwo/page'
import FeatureImageTwoPage from './FeatureImageTwo/page'
import CtaOne from './CtaOne/page'
import FeatureImagePage from './FeatureImage/page'
import {
  featureImageContent,
  featureImage1Content
} from '@/shared/Constants/constants'
import BlogSliderPage from './BlogSlider/page'

export default function Home () {
  return (
    <>
      <NavbarPage />
      <HeroPage />
      <FeatureImagePage flag={true} content={featureImageContent} />
      <FeatureImagePage flag={false} content={featureImage1Content} />
      <FeatureImageTwoPage />
      <TestimonialsPage />
      <TextFeatureOnePage />
      <TextFeatureTwoPage />
      <CtaOne />
      <FaqPage />
      <BlogSliderPage />
      <FooterLayout />
    </>
  )
}
