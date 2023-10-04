'use client'

import React, { useState } from 'react'
import { UpCircleOutlined, DownCircleOutlined } from '@ant-design/icons'
import styles from './question.module.css'

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleQuestion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className={styles.toggle}>
        <h3>{question}</h3>
        {!isOpen ? (
          <UpCircleOutlined
            onClick={toggleQuestion}
            className={styles.upCircle}
          />
        ) : (
          <DownCircleOutlined
            onClick={toggleQuestion}
            className={styles.upCircle}
          />
        )}
      </div>
      {isOpen ? <p>{answer}</p> : null}
    </>
  )
}

export default Question
