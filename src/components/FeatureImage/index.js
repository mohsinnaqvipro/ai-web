import React from 'react'
import styles from './featureImage.module.css'
import Image from 'next/image'

const FeatureImage = ({ flag }) => {

  let featureImage = {};

  if (flag) {
    featureImage = {
      text: "Our features",
      headingText: "Our AI",
      msg: "Minim nulla aliquip sint consectetur reprehenderit Lorem sint ea esse esse voluptate in. Eu id enim quis laborum aliqua ad velit veniam sunt dolor laboris veniam nisi ad.Elit id aliqua conse aliquip tempo",
      textArea: "Design a website for collections |",
      image: "/websiteCollection.png"
    }
  } else {
    featureImage = {
      text: "Multichannel Engagement",
      headingText: "Instantly visualize your ideas",
      msg: "Aute magna ut dolore anim est incididunt incididunt. Tempor qui nostrud labore proident fugiat excepteur anim elit ea adipisicing voluptate aliquip amet laborum culpa reprehe",
      image: "/ideaImage.png",
      textArea: "Design a website for Record |",
    }
  }

  const { text, headingText, msg, image, textArea } = featureImage;

  return (
    <div className={flag ? styles.container : styles.subContainer}>
      <div>
        <h3 className={flag ? styles.text : styles.secondText}>{text}</h3>
        <h2 className={flag ? styles.textHeading : styles.secondTextHeading}>{headingText}</h2>
        <p className={flag ? styles.paragraph : styles.secondParagraph}>{msg}</p>
      </div>
      <div className={styles.secondContainer}>
        <div className={flag ? styles.textBox : styles.secondTextBox}>
          <text type='text' >{textArea}</text>
        </div>
        <Image
          width={510}
          height={249}
          src={image}
          className={flag ? styles.image : styles.secondImage}
          alt='webSiteCollection' >
        </Image>
      </div>
    </div>
  )
}

export default FeatureImage