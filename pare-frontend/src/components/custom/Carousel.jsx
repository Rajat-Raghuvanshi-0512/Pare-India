import { useEffect } from 'react'
import { useState } from 'react'

const Carousel = ({ images = [], left = false }) => {
  const [activeImg, setactiveImg] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      if (activeImg >= 2) {
        setactiveImg(0)
      } else {
        setactiveImg(activeImg + 1)
      }
    }, 3000)
  }, [activeImg])
  return (
    <div id="default-carousel" className="relative z-[1] h-full w-full">
      <div className="relative h-full overflow-hidden">
        {images.map((image, i) => (
          <div
            className={`absolute inset-0 -z-50 transform transition-all duration-700  ease-in-out  ${
              i === activeImg
                ? 'translate-x-0'
                : left
                ? i < activeImg
                  ? '-translate-x-full'
                  : 'translate-x-full duration-200'
                : i < activeImg
                ? 'translate-x-full'
                : '-translate-x-full duration-200'
            }`}
            key={i}
          >
            <img
              src={image}
              className="absolute left-1/2 top-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-90"
              alt="carousel"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
