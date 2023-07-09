import { HeroBg, HeroBg1, HeroBg2, HeroBgMobile, HeroBgMobile1, HeroBgMobile2 } from '../../assets'
import { Button } from '../custom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from '../../utils/custom-hooks'

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

const HeroSm = ({ counter }) => {
  const navigate = useNavigate()
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
            className="font-metropolis text-5xl font-bold text-white"
          >
            <span className="text-red-base">{HeroData[counter].headingRedText}</span>
            {HeroData[counter].headingWhiteText}
          </motion.div>
          <motion.p
            whileInView={{
              opacity: [0, 1],
            }}
            transition={{ duration: 1 }}
            className="font-metropolis text-3xl font-bold tracking-widest text-white sm:text-4xl"
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
const HeroMd = ({ counter }) => {
  const navigate = useNavigate()
  return (
    <section>
      <div className="absolute -z-10 h-screen w-full bg-gradient-to-r from-[#151515] to-transparent opacity-50"></div>
      <img
        src={HeroData[counter].imageLg}
        width={'1900'}
        height={'100'}
        className={'absolute -z-20 h-screen w-full object-cover object-top'}
        alt="bg-hero"
        key={HeroData[counter].imageLg}
      />
      <div className="flex h-screen flex-col items-start justify-center gap-5 px-20">
        <motion.div
          whileInView={{
            opacity: [0, 1],
            y: [-100, 0],
          }}
          transition={{ duration: 1.4 }}
          key={HeroData[counter].headingWhiteText}
          className="font-metropolis font-bold text-white drop-shadow md:text-5xl"
        >
          <span className="text-red-base">{HeroData[counter].headingRedText}</span> {HeroData[counter].headingWhiteText}
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
      <section>
        <div>
          <div className="absolute -z-10 h-screen w-full bg-gradient-to-r from-[#151515] to-transparent opacity-50"></div>
          <img
            src={HeroData[counter].imageLg}
            width={'1900'}
            height={'100'}
            className={'absolute -z-20  h-screen w-full object-cover object-bottom'}
            alt="hero-bg"
            key={HeroData[counter].imageLg}
          />
        </div>
        <div className="flex h-screen flex-col items-start justify-center gap-5 px-20 2xl:mx-60 2xl:scale-125">
          <motion.div
            whileInView={{
              opacity: [0, 1],
              y: [-100, 0],
            }}
            transition={{ duration: 1.4 }}
            key={HeroData[counter].headingWhiteText}
            className="font-metropolis font-bold text-white drop-shadow md:text-5xl lg:text-6xl"
          >
            <span className="text-red-base">{HeroData[counter].headingRedText}</span>{' '}
            {HeroData[counter].headingWhiteText}
          </motion.div>
          <motion.p
            key={HeroData[counter].smallText}
            className="font-metropolis text-4xl font-bold tracking-widest text-white"
          >
            {HeroData[counter].smallText}
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
