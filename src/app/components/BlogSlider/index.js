'use client'

import React, { useState, useRef } from 'react'
import BlogCard from '../BlogCard'
import styles from './blogSlider.module.css'
import { blogCardData } from '@/shared/Constants/constants'
import Link from 'next/link'
import { Divider } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const BlogSlider = ({ title, description }) => {
  const carouselRef = useRef(null)
  const [startIndex, setStartIndex] = useState(0)

  const cardsToShow = blogCardData.slice(startIndex, startIndex + 3)
  const isNextDisabled = startIndex + 2 >= blogCardData.length
  const isPreviousDisabled = startIndex === 0

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next()
    }
  }

  const handlePreviousClick = () => {
    if (carouselRef.current) {
      carouselRef.current.previous()
    }
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 765 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 765, min: 0 },
      items: 1
    }
  }

  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className={styles.textWrapper}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href=''>View more</Link>
        <div className={styles.iconsWrapper}>
          <Divider className={styles.divider} />
          <LeftOutlined onClick={handlePreviousClick} className={styles.icon} />
          <RightOutlined onClick={handleNextClick} className={styles.icon} />
        </div>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href=''>View more</Link>
        <div className={styles.iconsWrapper}>
          <Divider className={styles.divider} />
          <LeftOutlined onClick={handlePreviousClick} className={styles.icon} />
          <RightOutlined onClick={handleNextClick} className={styles.icon} />
        </div>
      </div>
      <Carousel
        responsive={responsive}
        ref={carouselRef}
        ssr
        showDots={false}
        slidesToSlide={1}
        infinite
        containerClass='container-with-dots'
        itemClass='image-item'
        // renderButtonGroupOutside={true}
        arrows={false}
        deviceType={''}
      >
        {cardsToShow.map((card, index) => (
          <div className={styles.carousal}>
            <BlogCard data={card} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default BlogSlider
