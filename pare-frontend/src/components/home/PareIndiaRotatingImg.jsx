import { useRef } from 'react'
import { InstaImg1, InstaImg2, InstaImg3, InstaImg4, InstaImg5, InstaImg6, InstaImg7, InstaImg8 } from '../../assets'
import { Img } from '../custom'

const images = [InstaImg1, InstaImg2, InstaImg3, InstaImg4, InstaImg5, InstaImg6, InstaImg7, InstaImg8]

const PareIndiaRotatingImgSm = () => {
  return null
}
const PareIndiaRotatingImgLg = () => {
  const ref = useRef()

  const getScrollOffset = (e) => {
    let xValue = e.clientX
    let yValue = e.clientY
    let windowHeight = window.innerHeight
    let windowWidth = window.innerWidth

    let mousePosX = -1 + (xValue / windowWidth) * 200
    let mousePosY = 1 - (yValue / windowHeight) * 100
    ref.current.style.transform = `translate3d(${-mousePosX + 100}px,${mousePosY + 100}px,0px)`
    ref.current.style.transition = ' all 0.4s'
  }
  return (
    <section className="relative flex h-[50vh] w-screen flex-col items-center justify-center overflow-hidden md:h-[140vh]">
      <div className="absolute left-[50%] top-[50%] w-[40%] -translate-x-[50%] text-center">
        <h1 className="font-metropolis text-2xl font-black md:text-4xl lg:text-7xl">@pare.india</h1>
        <p className="py-2 text-center font-helvetica text-sm opacity-60 md:text-base lg:text-lg">
          Follow @pare.india on Instagram to see our latest innovative designs and get inspired for your next project!
        </p>
      </div>
      <div
        className="circle-container z-30 flex h-[100vh] flex-col items-center justify-center"
        ref={ref}
        onMouseMove={getScrollOffset}
      >
        {images.map((im, idx) => {
          return <Img src={im} key={im + idx} className="" />
        })}
      </div>
    </section>
  )
}

const PareIndiaRotatingImg = () => {
  return (
    <div>
      <div className="md:hidden">
        <PareIndiaRotatingImgSm />
      </div>
      <div className="hidden md:block">
        <PareIndiaRotatingImgLg />
      </div>
    </div>
  )
}

export default PareIndiaRotatingImg
