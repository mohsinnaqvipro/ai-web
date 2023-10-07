import React from "react";

import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import FaceBook from "@/assets/images/facebook.svg";
import Twitter from "@/assets/images/twitter.svg";
import LinkedIn from "@/assets/images/linkedin.svg";
import Youtube from "@/assets/images/youtube.svg";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles.mainLayout}>
        <div className={styles.footerLogo}>
          <div className={styles.logo}>
            <Image
              className={styles.video}
              src={Logo}
            />
          </div>
          <div className={styles.social}>
            <Image src={FaceBook} />
            <Image src={Twitter} />
            <Image src={LinkedIn} />
            <Image src={Youtube} />
          </div>
        </div>
        <div className={styles.footerMenu}>
          <h3>Quick Links</h3>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">How it work</Link>
          </li>
          <li>
            <Link href="/">Prices</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
        </div>
        <div className={styles.footerMenu}>
          <h3>Learn</h3>
          <li>
            <Link href="/">Help Center</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
        </div>
        <div className={styles.footerMenu}>
          <h3>Company</h3>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/">Terms of Services</Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Footer;
