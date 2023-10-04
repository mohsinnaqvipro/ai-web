import FaqPage from './Faq/page'
import HeroPage from './Hero/page'
import NavbarPage from './Navbar/page'
import TestimonialsPage from './Testimonials/page'
import styles from './page.module.css'

export default function Home () {
  return (
    <>
      <NavbarPage />
      <HeroPage />
      <TestimonialsPage />
      <FaqPage />
    </>
  )
}
