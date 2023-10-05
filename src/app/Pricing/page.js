import Hero2 from '@/components/Hero2'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import React from 'react'
import styles from './pricing.module.css'
import CtaOne from '@/components/CtaOne'
import Footer from '@/components/Footer'

const PricingContainer = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.mainLayout}>
        <Hero2 flag={true} name="Pricing" />
      </div>
      <Pricing />
      <CtaOne buttonText="Get Started" />
      {/* <Footer /> */}
    </div>
  )
}

export default PricingContainer