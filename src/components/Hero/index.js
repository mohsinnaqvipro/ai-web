import React from 'react'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <div className={styles.mainLayout}>
      <h1 className={styles.h1}>{`Best AI for UI Ideation`}</h1>
      <p
        className={styles.p}
      >{`Irure dolore exercitation aliquip deserunt aute adipisicing ut. Enim exercitation anim est et consequat pr`}</p>
    </div>
  )
}

export default Hero
