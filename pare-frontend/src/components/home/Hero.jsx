import { useState, useEffect, useCallback } from 'react'
import {
  HeroBg,
  HeroBg1,
  HeroBg2,
  HeroBg3,
  HeroBg4,
  HeroBg5,
  HeroBgMobile,
  HeroBgMobile1,
  HeroBgMobile2,
  Stamp,
} from '../../assets'
import { Button } from '../custom'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper'

const HeroData = [
  {
    imageLg: HeroBg,
    headingRedText: 'Finest',
    headingWhiteText: 'Designs',
    smallText: 'Enhance Spaces',
    imageSm: HeroBgMobile,
  },
  {
    imageLg: HeroBg1,
    headingRedText: 'Indian',
    headingWhiteText: 'Pioneers',
    smallText: 'Global Innovators',
    imageSm: HeroBgMobile1,
  },
  {
    imageLg: HeroBg2,
    headingRedText: 'Elevate',
    headingWhiteText: 'Surfaces',
    smallText: 'Unmatched Quality',
    imageSm: HeroBgMobile2,
  },
  {
    imageLg: HeroBg3,
    headingRedText: 'Finest',
    headingWhiteText: 'Designs',
    smallText: 'Enhance Spaces',
    imageSm: HeroBgMobile,
  },
  {
    imageLg: HeroBg4,
    headingRedText: 'Indian',
    headingWhiteText: 'Pioneers',
    smallText: 'Global Innovators',
    imageSm: HeroBgMobile1,
  },
  {
    imageLg: HeroBg5,
    headingRedText: 'Elevate',
    headingWhiteText: 'Surfaces',
    smallText: 'Unmatched Quality',
    imageSm: HeroBgMobile2,
  },
]

const HeroSm = () => {
  const navigate = useNavigate()
  const [counter, setCounter] = useState(0)
  const handleNext = useCallback(() => {
    if (counter !== 2) {
      setCounter(counter + 1)
    } else {
      setCounter(0)
    }
  }, [counter])
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 3000)
    return () => clearInterval(interval)
  }, [handleNext])
  return (
    <>
      <section>
        <div className="absolute -z-10 h-screen w-full bg-gradient-to-r from-[#151515] to-transparent opacity-70"></div>
        <img
          src={HeroData[counter].imageSm}
          alt="bg-mobile"
          className={'absolute -z-20 h-screen w-full object-cover object-top'}
          key={HeroData[counter].imageSm}
        />
        <div className="flex h-screen flex-col items-start justify-center gap-8 px-5">
          <motion.div
            whileInView={{
              opacity: [0, 1],
              y: [-100, 0],
            }}
            transition={{ duration: 1.4 }}
            key={HeroData[counter].headingWhiteText}
            className="font-metropolis text-[2.8rem] font-bold text-white"
          >
            <span className="text-red-base">{HeroData[counter].headingRedText} </span>
            {HeroData[counter].headingWhiteText}
          </motion.div>
          <motion.p
            whileInView={{
              opacity: [0, 1],
            }}
            transition={{ duration: 1 }}
            className="font-metropolis text-3xl font-bold tracking-widest text-white"
            key={HeroData[counter].smallText}
          >
            {HeroData[counter].smallText}
          </motion.p>
          <Button className={'!px-10 !text-base'} onClick={() => navigate('/contact')}>
            BUILD WITH US
          </Button>
        </div>
      </section>
    </>
  )
}
const HeroLg = () => {
  const navigate = useNavigate()
  return (
    <section className="relative mr-5 overflow-clip pt-28 md:ml-5 lg:ml-20 lg:h-screen 2xl:mx-40">
      <div className="absolute top-[120px] z-10 2xl:top-[150px]">
        <b className="flex items-center font-metropolis leading-[145%] md:w-[550px] lg:w-[700px] 2xl:w-[800px]">
          <span className="mt-5 w-full uppercase leading-snug md:text-[3rem] lg:text-[3.5rem] 2xl:text-[4rem]">
            <span>
              TRANSFORM <br /> YOUR SPACES WITH{' '}
            </span>
            <br />
            <span className="upper text-red-base">PARE</span>
          </span>
        </b>
        {/* <p className=" md:w-[220px] lg:w-[300px] 2xl:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.
        </p> */}
        <Button className={'mt-5 !px-4 lg:!text-3xl'} variant="outlined" onClick={() => navigate('/contact')}>
          VIEW PROJECT
        </Button>
      </div>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        noSwiping={true}
        speed={800}
      >
        {HeroData.map((el, i) => {
          return (
            <SwiperSlide key={i} className="">
              <img
                src={el.imageLg}
                width={'1900'}
                height={'100'}
                className="ml-auto !h-[450px] !w-[65vw] object-cover object-bottom lg:!h-[430px] xl:!h-[510px] 2xl:!h-[600px] 2xl:!w-[60vw]"
                alt="bg-hero"
                key={el.imageLg}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <img src={Stamp} alt="stamp" className="absolute -right-5 bottom-2 w-40" />
    </section>
  )
}

const Hero = () => {
  return (
    <>
      <div className="md:hidden">
        <HeroSm />
      </div>
      <div className="hidden md:block">
        <HeroLg />
      </div>
    </>
  )
}

export default Hero
