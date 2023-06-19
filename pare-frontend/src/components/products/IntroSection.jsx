import { ProductHeroImg, ScrollDown } from '../../assets'
import { Img } from '../custom'

const IntroSection = () => {
  return (
    <section className="z-10 p-5  pt-20 md:p-16 lg:pt-28 2xl:px-40">
      <h2 className="text-center font-metropolis text-3xl font-medium md:text-4xl lg:text-5xl">
        Transform Your Space with Our Stunning Collection of Products.
      </h2>
      <div className="relative">
        <p className="mb-2 ml-auto mt-5 w-[400px] font-metropolis text-sm font-light md:mt-10 md:text-base lg:mt-20 lg:text-xl">
          Redefine your surroundings and indulge in the art of design with PARÉ&apos;s stunning products.
        </p>
        <Img
          src={ScrollDown}
          alt={'scroll'}
          width={50}
          height={50}
          className={'absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[70%]'}
        />
      </div>
      <Img src={ProductHeroImg} alt={'hero-img'} width={1700} height={600} />
    </section>
  )
}

export default IntroSection
