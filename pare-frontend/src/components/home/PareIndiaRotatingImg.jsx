import {
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

const images = [
  PortfolioImg1,
  PortfolioImg2,
  PortfolioImg3,
  PortfolioImg4,
  PortfolioImg5,
  PortfolioImg6,
  PortfolioImg7,
  PortfolioImg8,
]
const PareIndiaRotatingImg = () => {
  return (
    <section className="flex flex-col items-center justify-center md:h-[140vh]">
      <div className="circle-container flex h-[100vh] flex-col items-center justify-center">
        <h1 className="font-metropolis text-2xl font-black md:text-4xl lg:text-7xl">@pare.india</h1>
        <p className="py-2 text-center font-helvetica text-sm opacity-60 md:text-base lg:text-lg">
          Follow @pare.india on Instagram to see our latest <br /> innovative designs and get inspired for your next{' '}
          <br /> project!
        </p>
        {images.map((im, idx) => {
          return <Img src={im} key={im + idx} className="!hidden md:!block" />
        })}
      </div>
    </section>
  )
}

export default PareIndiaRotatingImg
