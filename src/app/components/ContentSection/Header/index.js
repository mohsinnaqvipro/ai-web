"use client";

import Image from "next/image";
import blogPageImage from "@/assets/images/blogPageImage.png";
import styles from "./header.module.css";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className={styles.Header}>
        <div className={styles.HeaderText}>
          <h2>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`}</h2>
          <p>{`April 15, 2023`}</p>
        </div>
      </div>
      <Image className={styles.image} src={blogPageImage} alt="" />
    </div>
  );
};

export default Header;
