import { Suspense } from 'react'
import { AboutUsSection, FAQSection1 } from '../components/FAQ'
import { Loader } from '../components'

const Faq = () => {
  return (
    <Suspense fallback={<Loader />}>
      <FAQSection1 />
      <AboutUsSection />
    </Suspense>
  )
}

export default Faq
