"use client";

import React from "react";
import Button from "@/shared/Button";
import styles from "./cta1.module.css";

const CtaOne = ({ buttonText }) => {
  return (
    <>
      <div className={styles.mainLayout}>
        <h2>Be the first to try</h2>
        <Button text={buttonText || "Book a demo"} />
      </div>
    </>
  );
};

export default CtaOne;
