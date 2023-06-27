import { BrochureImg, CircularDownArrow } from '../../assets'
import { Button, Img } from '../custom'

const ResourceSection1 = () => {
  return (
    <section className="p-5 pt-20">
      <h2 className="mt-10 text-center font-metropolis font-bold !leading-snug lg:text-8xl 2xl:text-9xl">
        LOOKING FOR <br /> <span className="text-red-base">RESOURCES?</span>
      </h2>
      <h4 className="py-5 text-center font-montserrat font-medium text-red-base lg:text-2xl">
        WE HAVE GOT YOU COVERED.
      </h4>
      <img src={CircularDownArrow} alt="down" className="mx-auto w-[70px]" />
      <div className="grid grid-cols-2 lg:gap-10 lg:p-20 lg:pb-0 2xl:px-40">
        <div>
          <Img src={BrochureImg} alt={'brochure'} className=" w-[580px] 2xl:w-[800px]" />
        </div>
        <div className="flex flex-col gap-5 text-right lg:gap-7 2xl:gap-12">
          <h4 className="mt-5 font-metropolis font-bold lg:text-6xl 2xl:mt-10 2xl:text-7xl">BROCHURES</h4>
          <p className="font-montserrat text-xl 2xl:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non{' '}
          </p>
          <Button className={'ml-auto w-fit'}>Download all</Button>
        </div>
      </div>
    </section>
  )
}

export default ResourceSection1
