import React from "react";

import Button from "@/shared/Button";
import styles from "./featureImageTwo.module.css";
import Image from "next/image";
import featureImage from "@/assets/images/FeatureImage.jpg";

const FeatureImageTwo = () => {
  return (
    // <div className={styles.featureContainer}>
    //   <div>
    //     <h4 className={styles.h4}>Templates</h4>
    //     <h2 className={styles.h2}>Build your tale</h2>
    //   </div>
    // </div>
    <div className={styles.featureContainer}>
      <p>Templates</p>
      <h2>Build your tale</h2>
      <Button text="Get Started" />
      <Image className={styles.svgLogo} width={1000} src={featureImage} />
    </div>
  );
}

export default FeatureImageTwo
