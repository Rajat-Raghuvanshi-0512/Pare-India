import { Suspense } from 'react'
import { LastSection } from '../components'
import { ResourceSection1, ResourcesSection2 } from '../components/resources'
import Loader from '../components/Loader'

const Resources = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ResourceSection1 />
      <ResourcesSection2 />
      <LastSection />
    </Suspense>
  )
}

export default Resources
