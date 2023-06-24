import { HeroBg, HeroBg1, HeroBg2, HeroBgMobile, HeroBgMobile1, HeroBgMobile2, InnovText } from '../../assets'
import { Button, Img } from '../custom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const HeroSm = ({ counter }) => {
  const navigate = useNavigate()
  return (
    <>
      <section className={counter !== 0 ? 'hidden' : ''}>
        <div className="absolute -z-10 h-[100vh] w-full bg-gradient-to-r from-[#151515] to-transparent opacity-70"></div>
        <img src={HeroBgMobile} alt="bg-mobile" className={'absolute -z-20 h-screen w-full object-cover object-top'} />
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
        <div className="absolute -z-10 h-[100vh] w-full bg-gradient-to-r from-[#151515] to-transparent opacity-70"></div>
        <img src={HeroBgMobile1} alt="bg-mobile" className={'absolute -z-20 h-screen w-full object-cover object-top'} />
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
        <div className="absolute -z-10 h-[100vh] w-full bg-gradient-to-r from-[#151515] to-transparent opacity-70"></div>
        <img src={HeroBgMobile2} alt="bg-mobile" className={'absolute -z-20 h-screen w-full object-cover object-top'} />
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
      <div className="absolute -z-10 h-[100vh] w-full bg-gradient-to-r from-[#151515] to-transparent opacity-50"></div>
      <img
        src={HeroBg}
        width={'1900'}
        height={'100'}
        className={'absolute -z-20 h-screen w-full object-cover object-top'}
        alt="bg-hero"
      />
      <div className="flex h-screen flex-col items-start justify-center gap-5 px-20">
        <Img src={InnovText} width={'350'} height={'100'} alt="hero-text" />
        <motion.p
          whileInView={{
            opacity: [0, 1],
          }}
          className="font-metropolis text-4xl font-bold tracking-widest text-white"
        >
          Global Innovators
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
          <div className="absolute -z-10 h-[100vh] w-full bg-gradient-to-r from-[#151515] to-transparent opacity-50"></div>
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
          <div className="absolute -z-10 h-[100vh] w-full bg-gradient-to-r from-[#151515] to-transparent opacity-20"></div>
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
          <div className="absolute -z-10 h-[100vh] w-full bg-gradient-to-r from-[#151515] to-transparent opacity-80"></div>
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
  return (
    <div>
      <Helmet>
        <link rel="preload" as="image" href={HeroBg} />
        <link rel="preload" as="image" href={HeroBg1} />
        <link rel="preload" as="image" href={HeroBg2} />
        <link rel="preload" as="image" href={HeroBgMobile} />
        <link rel="preload" as="image" href={HeroBgMobile1} />
        <link rel="preload" as="image" href={HeroBgMobile2} />
      </Helmet>
      <div className="md:hidden">
        <HeroSm counter={counter} />
      </div>
      <div className="hidden md:block lg:hidden">
        <HeroMd counter={counter} />
      </div>
      <div className="hidden lg:block">
        <HeroLg counter={counter} />
      </div>
    </div>
  )
}

export default Hero
