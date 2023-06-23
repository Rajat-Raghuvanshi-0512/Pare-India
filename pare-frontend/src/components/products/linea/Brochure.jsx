import { BrochureBg } from '../../../assets'
import { Button, Img } from '../../custom'

const Brochure = () => {
  return (
    <div className="relative h-[300px]  2xl:px-20">
      <Img src={BrochureBg} alt={'bg'} className={'absolute left-0 top-0 -z-10 h-full w-full'} />
      <div className="flex h-full items-center justify-between px-5 md:px-10 lg:px-20">
        <div className="flex-[1.3]">
          <h2 className="w-[90%] font-metropolis text-xl font-extrabold uppercase !leading-snug text-white md:text-3xl lg:text-5xl">
            View full range in product brochure
          </h2>
        </div>
        <div className="flex flex-[0.7] justify-end">
          <Button>Download Brochure</Button>
        </div>
      </div>
    </div>
  )
}

export default Brochure
