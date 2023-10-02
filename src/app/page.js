import Image from 'next/image'
import styles from './page.module.css'
import FeatureImage from '@/components/featureImage/FeatureImage'

export default function Home() {
  return (
    <main>
      <FeatureImage flag={true} />
    </main>
  )
}
