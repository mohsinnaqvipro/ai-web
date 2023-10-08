'use client'

import Faq from '@/app/components/Faq'
import Hero from '@/app/components/Hero'
import Navbar from '@/app/components/Navbar'
import Testimonials from '@/app/components/Testimonials'
import Footer from '@/app/components/Footer'
import TextFeatureOne from '@/app/components/TextFeatureOne'
import TextFeatureTwo from '@/app/components/TextFeatureTwo'
import FeatureImageTwo from '@/app/components/FeatureImageTwo'
import CtaOne from '@/app/components/CtaOne'
import FeatureImage from '@/app/components/FeatureImage'
import BlogSlider from '@/app/components/BlogSlider'
import {
  featureImageContent,
  featureImage1Content
} from '@/shared/Constants/constants'

const HowItWorks = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureImage flag={true} content={featureImageContent} />
      <FeatureImage flag={false} content={featureImage1Content} />
      <FeatureImageTwo />
      <Testimonials />
      <TextFeatureOne />
      <TextFeatureTwo />
      <CtaOne />
      <Faq />
      <BlogSlider
        title='Blog'
        description='Laborum dolore aute et incididunt commodo consectetur eiusmod magna'
      />
      <Footer />
    </>
  )
}

export default HowItWorks
