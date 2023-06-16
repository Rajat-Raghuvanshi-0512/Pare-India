import {
  PlayIcon,
  Project1Img,
  Project2Img,
  Project3Img,
  Project4Img,
  Project5Img,
  testVideo1,
  testVideo2,
  testVideo3,
} from '../../assets'
import { Img } from '../custom'
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/bundle'
import 'swiper/css'
import { useMediaQuery } from '../../custom-hooks'
import { useState } from 'react'
import { useEffect } from 'react'
import SliderNavigation from './SliderNavigation'
import TestimonialSlider from './TestimonialSlider'

const projectImages = [Project1Img, Project2Img, Project3Img, Project4Img, Project5Img]

const Projects = () => {
  const [testState, setTestState] = useState({
    test1: false,
    test2: false,
    test3: false,
  })
  const largeDevice = useMediaQuery('(min-width: 768px)')
  const [testmonialActiveNo, settestmonialActive] = useState(0)
  const [projectsActiveNo, setprojectsActiveNo] = useState(0)
  const [projectsSwiperControler, setProjectsSwiperControler] = useState(null)
  useEffect(() => {
    console.log(projectsSwiperControler)
  }, [projectsSwiperControler])
  return (
    <section className="p-5 md:p-10 lg:px-20 ">
      <div className="flex justify-between">
        <div className="font-metropolis">
          <div className="text-3xl font-bold uppercase md:text-4xl lg:text-5xl">Projects</div>
          <p className="mb-8 mt-3 text-xs md:mb-0 md:w-60 md:text-base lg:w-80">
            Browse through and see how we have transformed spaces and exceeded our client&apos;s expectations, one
            project at a time.
          </p>
        </div>
        <div className="hidden font-metropolis font-light md:block md:text-lg lg:text-xl">
          0{projectsActiveNo + 1}/03
        </div>
      </div>

      <hr className="hidden md:m-5 md:block lg:m-8" />
      <Swiper
        spaceBetween={50}
        slidesPerView={largeDevice ? 3 : 1}
        onSwiper={setProjectsSwiperControler}
        onSlideChange={(swiper) => {
          setprojectsActiveNo(swiper.activeIndex)
        }}
      >
        {projectImages.map((image) => (
          <SwiperSlide className="!flex !items-center !justify-center" key={image}>
            <Img src={image} alt={'project'} width={300} height={300} className={' md:h-full md:w-full'} />
          </SwiperSlide>
        ))}

        <hr className="hidden md:m-5 md:block lg:m-8" />
        <SliderNavigation />
      </Swiper>
      <div className="mt-5 text-center font-metropolis font-light md:hidden">0{projectsActiveNo + 1}/05</div>

      <div className="mt-10 flex flex-col justify-between gap-5 md:flex-row md:gap-10 lg:gap-20">
        <div className="flex-1 font-metropolis text-3xl !leading-snug md:text-4xl lg:text-5xl">
          WHAT OUR <span className="font-bold text-red-base">CLIENTS</span> HAVE TO SAY ABOUT US
        </div>
        <div className="ml-20 mr-5 flex flex-1 items-end text-right font-helvetica text-xs font-light md:mx-0 md:text-xl lg:text-3xl">
          Browse through our client testimonials to hear first-hand accounts of our quality products and exceptional
          customer service.
        </div>
      </div>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            settestmonialActive(swiper.activeIndex)
          }}
        >
          <SwiperSlide
            onClick={() => setTestState((prev) => ({ test1: !prev.test1, test2: false, test3: false }))}
            className="realtive"
          >
            {testState.test1 === false && (
              <div className="absolute left-5 z-10 mx-auto my-5 flex h-[200px] w-[90%] items-center justify-center bg-black-base bg-opacity-30 text-white md:left-14 md:my-10 md:h-[400px] lg:h-[500px]">
                <Img src={PlayIcon} alt={'play'} className={'h-20 w-20'} />
              </div>
            )}
            <ReactPlayer
              width="100%"
              height="500"
              url={testVideo1}
              className={`mx-auto my-5 h-[200px] md:my-10 md:h-[400px] lg:h-[500px]`}
              title="test1"
              playing={testState.test1}
            />
          </SwiperSlide>
          <SwiperSlide onClick={() => setTestState((prev) => ({ test2: !prev.test2, test1: false, test3: false }))}>
            {testState.test2 === false && (
              <div className="absolute left-5 z-10 mx-auto my-5 mr-10 flex h-[200px] w-[90%] items-center justify-center bg-black-base bg-opacity-30 text-white md:left-14 md:my-10 md:h-[400px] lg:h-[500px]">
                <Img src={PlayIcon} alt={'play'} className={'h-20 w-20'} />
              </div>
            )}
            <ReactPlayer
              width="100%"
              height="500"
              url={testVideo2}
              className="mx-auto my-5 h-[200px] md:my-10 md:h-[400px] lg:h-[500px]"
              title="test1"
              playing={testState.test2}
            />
          </SwiperSlide>
          <SwiperSlide onClick={() => setTestState((prev) => ({ test3: !prev.test3, test2: false, test1: false }))}>
            {testState.test3 === false && (
              <div className="absolute left-5 z-10  mx-auto my-5 flex h-[200px] w-[90%] items-center justify-center bg-black-base bg-opacity-30 text-white md:left-14 md:my-10 md:h-[400px] lg:h-[500px]">
                <Img src={PlayIcon} alt={'play'} className={'h-20 w-20'} />
              </div>
            )}
            <ReactPlayer
              width="100%"
              height="500"
              url={testVideo3}
              className="mx-auto my-5 h-[200px] md:my-10 md:h-[400px] lg:h-[500px]"
              title="test1"
              playing={testState.test3}
            />
          </SwiperSlide>
          <TestimonialSlider testmonialActiveNo={testmonialActiveNo} />
        </Swiper>
      </div>
    </section>
  )
}

export default Projects
