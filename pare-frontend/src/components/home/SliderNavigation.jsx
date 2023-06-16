import { useSwiper } from 'swiper/react'
import { NextArrow, PrevArrow, LeftArrowMobile, RightArrowMobile } from '../../assets'
import { Img } from '../custom'

const SliderNavigation = () => {
  const swiper = useSwiper()
  return (
    <div>
      <div className="md:hidden">
        <Img
          src={LeftArrowMobile}
          alt={'prev'}
          width={20}
          height={20}
          className={'absolute left-0 top-[45%] z-20'}
          onClick={() => swiper.slidePrev()}
        />
        <Img
          src={RightArrowMobile}
          alt={'prev'}
          width={20}
          height={20}
          className={'absolute right-0 top-[45%] z-20 '}
          onClick={() => swiper.slideNext()}
        />
      </div>
      <div className="hidden justify-between md:flex">
        <Img
          src={PrevArrow}
          alt={'prev'}
          width={100}
          height={100}
          className={'cursor-pointer duration-200 hover:scale-95'}
          onClick={() => swiper.slidePrev()}
        />
        <Img
          src={NextArrow}
          alt={'prev'}
          width={100}
          height={100}
          className={'cursor-pointer duration-200 hover:scale-95'}
          onClick={() => swiper.slideNext()}
        />
      </div>
    </div>
  )
}

export default SliderNavigation
