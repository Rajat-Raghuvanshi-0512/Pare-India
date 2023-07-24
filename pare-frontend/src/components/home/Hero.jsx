import { useState, useEffect, useCallback } from 'react'
import { HeroBg, HeroBg1, HeroBg2, HeroBgMobile, HeroBgMobile1, HeroBgMobile2 } from '../../assets'
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
const HeroMd = () => {
  const navigate = useNavigate()
  return (
    <section className="relative ml-10 mr-2 py-20">
      <div className="absolute top-[120px] z-10">
        <b className="flex w-[500px] items-center font-metropolis leading-[145%]">
          <span className="w-full text-4xl leading-snug">
            <span>FIRST AND INDIA&apos;S ONLY MANUFACTURER OF </span>
            <span className="text-red-base">SOFFIT SYSTEMS.</span>
          </span>
        </b>
        <p className="w-[230px] text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.
        </p>
        <Button className={'mt-5 !px-8'} variant="outlined" onClick={() => navigate('/contact')}>
          BUILD WITH US
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
                className="ml-auto !h-[350px] !w-[65vw] object-cover object-bottom"
                alt="bg-hero"
                key={el.imageLg}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
const HeroLg = () => {
  const navigate = useNavigate()
  return (
    <section className="relative ml-20 mr-5 h-screen pt-28 2xl:mx-40">
      <div className="absolute top-[120px] z-10">
        <b className="flex w-[700px] items-center font-metropolis leading-[145%]">
          <span className="mt-5 w-full text-[3.5rem] leading-snug">
            <span>FIRST AND INDIA&apos;S ONLY MANUFACTURER OF </span>
            <span className="text-red-base">SOFFIT SYSTEMS.</span>
          </span>
        </b>
        <p className="w-[300px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.
        </p>
        <Button className={'mt-5 !px-8'} variant="outlined" onClick={() => navigate('/contact')}>
          BUILD WITH US
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
                className="ml-auto !h-[450px] !w-[65vw] object-cover object-bottom"
                alt="bg-hero"
                key={el.imageLg}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

const Hero = () => {
  return (
    <>
      <div className="md:hidden">
        <HeroSm />
      </div>
      <div className="hidden md:block lg:hidden">
        <HeroMd />
      </div>
      <div className="hidden lg:block">
        <HeroLg />
      </div>
    </>
  )
}

export default Hero
