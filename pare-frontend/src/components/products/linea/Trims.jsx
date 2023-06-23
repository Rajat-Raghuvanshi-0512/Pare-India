import { JLarge, TrimWoodBg1 } from '../../../assets'
import { Img } from '../../custom'

const Trims = () => {
  return (
    <div className="relative h-[500px] font-montserrat text-white 2xl:px-40">
      <Img alt={'bg'} src={TrimWoodBg1} className={'absolute left-0 top-0 -z-10 h-full w-full'} />
      <Img alt={'bg'} src={JLarge} className={'absolute right-0 -z-10 h-full w-[70%]'} />
      <div className="text-center">
        <h2 className="py-5 text-3xl font-bold md:py-10 md:text-4xl lg:text-5xl">AVAILABLE TRIMS</h2>
        <p className="mx-32 text-xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
          sit amet
        </p>
      </div>
      <div className="m-14 flex h-full w-fit flex-col">
        <h5 className="text-center font-metropolis text-xl font-bold uppercase md:text-2xl lg:text-3xl">
          trim options
        </h5>
        <div className="mt-5 grid grid-cols-3 gap-5">
          <div>
            <div className="h-10 w-10 rounded-full bg-red-base md:h-14 md:w-14 lg:h-16 lg:w-16"></div>
            <p className="pt-2 text-center text-sm">J TRIM</p>
          </div>
          <div>
            <div className="h-10 w-10 rounded-full bg-red-base md:h-14 md:w-14 lg:h-16 lg:w-16"></div>
            <p className="pt-2 text-center text-sm">
              J TRIM <br /> LARGE
            </p>
          </div>
          <div>
            <div className="h-10 w-10 rounded-full bg-red-base md:h-14 md:w-14 lg:h-16 lg:w-16"></div>
            <p className="pt-2 text-center text-sm">
              J TRIM <br /> PRO
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trims
