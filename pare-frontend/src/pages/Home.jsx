import { HeroBg, HeroBg1, HeroBg2, HeroBgMobile, HeroBgMobile1, HeroBgMobile2 } from '../assets'
import Loader from '../components/Loader'
import {
  Hero,
  AboutSection,
  ProductsRange,
  InfiniteScroll,
  Portfolio,
  PareIndiaRotatingImg,
  Projects,
  NextProject,
  Qualities,
} from '../components/home'
import { useImagePreloader, useMediaQuery } from '../utils/custom-hooks'

const Home = () => {
  const imagesWeb = [HeroBg, HeroBg1, HeroBg2]
  const imagesMobile = [HeroBgMobile, HeroBgMobile1, HeroBgMobile2]
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { loading } = useImagePreloader(isMobile ? imagesMobile : imagesWeb)
  if (loading) return <Loader />
  return (
    <main>
      <Hero />
      <AboutSection />
      <ProductsRange />
      <InfiniteScroll />
      <Portfolio />
      <Qualities />
      <div className="bg-[#151515] text-white">
        <Projects />
        <NextProject />
        <PareIndiaRotatingImg />
      </div>
    </main>
  )
}

export default Home
