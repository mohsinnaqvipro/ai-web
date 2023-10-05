import React from 'react'
import Price from '../Price'
import styles from './pricing.module.css'

const Pricing = () => {
  return (
    <div className={styles.mainLayout}>
      <Price />
      <Price />
    </div>
  )
}

export default Pricing