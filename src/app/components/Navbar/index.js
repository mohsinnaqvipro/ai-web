"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import styles from "./navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div className={styles.mainLayout}>
      <Image className={styles.svgLogo} src={Logo} alt="" />
      <div className={styles.menu}>
        <button
          onClick={() => router.push("/HowItWorks")}
          className={`${styles.buttonTab} ${
            pathName === "/HowItWorks" || pathName === "/" ? styles.active : ""
          }`}
        >{`How it Works`}</button>
        <button className={`${styles.buttonTab}`}>{`Book a Demo`}</button>
        <button
          onClick={() => router.push("/Pricing")}
          className={`${styles.buttonTab} ${
            pathName === "/Pricing" ? styles.active : ""
          }`}
        >{`Pricing`}</button>
        <button
          onClick={() => router.push("/Blog")}
          className={`${styles.buttonTab} ${
            pathName === "/Blog" ? styles.active : ""
          }`}
        >{`Blog`}</button>
      </div>
      <div className={styles.buttonsLayout}>
        <button className={styles.buttonSignin}>Sign in</button>
        <button className={styles.buttonTryfree}>Try Free</button>
      </div>
    </div>
  );
};

export default Navbar;
