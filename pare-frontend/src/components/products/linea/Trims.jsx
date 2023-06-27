import { JLarge, TrimWoodBg1 } from '../../../assets'
import { Img } from '../../custom'

const Trims = () => {
  return (
    <div className="relative h-[400px] font-montserrat text-white md:h-[500px] 2xl:px-40">
      <Img alt={'bg'} src={TrimWoodBg1} className={'absolute left-0 top-0 -z-10 h-full w-full'} />
      <Img alt={'bg'} src={JLarge} className={'absolute right-0 top-10 -z-10 w-[70%] md:top-0 md:h-full'} />
      <div className="text-center">
        <h2 className="py-5 text-3xl font-bold md:py-10 md:text-4xl lg:text-5xl">AVAILABLE TRIMS</h2>
        <p className="px-5 text-xs font-medium md:mx-32 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
          sit amet
        </p>
      </div>
      <div className="m-5 mt-auto flex h-[60%] w-fit flex-col justify-end md:m-14 md:h-full md:justify-start">
        <h5 className="text-center font-metropolis text-2xl font-bold uppercase lg:text-3xl">trim options</h5>
        <div className="mt-5 grid grid-cols-3 gap-5">
          <div>
            <div className="h-12 w-12 rounded-full bg-red-base md:h-14 md:w-14 lg:h-16 lg:w-16"></div>
            <p className="pt-2 text-center text-xs md:text-sm">J TRIM</p>
          </div>
          <div>
            <div className="h-12 w-12 rounded-full bg-red-base md:h-14 md:w-14 lg:h-16 lg:w-16"></div>
            <p className="pt-2 text-center text-xs md:text-sm">
              J TRIM <br /> LARGE
            </p>
          </div>
          <div>
            <div className="h-12 w-12 rounded-full bg-red-base md:h-14 md:w-14 lg:h-16 lg:w-16"></div>
            <p className="pt-2 text-center text-xs md:text-sm">
              J TRIM <br /> PRO
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trims
