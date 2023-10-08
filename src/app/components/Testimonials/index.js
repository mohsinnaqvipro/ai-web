'use client'

// const Testimonials = () => {
//   const [startIndex, setStartIndex] = useState(0)
//   const [cardsPerPage, setCardsPerPage] = useState(3)

//   useEffect(() => {
//     // console.log('window.innerWidth: ', window.innerWidth)
//     if (typeof window !== 'undefined') {
//       setCardsPerPage(window.innerWidth <= 1024 ? 1 : 3)
//     }
//   }, [])

//   // const cardsPerPage = window.innerWidth <= 1024 ? 1 : 3
//   const cardsToShow = cardsData.slice(startIndex, startIndex + cardsPerPage)
//   const isNextDisabled = startIndex + cardsPerPage >= cardsData.length
//   const isPreviousDisabled = startIndex === 0

// const handleNext = () => {
//   if (!isNextDisabled) {
//     setStartIndex(prevIndex => prevIndex + cardsPerPage)
//   }
// }

// const handlePrevious = () => {
//   if (!isPreviousDisabled) {
//     setStartIndex(prevIndex => prevIndex - cardsPerPage)
//   }
// }

//   return (
// ;<div className={styles.mainLayout}>
//   <div className={styles.slider}>
//     <h2>Customer stories</h2>
//     <div className={styles.icons}>
//       <LeftCircleOutlined
//         onClick={handlePrevious}
//         className={styles.circleIcon}
//       />
//       <RightCircleOutlined onClick={handleNext} className={styles.circleIcon} />
//     </div>
//   </div>
//   <div className={styles.cardsLayout}>
//     {cardsToShow.map((card, index) => (
//       <Card
//         key={index}
//         description={card.description}
//         image={card.image}
//         name={card.name}
//         companyName={card.companyName}
//       />
//     ))}
//   </div>
// </div>
//   )
// }

// export default Testimonials
import Card from './Card'
import { cardsData } from '@/shared/Constants/constants'
import styles from './testimonials.module.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Testimonials = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 765 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 765, min: 0 },
      items: 1
    }
  }
  return (
    <div className={styles.mainLayout}>
      <div className={styles.slider}>
        <h2>Customer stories</h2>
      </div>
      <Carousel
        responsive={responsive}
        ssr
        showDots={true}
        slidesToSlide={1}
        infinite
        containerClass='container-with-dots'
        itemClass='image-item'
        renderButtonGroupOutside={true}
        arrows={true}
        deviceType={''}
      >
        {cardsData.map((card, index) => (
          <div key={index} className={styles.carousal}>
            <Card
              key={index}
              description={card.description}
              image={card.image}
              name={card.name}
              companyName={card.companyName}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Testimonials
