import { Suspense } from 'react'
import { LastSection } from '../components'
import { AboutUs, Vision } from '../components/about'
import Loader from '../components/Loader'

const About = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="p-5 pt-20 md:p-10 lg:p-20 2xl:px-40">
        <AboutUs />
      </div>
      <Vision />
      <LastSection />
    </Suspense>
  )
}

export default About
