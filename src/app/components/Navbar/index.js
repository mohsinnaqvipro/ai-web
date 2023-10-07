'use client'

import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/images/logo.svg'
import { useRouter } from 'next/navigation'
import styles from './navbar.module.css'

const Navbar = () => {
  const router = useRouter()
  return (
    <div className={styles.mainLayout}>
      <Image className={styles.svgLogo} src={Logo} />
      <div className={styles.menu}>
        <button
          onClick={() => router.push('/')}
          className={styles.buttonTab}
        >{`How it Works`}</button>
        <button className={styles.buttonTab}>{`Book a Demo`}</button>
        <button
          onClick={() => router.push('/Pricing')}
          className={styles.buttonTab}
        >{`Pricing`}</button>
        <button
          onClick={() => router.push('/Blog')}
          className={styles.buttonTab}
        >{`Blog`}</button>
      </div>
      <div className={styles.buttonsLayout}>
        <button className={styles.buttonSignin}>Sign in</button>
        <button className={styles.buttonTryfree}>Try Free</button>
      </div>
    </div>
  )
}

export default Navbar
