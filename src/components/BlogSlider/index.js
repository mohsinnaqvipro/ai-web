'use client'

import React, { useState } from 'react'
import BlogCard from '../BlogCard'
import styles from './blogSlider.module.css'
import { blogCardData } from '@/shared/Constants/constants'
import Link from 'next/link'
import { Divider } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const BlogSlider = () => {
  const [startIndex, setStartIndex] = useState(0)

  const cardsToShow = blogCardData.slice(startIndex, startIndex + 3)
  const isNextDisabled = startIndex + 2 >= blogCardData.length
  const isPreviousDisabled = startIndex === 0

  const handleNext = () => {
    if (!isNextDisabled) {
      setStartIndex(prevIndex => prevIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (!isPreviousDisabled) {
      setStartIndex(prevIndex => prevIndex - 1)
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h2>Blog</h2>
        <p>
          Laborum dolore aute et incididunt commodo consectetur eiusmod magna.
        </p>
        <Link href=''>View more</Link>
        <div className={styles.iconsWrapper}>
          <Divider className={styles.divider} />
          <LeftOutlined onClick={handlePrevious} className={styles.icon} />
          <RightOutlined onClick={handleNext} className={styles.icon} />
        </div>
      </div>
      <div className={styles.cardWrapper}>
        {cardsToShow.map(card => (
          <BlogCard data={card} />
        ))}
      </div>
    </div>
  )
}

export default BlogSlider
