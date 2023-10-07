'use client'

import React from 'react'
import styles from './contentSection.module.css'

const ContentSection = ({ heading, description }) => {
  return (
    <div className={styles.contentSection}>
      <h1>{heading}</h1>
      <p>{description}</p>
    </div>
  )
}

export default ContentSection
