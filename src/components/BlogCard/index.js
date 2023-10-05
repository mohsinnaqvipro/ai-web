import React from 'react'
import styles from './blogCard.module.css'
import Image from 'next/image'
import BlogCardImage from "@/assets/images/blogCard.png"
import Tag from './tag/Tag'

const BlogCard = ({ data: { title, date, description } }) => {
  return (
    <div className={styles.mainLayout}>
      <div className={styles.cardLayout}>
        <Image className={styles.blogImage} src={BlogCardImage} />
        <h3>{title}</h3>
        <span>{date}</span>
        <p>{description}</p>
        <div className={styles.tagContainer}>
          <Tag text="Label 1" flag={true} />
          <Tag text="Label 2" flag={false} />
        </div>
      </div>
    </div>
  )
}

export default BlogCard
