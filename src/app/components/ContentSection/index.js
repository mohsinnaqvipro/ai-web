"use client";

import React from "react";
import styles from "./contentSection.module.css";

const ContentSection = ({ heading, description }) => {
  return (
    <div className={styles.mainLayout}>
      <div className={styles.innerSection}>
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ContentSection;
