import React from 'react'
import Hero2 from '@/components/Hero2'

const Hero2Page = () => {
  return (
    <>
      <Hero2 />
      <div className={styles.blogContainer}>
        {
          blogCardData1.map((data) => (
            <BlogCard data={data} />
          ))
        }
      </div>
      <CtaOne />
      <Footer />
    </>
  )
}

export default Hero2Page
