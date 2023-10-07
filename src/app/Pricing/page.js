import React from 'react'
import Navbar from '@/app/components/Navbar'
import Hero2 from '@/app/components/Hero2'
import Price from '@/app/components/Price'
import CtaOne from '@/app/components/CtaOne'
import Footer from '@/app/components/Footer'

const Pricing = () => {
  return (
    <>
      <Navbar />
      <Hero2
        title='Pricing'
        description='Irure dolore exercitation aliquip deserunt aute adipisicing ut. Enim exercitation anim est et consequat pr'
        showButton={true}
      />
      <Price />
      <CtaOne />
      <Footer />
    </>
  )
}

export default Pricing
