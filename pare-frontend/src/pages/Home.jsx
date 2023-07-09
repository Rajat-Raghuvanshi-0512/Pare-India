import { Suspense } from 'react'
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
import Loader from '../components/Loader'

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  )
}

export default Home
