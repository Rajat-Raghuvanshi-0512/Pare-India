import { HeroBg, HeroBgMobile, InnovText } from '../../assets'
import { Button, Img } from '../custom'

const HeroSm = () => {
  return (
    <section>
      <Img src={HeroBgMobile} className={'absolute -z-10 h-screen w-full object-cover object-top'} />
      <div className="flex h-screen flex-col items-start justify-center gap-8 px-5">
        <Img src={InnovText} width={'250'} height={'100'} className={'object-contain  sm:w-[22rem]'} />
        <p className="font-metropolis text-3xl font-bold tracking-widest text-white sm:text-4xl">INNOVATIVE SURFACES</p>
        <Button className={'!px-8'}>BUILD WITH US</Button>
      </div>
    </section>
  )
}
const HeroMd = () => {
  return (
    <section>
      <Img
        src={HeroBg}
        width={'1900'}
        height={'100'}
        className={'absolute -z-10 h-screen w-full object-cover object-top'}
      />
      <div className="flex h-screen flex-col items-start justify-center gap-5 px-20">
        <Img src={InnovText} width={'350'} height={'100'} className={''} />
        <p className="text-4xl font-bold tracking-widest text-white">INNOVATIVE SURFACES</p>
        <Button className={'!px-8'}>BUILD WITH US</Button>
      </div>
    </section>
  )
}
const HeroLg = () => {
  return (
    <section>
      <Img
        src={HeroBg}
        width={'1900'}
        height={'100'}
        className={'absolute -z-10  h-screen w-full object-cover object-top'}
      />
      <div className="flex h-screen flex-col items-start justify-center gap-5 px-20 2xl:mx-60 2xl:scale-125">
        <Img src={InnovText} width={'350'} height={'100'} className={''} />
        <p className="text-4xl font-bold tracking-widest text-white">INNOVATIVE SURFACES</p>
        <Button className={'!px-8'}>BUILD WITH US</Button>
      </div>
    </section>
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
