import {
  HeroBg,
  HeroBg1,
  HeroBg2,
  HeroBgMobile,
  HeroBgMobile1,
  HeroBgMobile1_400,
  HeroBgMobile1_800,
  HeroBgMobile2,
  HeroBgMobile2_400,
  HeroBgMobile2_800,
  HeroBgMobile_400,
  HeroBgMobile_800,
} from '../../assets'
import { Button } from '../custom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from '../../utils/custom-hooks'

const HeroSm = ({ counter }) => {
  const navigate = useNavigate()
  return (
    <>
      <section className={counter !== 0 ? 'hidden' : ''}>
        <div className="absolute -z-10 h-screen w-full bg-gradient-to-r from-[#151515] to-transparent opacity-70"></div>
        <img
          src={HeroBgMobile}
          srcSet={`${HeroBgMobile_400} 400w,${HeroBgMobile_800} 700w ,${HeroBgMobile} 1000w`}
          alt="bg-mobile"
          className={'absolute -z-20 h-screen w-full object-cover object-top'}
        />
        <div className="flex h-screen flex-col items-start justify-center gap-8 px-5">
          <motion.div
            whileInView={{
              opacity: [0, 1],
              y: [-100, 0],
            }}
            transition={{ duration: 1 }}
            className="font-metropolis text-5xl font-bold text-white"
          >
            <span className="text-red-base">Finest</span> Designs
          </motion.div>
          <motion.p
            whileInView={{
              opacity: [0, 1],
            }}
            transition={{ duration: 1 }}
            className="font-metropolis text-3xl font-bold tracking-widest text-white sm:text-4xl"
          >
            Enhance Spaces
          </motion.p>
          <Button className={'!px-10 !text-base'} onClick={() => navigate('/contact')}>
            BUILD WITH US
          </Button>
        </div>
      </section>
      <section className={counter !== 1 ? 'hidden' : ''}>
        <div className="absolute -z-10 h-screen w-full bg-gradient-to-r from-[#151515] to-transparent opacity-70"></div>
        <img
          src={HeroBgMobile1}
          alt="bg-mobile"
          srcSet={`${HeroBgMobile1_400} 400w,${HeroBgMobile1_800} 700w ,${HeroBgMobile1} 1000w`}
          className={'absolute -z-20 h-screen w-full object-cover object-top'}
        />
        <div className="flex h-screen flex-col items-start justify-center gap-8 px-5">
          <motion.div
            whileInView={{
              opacity: [0, 1],
              y: [-100, 0],
            }}
            transition={{ duration: 1 }}
            className="font-metropolis text-5xl font-bold text-white"
          >
            <span className="text-red-base drop-shadow-md">Indian</span> Pioneers
          </motion.div>
          <motion.p
            whileInView={{
              opacity: [0, 1],
            }}
            transition={{ duration: 1 }}
            className="font-metropolis text-3xl font-bold tracking-widest text-white sm:text-4xl"
          >
            Global Innovators
          </motion.p>
          <Button className={'!px-10 !text-base'} onClick={() => navigate('/contact')}>
            BUILD WITH US
          </Button>
        </div>
      </section>
      <section className={counter !== 2 ? 'hidden' : ''}>
        <div className="absolute -z-10 h-screen w-full bg-gradient-to-r from-[#151515] to-transparent opacity-70"></div>
        <img
          src={HeroBgMobile2}
          srcSet={`${HeroBgMobile2_400} 400w,${HeroBgMobile2_800} 700w ,${HeroBgMobile2} 1000w`}
          alt="bg-mobile"
          className={'absolute -z-20 h-screen w-full object-cover object-top'}
        />
        <div className="flex h-screen flex-col items-start justify-center gap-8 px-5">
          <motion.div
            whileInView={{
              opacity: [0, 1],
              y: [-100, 0],
            }}
            transition={{ duration: 1 }}
            className="font-metropolis text-5xl font-bold text-white"
          >
            <span className="text-red-base">Elevate</span> Surfaces
          </motion.div>
          <motion.p
            whileInView={{
              opacity: [0, 1],
            }}
            transition={{ duration: 1 }}
            className="font-metropolis text-3xl font-bold tracking-widest text-white sm:text-4xl"
          >
            Unmatched Quality
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
    <section>
      <div className="absolute -z-10 h-screen w-full bg-gradient-to-r from-[#151515] to-transparent opacity-50"></div>
      <img
        src={HeroBg}
        width={'1900'}
        height={'100'}
        className={'absolute -z-20 h-screen w-full object-cover object-top'}
        alt="bg-hero"
      />
      <div className="flex h-screen flex-col items-start justify-center gap-5 px-20">
        <motion.div
          whileInView={{
            opacity: [0, 1],
            y: [-100, 0],
          }}
          transition={{ duration: 1 }}
          className="font-metropolis font-bold text-white drop-shadow md:text-5xl"
        >
          <span className="text-red-base">Finest</span> Designs
        </motion.div>
        <motion.p
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{ duration: 1 }}
          className="font-metropolis text-3xl font-bold tracking-widest text-white"
        >
          Enhance Spaces
        </motion.p>
        <Button className={'!px-8'} onClick={() => navigate('/contact')}>
          BUILD WITH US
        </Button>
      </div>
    </section>
  )
}
const HeroLg = ({ counter }) => {
  const navigate = useNavigate()
  return (
    <>
      <section className={counter !== 0 ? 'hidden' : ''}>
        <div>
          <div className="absolute -z-10 h-screen w-full bg-gradient-to-r from-[#151515] to-transparent opacity-50"></div>
          <img
            src={HeroBg}
            width={'1900'}
            height={'100'}
            className={'absolute -z-20  h-screen w-full object-cover object-bottom'}
            alt="hero-bg"
          />
        </div>
        <div className="flex h-screen flex-col items-start justify-center gap-5 px-20 2xl:mx-60 2xl:scale-125">
          <motion.div
            whileInView={{
              opacity: [0, 1],
              y: [-100, 0],
            }}
            transition={{ duration: 1 }}
            className="font-metropolis font-bold text-white drop-shadow md:text-5xl lg:text-6xl"
          >
            <span className="text-red-base">Finest</span> Designs
          </motion.div>
          <motion.p
            whileInView={{
              opacity: [0, 1],
            }}
            transition={{ duration: 1 }}
            className="font-metropolis text-4xl font-bold tracking-widest text-white"
          >
            Enhance Spaces
          </motion.p>
          <Button className={'!px-8'} onClick={() => navigate('/contact')}>
            BUILD WITH US
          </Button>
        </div>
      </section>
      <section className={counter !== 1 ? 'hidden' : 'fade'}>
        <div>
          <div className="absolute -z-10 h-screen w-full bg-gradient-to-r from-[#151515] to-transparent opacity-20"></div>
          <img
            src={HeroBg1}
            width={'1900'}
            height={'100'}
            className={'absolute -z-20  h-screen w-full object-cover object-bottom'}
            alt="hero-bg"
          />
        </div>
        <div className="flex h-screen flex-col items-start justify-center gap-5 px-20 2xl:mx-60 2xl:scale-125">
          <motion.div
            whileInView={{
              opacity: [0, 1],
              y: [-100, 0],
            }}
            transition={{ duration: 1 }}
            className="font-metropolis font-bold text-white drop-shadow md:text-5xl lg:text-6xl"
          >
            <span className="text-red-base">Indian</span> Pioneers
          </motion.div>
          <motion.p
            whileInView={{
              opacity: [0, 1],
            }}
            transition={{ duration: 1 }}
            className="font-metropolis text-4xl font-bold tracking-widest text-white"
          >
            Global Innovators
          </motion.p>
          <Button className={'!px-8'} onClick={() => navigate('/contact')}>
            BUILD WITH US
          </Button>
        </div>
      </section>
      <section className={counter !== 2 ? 'hidden' : 'fade'}>
        <div>
          <div className="absolute -z-10 h-screen w-full bg-gradient-to-r from-[#151515] to-transparent opacity-80"></div>
          <img
            src={HeroBg2}
            width={'1900'}
            height={'100'}
            className={'absolute -z-20  h-screen w-full object-cover object-bottom'}
            alt="hero-bg"
          />
        </div>
        <div className="flex h-screen flex-col items-start justify-center gap-5 px-20 2xl:mx-60 2xl:scale-125">
          <motion.div
            whileInView={{
              opacity: [0, 1],
              y: [-100, 0],
            }}
            transition={{ duration: 1 }}
            className="font-metropolis font-bold text-white drop-shadow md:text-5xl lg:text-6xl"
          >
            <span className="text-red-base">Elevate</span> Surfaces
          </motion.div>
          <motion.p
            whileInView={{
              opacity: [0, 1],
            }}
            transition={{ duration: 1 }}
            className="font-metropolis text-4xl font-bold tracking-widest text-white"
          >
            Unmatched Quality
          </motion.p>
          <Button className={'!px-8'} onClick={() => navigate('/contact')}>
            BUILD WITH US
          </Button>
        </div>
      </section>
    </>
  )
}

const Hero = () => {
  const [counter, setCounter] = useState(0)
  const isLaptop = useMediaQuery('(min-width: 768px)')

  const handleNext = () => {
    if (counter !== 2) {
      setCounter(counter + 1)
    } else {
      setCounter(0)
    }
  }
  useEffect(() => {
    let interval = setInterval(() => {
      handleNext()
    }, 3000)
    return () => clearInterval(interval)
  })
  if (isLaptop) {
    return (
      <>
        <div className="hidden md:block lg:hidden">
          <HeroMd counter={counter} />
        </div>
        <div className="hidden lg:block">
          <HeroLg counter={counter} />
        </div>
      </>
    )
  }
  return (
    <div className="md:hidden">
      <HeroSm counter={counter} />
    </div>
  )
}

export default Hero
