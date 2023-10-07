import React from 'react'
import BlogCard from '../BlogCard'
import styles from './blogArticles.module.css'

function BlogArticles ({ blogCardData }) {
  return (
    <div className={styles.blogContainer}>
      {blogCardData.map(data => (
        <BlogCard data={data} />
      ))}
    </div>
  )
}

export default BlogArticles
