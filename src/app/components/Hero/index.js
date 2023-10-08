"use client";

import React from "react";
import Image from "next/image";
import Button from "@/shared/Button";
import Video from "@/assets/images/video.png";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.mainLayout}>
        <h1 className={styles.h1}>{`Best AI for UI Ideation`}</h1>
        <p
          className={styles.p}
        >{`Irure dolore exercitation aliquip deserunt aute adipisicing ut. Enim exercitation anim est et consequat pr`}</p>
        <Button text="Get started" />
      </div>
      <Image className={styles.image} src={Video} alt="" />
    </>
  );
};

export default Hero;
