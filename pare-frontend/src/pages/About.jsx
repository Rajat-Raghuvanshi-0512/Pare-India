import { Chair1000, Chair400, Chair700 } from '../assets'
import { LastSection } from '../components'
import Loader from '../components/Loader'
import { AboutUs, Vision } from '../components/about'
import { useImagePreloader } from '../utils/custom-hooks'

const About = () => {
  const { loading } = useImagePreloader([Chair1000, Chair400, Chair700])
  if (loading) return <Loader />
  return (
    <main>
      <div className="p-5 pt-20 md:p-10 lg:p-20 2xl:px-40">
        <AboutUs />
      </div>
      <Vision />
      <LastSection />
    </main>
  )
}

export default About
