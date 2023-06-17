import { useSwiper } from 'swiper/react'
import { LeftArrow, LeftArrowMobile, RightArrow, RightArrowMobile } from '../../assets'
import { Img } from '../custom'

const TestimonialSlider = ({ testmonialActiveNo }) => {
  const swiper = useSwiper()
  return (
    <div>
      <div className="flex items-center justify-center gap-5">
        <Img
          src={LeftArrow}
          alt={'larrow'}
          width={40}
          height={10}
          className={'hidden cursor-pointer md:block'}
          onClick={() => swiper.slidePrev()}
        />
        <div className="font-metropolis text-base font-light md:text-xl">0{testmonialActiveNo + 1}/02</div>
        <Img
          src={RightArrow}
          alt={'rarrow'}
          width={40}
          height={10}
          className={'hidden cursor-pointer md:block'}
          onClick={() => swiper.slideNext()}
        />
      </div>
      <div className="md:hidden">
        <Img
          src={LeftArrowMobile}
          alt={'prev'}
          width={20}
          height={20}
          className={'absolute left-4 top-[45%] z-20'}
          onClick={() => swiper.slidePrev()}
        />
        <Img
          src={RightArrowMobile}
          alt={'prev'}
          width={20}
          height={20}
          className={'absolute right-4 top-[45%] z-20 '}
          onClick={() => swiper.slideNext()}
        />
      </div>
    </div>
  )
}

export default TestimonialSlider
