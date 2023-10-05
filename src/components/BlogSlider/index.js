import React from 'react'
import BlogCard from '../BlogCard'
import styles from './blogSlider.module.css'
import { blogCardData } from '@/shared/Constants/constants'

const BlogSlider = () => {
  return (
    <div className={styles.mainLayout}>
      {
        blogCardData.map((card) => (
          <BlogCard data={card} />
        ))
      }
    </div>
  )
}

export default BlogSlider