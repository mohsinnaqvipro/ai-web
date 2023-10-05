import React from 'react'
import BlogCard from '../BlogCard'
import { blogCardData1 } from '@/shared/Constants/constants'
import styles from './blogArticles.module.css'

function BlogArticles() {
  return (
    <div className={styles.blogContainer}>
      {blogCardData1.map((data) => (
        <BlogCard data={data} />
      ))}
    </div>
  )
}

export default BlogArticles