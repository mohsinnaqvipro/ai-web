"use client";

import React from "react";
import styles from "./faq.module.css";
import Question from "./Question";

const Faq = () => {
  const faqData = [
    {
      question: "Heading with keywords 1",
      answer:
        "Incididunt voluptate sint nostrud excepteur aute non. Enim non ipsum incididunt aliquip duis ad sit ad. Eu dolore minim sit do cupidatat aute pariatur eiusmod ut cillum amet esse elit eiusmod.Duis dolor et est duis. Enim non ipsum incididun Incididunt voluptate sint nostrud excepteur aute non. Enim non ipsum incididunt aliquip duis ad sit ad. Eu dolore minim sit do cupidatat aute pariatur eiusmod ut cillum amet esse elit eiusmod.Duis dolor et est duis. Enim non ipsum incididun Incididunt voluptate sint nostrud excepteur aute non. Enim non ipsum incididunt aliquip duis ad sit ad. Eu dolore minim sit do cupidatat aute pariatur eiusmod ut cillum amet esse elit eiusmod.Duis dolor et est duis. Enim non ipsum incididun Incididunt voluptate sint nostrud excepteur aute non. Enim non ipsum incididunt aliquip duis ad sit ad. Eu dolore minim sit do cupidatat aute pariatur eiusmod ut cillum amet esse elit eiusmod.Duis dolor et est duis. Enim non ipsum incididun",
    },
    {
      question: "Heading with keywords 2",
      answer:
        "Incididunt voluptate sint nostrud excepteur aute non. Enim non ipsum incididunt aliquip duis ad sit ad. Eu dolore minim sit do cupidatat aute pariatur eiusmod ut cillum amet esse elit eiusmod.Duis dolor et est duis. Enim non ipsum incididun Incididunt voluptate sint nostrud excepteur aute non. Enim non ipsum incididunt aliquip duis ad sit ad. Eu dolore minim sit do cupidatat aute pariatur eiusmod ut cillum amet esse elit eiusmod.Duis dolor et est duis. Enim non ipsum incididun Incididunt voluptate sint nostrud excepteur aute non. Enim non ipsum incididunt aliquip duis ad sit ad. Eu dolore minim sit do cupidatat aute pariatur eiusmod ut cillum amet esse elit eiusmod.Duis dolor et est duis. Enim non ipsum incididun Incididunt voluptate sint nostrud excepteur aute non. Enim non ipsum incididunt aliquip duis ad sit ad. Eu dolore minim sit do cupidatat aute pariatur eiusmod ut cillum amet esse elit eiusmod.Duis dolor et est duis. Enim non ipsum incididun",
    },
    {
      question: "Heading with keywords 3",
      answer:
        "Incididunt voluptate sint nostrud excepteur aute non. Enim non ipsum incididunt aliquip duis ad sit ad. Eu dolore minim sit do cupidatat aute pariatur eiusmod ut cillum amet esse elit eiusmod.Duis dolor et est duis. Enim non ipsum incididun Incididunt voluptate sint nostrud excepteur aute non. Enim non ipsum incididunt aliquip duis ad sit ad. Eu dolore minim sit do cupidatat aute pariatur eiusmod ut cillum amet esse elit eiusmod.Duis dolor et est duis. Enim non ipsum incididun Incididunt voluptate sint nostrud excepteur aute non. Enim non ipsum incididunt aliquip duis ad sit ad. Eu dolore minim sit do cupidatat aute pariatur eiusmod ut cillum amet esse elit eiusmod.Duis dolor et est duis. Enim non ipsum incididun Incididunt voluptate sint nostrud excepteur aute non. Enim non ipsum incididunt aliquip duis ad sit ad. Eu dolore minim sit do cupidatat aute pariatur eiusmod ut cillum amet esse elit eiusmod.Duis dolor et est duis. Enim non ipsum incididun",
    },
    // Add more questions and answers as needed
  ];
  return (
    <div className={styles.mainLayout}>
      <h2>{`Frequently Asked Questions`}</h2>
      {faqData.map((faq, index) => (
        <div className={styles.container}>
          <Question key={index} question={faq.question} answer={faq.answer} />
          <div className={styles.lineSeparator} />
        </div>
      ))}
    </div>
  );
};

export default Faq;
