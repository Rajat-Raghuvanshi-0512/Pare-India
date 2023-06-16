import { HeroBg, HeroBg1, HeroBg2, HeroBgMobile, InnovText } from '../../assets'
import { Button, Img } from '../custom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const HeroSm = () => {
  return (
    <section>
      <div className="absolute -z-10 h-[100vh] w-full bg-gradient-to-r from-[#151515] to-transparent opacity-50"></div>
      <Img src={HeroBgMobile} alt="bg-mobile" className={'absolute -z-20 h-screen w-full object-cover object-top'} />
      <div className="flex h-screen flex-col items-start justify-center gap-8 px-5">
        <Img src={InnovText} alt="text" width={'250'} height={'100'} className={'object-contain  sm:w-[22rem]'} />
        <p className="font-metropolis text-3xl font-bold tracking-widest text-white sm:text-4xl">INNOVATIVE SURFACES</p>
        <Button className={'!px-8'}>BUILD WITH US</Button>
      </div>
    </section>
  )
}
const HeroMd = () => {
  return (
    <section>
      <div className="absolute -z-10 h-[100vh] w-full bg-gradient-to-r from-[#151515] to-transparent opacity-50"></div>
      <Img
        src={HeroBg}
        width={'1900'}
        height={'100'}
        className={'absolute -z-20 h-screen w-full object-cover object-top'}
        alt="bg-hero"
      />
      <div className="flex h-screen flex-col items-start justify-center gap-5 px-20">
        <Img src={InnovText} width={'350'} height={'100'} alt="hero-text" />
        <p className="text-4xl font-bold tracking-widest text-white">INNOVATIVE SURFACES</p>
        <Button className={'!px-8'}>BUILD WITH US</Button>
      </div>
    </section>
  )
}
const HeroLg = () => {
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
    <>
      <section className={counter !== 0 ? 'hidden' : 'fade'}>
        <div>
          <div className="absolute -z-10 h-[100vh] w-full bg-gradient-to-r from-[#151515] to-transparent opacity-50"></div>
          <Img
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
          >
            <Img src={InnovText} width={'350'} height={'100'} alt="hero-text" />
          </motion.div>
          <p className="text-4xl font-bold tracking-widest text-white">INNOVATIVE SURFACES</p>
          <Button className={'!px-8'}>BUILD WITH US</Button>
        </div>
      </section>
      <section className={counter !== 1 ? 'hidden' : 'fade'}>
        <div>
          <div className="absolute -z-10 h-[100vh] w-full bg-gradient-to-r from-[#151515] to-transparent opacity-20"></div>
          <Img
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
          >
            <Img src={InnovText} width={'350'} height={'100'} alt="hero-text" />
          </motion.div>
          <p className="text-4xl font-bold tracking-widest text-white">INNOVATIVE SURFACES</p>
          <Button className={'!px-8'}>BUILD WITH US</Button>
        </div>
      </section>
      <section className={counter !== 2 ? 'hidden' : 'fade'}>
        <div>
          <div className="absolute -z-10 h-[100vh] w-full bg-gradient-to-r from-[#151515] to-transparent opacity-80"></div>
          <Img
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
            className="font-metropolis font-bold text-white md:text-5xl lg:text-6xl"
          >
            <span className="text-red-base">INDIA’S</span> BEST
          </motion.div>
          <p className="font-metropolis text-4xl font-bold tracking-widest text-white">INNOVATIVE SURFACES</p>
          <Button className={'!px-8'}>BUILD WITH US</Button>
        </div>
      </section>
    </>
  )
}

const Hero = () => {
  return (
    <div>
      <div className="md:hidden">
        <HeroSm />
      </div>
      <div className="hidden md:block lg:hidden">
        <HeroMd />
      </div>
      <div className="hidden lg:block">
        <HeroLg />
      </div>
    </div>
  )
}

export default Hero
