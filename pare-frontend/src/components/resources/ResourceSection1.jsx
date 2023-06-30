import { BrochureImg, BrochurePhoneImg, CircularDownArrow, LongDownArrow } from '../../assets'
import { useMediaQuery } from '../../utils/custom-hooks'
import { Button, Img } from '../custom'

const ResourceSection1 = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <section className="relative p-5 pt-20">
      <h2 className="mt-10 font-metropolis text-5xl font-bold !leading-snug md:text-center lg:text-8xl 2xl:text-9xl">
        LOOKING <br className="md:hidden" /> FOR <br /> <span className="text-red-base">RESOURCES?</span>
      </h2>
      <h4 className="py-5 font-montserrat text-sm font-medium text-red-base md:text-center md:text-xl lg:text-2xl">
        WE HAVE GOT YOU COVERED.
      </h4>
      <img src={CircularDownArrow} alt="down" className="mx-auto hidden w-[70px] md:block" />
      <img src={LongDownArrow} alt="down" className="absolute right-4 top-52 md:hidden" />
      <div className="grid grid-cols-2 lg:gap-10 lg:p-20 lg:pb-0 2xl:px-40">
        <div>
          <Img
            src={isMobile ? BrochurePhoneImg : BrochureImg}
            alt={'brochure'}
            className="w-full md:w-[500px] lg:w-[580px] 2xl:w-[800px]"
          />
        </div>
        <div className="flex flex-col gap-5 text-right lg:gap-7 2xl:gap-12">
          <h4 className="font-metropolis text-xl font-bold md:mt-5 lg:text-6xl 2xl:mt-10 2xl:text-7xl">BROCHURES</h4>
          <p className="pl-5 font-montserrat text-xs md:pl-0 md:text-xl 2xl:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.{' '}
            <span className="hidden md:block">
              {' '}
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non{' '}
            </span>
          </p>
          <Button className={'ml-auto w-fit'}>Download all</Button>
        </div>
      </div>
    </section>
  )
}

export default ResourceSection1