import { useSwiper } from 'swiper/react'

const TrimBgNavigation = () => {
  const swiper = useSwiper()
  return (
    <div>
      <div className="z-20 mt-5 grid grid-cols-3 gap-5">
        <div>
          <div
            className="h-12 w-12 rounded-full bg-red-base md:h-14 md:w-14 lg:h-16 lg:w-16"
            onClick={() => swiper.slideTo(0)}
          ></div>
          <p className="pt-2 text-center text-xs md:text-sm">J TRIM</p>
        </div>
        <div>
          <div
            className="h-12 w-12 rounded-full bg-red-base md:h-14 md:w-14 lg:h-16 lg:w-16"
            onClick={() => swiper.slideTo(1)}
          ></div>
          <p className="pt-2 text-center text-xs md:text-sm">
            J TRIM <br /> LARGE
          </p>
        </div>
        <div>
          <div
            className="h-12 w-12 rounded-full bg-red-base md:h-14 md:w-14 lg:h-16 lg:w-16"
            onClick={() => swiper.slideTo(2)}
          ></div>
          <p className="pt-2 text-center text-xs md:text-sm">
            J TRIM <br /> PRO
          </p>
        </div>
      </div>
    </div>
  )
}

export default TrimBgNavigation
