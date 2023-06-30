import { Suspense } from 'react'
import { CareerSection1, CareerSection2, CareerSection3 } from '../components/career'
import Loader from '../components/Loader'

const Careers = () => {
  return (
    <Suspense fallback={<Loader />}>
      <CareerSection1 />
      <CareerSection2 />
      <CareerSection3 />
    </Suspense>
  )
}

export default Careers
