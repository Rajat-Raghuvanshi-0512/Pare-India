import { Career1 } from '../../assets'
import Button from '../custom/Button'
import Img from '../custom/Img'

const CareerSection1 = () => {
  return (
    <section className="p-5 md:p-10 lg:p-20">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="pt-8">
          <p className="font-montserrat text-xs font-semibold lg:text-sm">For creative Individuals</p>
          <h2 className="font-metropolis font-bold !leading-tight text-red-base md:text-5xl lg:text-7xl">
            WORK FOR PARE INDIA
          </h2>
          <p className="font-montserrat lg:text-xl">
            Join our team at PARE Innovations and be part of our mission-driven journey. Experience the thrill of a
            dynamic and fast-paced environment, where your talent and passion can make a real impact. Together,
            let&apos;s create innovative solutions and shape the future of our industry.
          </p>
          <Button className={'md:mt-4 lg:mt-6'}>apply now</Button>
        </div>
        <div>
          <div className="relative">
            <div className="absolute -top-3 left-3 -z-50 h-full w-full  border-2 border-red-base"></div>
            <Img src={Career1} alt={'career1'} width={550} height={415} className=" mt-3 h-full w-full  lg:mt-5" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerSection1
