import { JLarge, TrimWoodBg1 } from '../../../assets'
import { Img } from '../../custom'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/bundle'
import 'swiper/css'
import TrimBgNavigation from './TrimBgNavigation'
const images = [TrimWoodBg1, TrimWoodBg1, TrimWoodBg1]

const Trims = () => {
  return (
    <div className="relative  h-[400px] w-full font-montserrat text-white md:h-[500px]">
      <Swiper spaceBetween={0} slidesPerView={1} className="z-auto h-[400px] w-full md:h-[500px] 2xl:px-40">
        {images.map((image, idx) => (
          <SwiperSlide className="!-z-50" key={image + idx}>
            <img
              src={image}
              alt={'bg'}
              width={300}
              height={300}
              className={'absolute left-0 top-0 !-z-50 h-full w-full object-cover'}
            />
          </SwiperSlide>
        ))}
        <Img
          alt={'bg'}
          src={JLarge}
          className={'absolute right-0 top-10 z-10 w-[70%] object-cover md:top-10 md:h-full md:w-[60%]'}
        />
        <div className="absolute top-0 !z-10 text-center">
          <h2 className="py-5 text-3xl font-bold md:py-10 md:text-4xl lg:text-5xl">AVAILABLE TRIMS</h2>
          <p className="px-5 text-xs font-medium md:mx-32 md:text-xl">
            Our trims are the key to achieving a seamless and flawless look that radiates sophistication.
          </p>
        </div>
        <div className="absolute top-32 z-10 m-5 mt-auto flex h-[60%] w-fit flex-col justify-end md:top-44 md:m-14 md:h-full md:justify-start">
          <h5 className="text-center font-metropolis text-2xl font-bold uppercase lg:text-3xl">trim options</h5>
          <TrimBgNavigation />
        </div>
      </Swiper>
    </div>
  )
}

export default Trims
