"use client";

import React from "react";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ description, image, name, companyName }) => {
  return (
    <div className={styles.mainLayout}>
      <p>{description}</p>
      <div className={styles.cardFooter}>
        <Image className={styles.image} src={image} alt="" />
        <div className={styles.description}>
          <span className={styles.name}>{name}</span>
          <p className={styles.companyName}>{companyName}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
