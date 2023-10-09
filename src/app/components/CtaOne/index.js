"use client";

import React from "react";
import Button from "@/shared/Button";
import styles from "./cta1.module.css";

const CtaOne = () => {
  return (
    <>
      <div className={styles.mainLayout}>
        <div className={styles.innerLayout}>
          <h2>Be the first to try</h2>
          <Button text="Book a demo" />
        </div>
      </div>
    </>
  );
};

export default CtaOne;
