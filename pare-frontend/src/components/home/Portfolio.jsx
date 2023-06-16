import { useEffect, useRef } from 'react'
import {
  PortfolioBg,
  PortfolioImg1,
  PortfolioImg2,
  PortfolioImg3,
  PortfolioImg4,
  PortfolioImg5,
  PortfolioImg6,
  PortfolioImg7,
  PortfolioImg8,
} from '../../assets'
import { Img } from '../custom'

const slider1 = [
  PortfolioImg1,
  PortfolioImg2,
  PortfolioImg3,
  PortfolioImg4,
  PortfolioImg5,
  PortfolioImg6,
  PortfolioImg7,
  PortfolioImg8,
  PortfolioImg1,
  PortfolioImg2,
  PortfolioImg3,
]
const slider2 = [
  PortfolioImg1,
  PortfolioImg2,
  PortfolioImg3,
  PortfolioImg4,
  PortfolioImg5,
  PortfolioImg6,
  PortfolioImg7,
  PortfolioImg1,
  PortfolioImg2,
  PortfolioImg3,
]

const Portfolio = () => {
  const slider1Ref = useRef()
  const slider2Ref = useRef()

  const getScrollOffset = () => {
    slider1Ref.current.style.transform = `translateX(${window.pageYOffset.toFixed(1) / 2}px)`
    slider2Ref.current.style.transform = `translateX(-${window.pageYOffset.toFixed(1) / 2}px)`
    slider1Ref.current.style.transition = ' all 0.4s'
    slider2Ref.current.style.transition = ' all 0.4s'
  }
  useEffect(() => {
    window.addEventListener('scroll', getScrollOffset, { passive: true })
    return () => window.removeEventListener('scroll', getScrollOffset, { passive: true })
  }, [])
  return (
    <section className="relative">
      <div className="z-10 mx-3 my-5 grid grid-cols-2 gap-4 md:m-10 lg:m-16 2xl:mx-40">
        <Img src={PortfolioBg} alt={'bg'} className={'absolute -top-20 left-0 -z-20  h-[120%] w-full object-cover'} />
        <div className="font-metropolis text-lg uppercase !leading-snug md:text-4xl lg:text-5xl">
          Explore our portfolio and discover some of our <span className="font-bold text-red-base">PAST WORK</span>
        </div>
        <div className="flex items-end font-helvetica text-xs  leading-[14px] md:text-xl lg:text-3xl">
          PARÉ has completed numerous innovative and world-class projects across the globe, showcasing our expertise in
          building materials and interior decor. Browse through our portfolio to see how we can help bring your vision
          to life.
        </div>
      </div>
      <div className="-my-40 w-[200vw] origin-left scale-50 overflow-x-hidden md:my-0 md:w-[110vw] md:scale-90">
        <div
          className="relative -left-[400vw] flex items-end gap-10 md:-left-[150vw] md:max-w-[450px]"
          ref={slider1Ref}
        >
          {slider1.map((slide, idx) => (
            <img src={slide} alt="slide" key={slide + idx} className="object-contain" />
          ))}
        </div>
        <div className="relative my-10 flex items-start gap-10 md:-left-[-20vw] md:max-w-[450px]" ref={slider2Ref}>
          {slider2.map((slide, idx) => (
            <img src={slide} alt="slide" key={slide + idx} className="" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
