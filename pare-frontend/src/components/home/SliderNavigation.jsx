import { useSwiper } from 'swiper/react'
import { LeftArrowMobile, RightArrowMobile, NextArrowProject, PrevArrowProject } from '../../assets'
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
      <div className="z-20 hidden h-20 items-center justify-between overflow-visible pb-5 md:flex">
        <div
          className="project-btn flex cursor-pointer items-center duration-200 hover:scale-125"
          onClick={() => swiper.slidePrev()}
        >
          <div className="h-14 w-14 translate-x-[50%] rounded-full border"></div>
          <Img src={PrevArrowProject} alt={'prev'} width={80} height={80} className={' object-contain '} />
        </div>
        <div
          className="project-btn flex cursor-pointer items-center duration-200 hover:scale-125"
          onClick={() => swiper.slideNext()}
        >
          <Img src={NextArrowProject} alt={'prev'} width={80} height={80} className={' object-contain '} />
          <div className="h-14 w-14 -translate-x-[50%] rounded-full border"></div>
        </div>
      </div>
    </div>
  )
}

export default SliderNavigation
