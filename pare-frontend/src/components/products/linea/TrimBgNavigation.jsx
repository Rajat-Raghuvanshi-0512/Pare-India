import { useState } from 'react'
import { useSwiper } from 'swiper/react'

const TrimBgNavigation = () => {
  const swiper = useSwiper()
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div>
      <div className="z-20 mt-5 grid grid-cols-3 gap-5">
        <div>
          <div
            className={`${
              currentIndex === 0 && 'border-2 border-white'
            } h-12 w-12 rounded-full bg-red-base md:h-14 md:w-14 lg:h-16 lg:w-16`}
            onClick={() => {
              setCurrentIndex(0)
              swiper.slideTo(0)
            }}
          ></div>
          <p className="pt-2 text-center text-xs md:text-sm">J TRIM</p>
        </div>
        <div>
          <div
            className={`${
              currentIndex === 1 && 'border-2 border-white'
            } h-12 w-12 rounded-full bg-red-base md:h-14 md:w-14 lg:h-16 lg:w-16`}
            onClick={() => {
              setCurrentIndex(1)
              swiper.slideTo(1)
            }}
          ></div>
          <p className="pt-2 text-center text-xs md:text-sm">
            J TRIM <br /> LARGE
          </p>
        </div>
        <div>
          <div
            className={`${
              currentIndex === 2 && 'border-2 border-white'
            } h-12 w-12 rounded-full bg-red-base md:h-14 md:w-14 lg:h-16 lg:w-16`}
            onClick={() => {
              setCurrentIndex(2)
              swiper.slideTo(2)
            }}
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
