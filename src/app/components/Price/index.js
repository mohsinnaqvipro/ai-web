import { priceCardData } from '@/shared/Constants/constants'
import React from 'react'
import PriceCard from './PriceCard'
import styles from './price.module.css'

const Price = () => {
  return (
    <div className={styles.mainLayout} >
      {priceCardData.map((item, index) => (
        <PriceCard item={item} />
      ))}
    </div>
  )
}

export default Price
