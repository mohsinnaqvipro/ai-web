import React from 'react'
import styles from './faq.module.css'
import Question from './Question'

const Faq = () => {
  const faqData = [
    {
      question: 'Heading with keywords1',
      answer: 'Answer 1'
    },
    {
      question: 'Heading with keywords2',
      answer: 'Answer 2'
    }
    // Add more questions and answers as needed
  ]
  return (
    <div className={styles.mainLayout}>
      <h2>{`Frequently Asked Questions`}</h2>
      {faqData.map((faq, index) => (
        <>
          <Question key={index} question={faq.question} answer={faq.answer} />
          <div className={styles.lineSeparator} />
        </>
      ))}
    </div>
  )
}

export default Faq
