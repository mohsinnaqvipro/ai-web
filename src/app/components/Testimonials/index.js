"use client";

import React, { useState } from "react";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import Card from "./Card";
import { cardsData } from "@/shared/Constants/constants";
import styles from "./testimonials.module.css";

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const cardsToShow = cardsData.slice(startIndex, startIndex + 3);
  const isNextDisabled = startIndex + 3 >= cardsData.length;
  const isPreviousDisabled = startIndex === 0;

  const handleNext = () => {
    if (!isNextDisabled) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (!isPreviousDisabled) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };
  return (
    <div className={styles.mainLayout}>
      <div className={styles.slider}>
        <h2>Customer stories</h2>
        <div className={styles.icons}>
          <LeftCircleOutlined
            onClick={handlePrevious}
            className={styles.circleIcon}
          />
          <RightCircleOutlined
            onClick={handleNext}
            className={styles.circleIcon}
          />
        </div>
      </div>
      <div className={styles.cardsLayout}>
        {cardsToShow.map((card, index) => (
          <Card
            key={index}
            description={card.description}
            image={card.image}
            name={card.name}
            companyName={card.companyName}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
