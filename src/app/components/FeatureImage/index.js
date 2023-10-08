"use client";

import React from "react";
import Image from "next/image";
import featureImage from "@/assets/images/featureImage.png";
import featureImage1 from "@/assets/images/featureImage1.png";
import styles from "./featureImage.module.css";

const FeatureImage = ({ flag, content }) => {
  const { text, headingText, msg } = content;
  return (
    <div
      className={flag ? styles.featureImageLayout : styles.featureImageLayout1}
    >
      <div className={styles.innerLayout}>
        <div className={styles.leftLayout}>
          <h4 className={flag ? styles.h4White : styles.h4Black}>{text}</h4>
          <h2 className={flag ? styles.h2White : styles.h2Black}>
            {headingText}
          </h2>
          <p className={flag ? styles.pWhite : styles.pBlack}>{msg}</p>
        </div>
        <Image
          className={styles.image}
          src={flag ? featureImage : featureImage1}
          alt=""
        />
      </div>
    </div>
  );
};

export default FeatureImage;
