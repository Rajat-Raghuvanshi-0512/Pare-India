import { useSwiper } from 'swiper/react'
import { NextArrow, PrevArrow } from '../../assets'
import { Img } from '../custom'

const SliderNavigation = () => {
  const swiper = useSwiper()
  console.log(swiper)
  return (
    <div className=" hidden justify-between md:flex">
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
  )
}

export default SliderNavigation
