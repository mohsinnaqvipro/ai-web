"use client";

import React from "react";
import styles from "./hero2.module.css";
import Button from "@/shared/Button";

const Hero2 = ({ flag, name }) => {
  return (
    <div className={styles.mainLayout}>
      <h1 className={styles.h1}>{name || `Blog`}</h1>
      <p
        className={styles.p}
      >{`Irure dolore exercitation aliquip deserunt aute adipisicing ut. Enim exercitation anim est et consequat pr`}</p>
      {flag && (
        <Button text="Book a demo" />
      )}
    </div>
  );
};

export default Hero2;
