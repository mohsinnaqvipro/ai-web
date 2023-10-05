import React from 'react'
import styles from "./tag.module.css"

const Tag = ({ text, flag }) => {

  return (
    <label className={flag ? styles.tag : styles.tag1}>
      {text}
    </label>
  )
}

export default Tag