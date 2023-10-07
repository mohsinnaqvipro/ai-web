import React from 'react'
import styles from './blogCard.module.css'
import Image from 'next/image'
import BlogCardImage from '@/assets/images/blogCard.png'
import { Tag } from 'antd'

const BlogCard = ({ data: { title, date, description } }) => {
  return (
    <div className={styles.cardLayout}>
      <Image className={styles.blogImage} src={BlogCardImage} />
      <h3>{title}</h3>
      <span className={styles.span}>{date}</span>
      <p>{description}</p>
      <div className={styles.tagContainer}>
        <Tag color='purple'>Label 1</Tag>
        <Tag color='magenta'>Label 2</Tag>
      </div>
    </div>
  )
}

export default BlogCard
