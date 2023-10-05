import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/images/logo.svg'
import styles from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.mainLayout}>
      <Image className={styles.svgLogo} src={Logo} />
      <div className={styles.menu}>
        <button className={styles.buttonTab}>{`How it Works`}</button>
        <button className={styles.buttonTab}>{`Book a Demo`}</button>
        <Link href="/pricing"><button className={styles.buttonTab}>{`Pricing`}</button></Link>
        <Link href="/blog"><button className={styles.buttonTab} >{`Blog`}</button></Link>
      </div>
      <div className={styles.buttonsLayout}>
        <button className={styles.buttonSignin}>Sign in</button>
        <button className={styles.buttonTryfree}>Try Free</button>
      </div>
    </div >
  )
}

export default Navbar
