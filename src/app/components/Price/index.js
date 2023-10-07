import { priceCardData } from '@/shared/Constants/constants'
import React from 'react'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '100px',
        marginBottom: '100px'
      }}
    >
      {priceCardData.map((item, index) => (
        <PriceCard item={item} />
      ))}
    </div>
  )
}

export default Price
