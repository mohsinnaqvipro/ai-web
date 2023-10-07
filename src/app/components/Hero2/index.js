'use client'

import React from 'react'
import Button from '@/shared/Button'
import styles from './hero2.module.css'

const Hero2 = ({ title, description, showButton }) => {
  return (
    <>
      <div className={styles.mainLayout}>
        <h1>{title}</h1>
        <p>{description}</p>
        {showButton && <Button text='Book a Demo' />}
      </div>
    </>
  )
}

export default Hero2
