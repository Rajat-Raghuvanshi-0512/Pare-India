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

const Home = () => {
  return (
    <>
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
    </>
  )
}

export default Home
