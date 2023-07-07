import { Chair1000, Chair700 } from '../assets'
import { LastSection } from '../components'
import { Loader } from '../components'
import { AboutUs, Vision } from '../components/about'
import { useImagePreloader, useMediaQuery } from '../utils/custom-hooks'

const About = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { loading } = useImagePreloader(isMobile ? [Chair700] : [Chair1000])
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
