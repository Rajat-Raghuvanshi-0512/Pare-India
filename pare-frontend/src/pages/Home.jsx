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
