import { Medal, ProductImg1, ProductImg2, ProductImg3, ProductImg4, ProductImg5, ProductImg6, Wall } from '../../assets'
import { Button, Img } from '../custom'

const ProductInfo = () => {
  return (
    <section>
      <div className="p-5  pt-20 md:p-16 lg:p-20 2xl:px-40">
        <div className={`relative flex items-start gap-1 font-metropolis md:gap-2`}>
          <span className={`font-montserrat text-xs font-bold md:text-xl 2xl:text-3xl`}>01</span>
          <h3 className={`  text-4xl font-bold uppercase lg:text-7xl 2xl:text-8xl`}>innov+</h3>
        </div>
        <div className="mx-auto grid grid-cols-2">
          <div className="relative">
            <div className="absolute left-3 top-0 -z-50 h-[210px] w-[350px] border-2 border-red-base  lg:h-[410px] lg:w-[550px]"></div>
            <Img
              src={ProductImg1}
              width={550}
              height={415}
              alt="sofa"
              className=" mt-3 h-[210px] w-[350px] lg:mt-5 lg:h-[410px]  lg:w-[550px]"
            />
            <div className="mr-14 lg:mr-20">
              <p className="mt-5 font-montserrat font-medium lg:text-[15px]">
                Elevate your space with PARÉ&apos;s wood-inspired{' '}
                <span className="font-bold text-red-base">first-time-in-India</span> Soffit Systems, transforming
                effortlessly with our versatile Louvers and sleek Vertica Panels for{' '}
                <span className="font-bold text-red-base">walls and ceilings.</span>
              </p>
              <div className="flex items-end justify-end">
                <Button>view range</Button>
              </div>
            </div>
          </div>
          <div className="-z-10 -ml-5 md:-ml-10 lg:-ml-14">
            <div className="ml-32 mr-5 mt-5 flex justify-end font-montserrat font-medium">
              <div className="flex gap-2 border-r px-2 pr-4">
                <p>First time in India</p>
                <Img src={Medal} alt={'medal'} width={30} height={45} />
              </div>
              <div className="flex gap-2 px-2 pl-4">
                <p>Usage: Walls and ceilings</p>
                <Img src={Wall} alt={'wall'} width={50} height={45} />
              </div>
            </div>
            <div className="ml-6 mt-3 h-[210px] w-[350px] border-2  border-red-base lg:h-[490px] lg:w-[600px]">
              <Img
                src={ProductImg2}
                width={550}
                height={415}
                alt="sofa"
                className="-z-10 -ml-3 mt-3 h-[210px] w-[350px] lg:-ml-4 lg:mt-4 lg:h-[490px]  lg:w-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5  pt-20 md:p-16 lg:p-20 2xl:px-40">
        <div className={`relative flex items-start gap-1 font-metropolis md:gap-2`}>
          <span className={`font-montserrat text-xs font-bold md:text-xl 2xl:text-3xl`}>02</span>
          <h3 className={`  text-4xl font-bold uppercase lg:text-7xl 2xl:text-8xl`}>easy+</h3>
        </div>
        <div className=" grid grid-cols-2">
          <div className="relative">
            <div className="absolute left-3 top-0 -z-50 h-[210px] w-[350px] border-2 border-red-base  lg:h-[410px] lg:w-[550px]"></div>
            <Img
              src={ProductImg3}
              width={550}
              height={415}
              alt="sofa"
              className=" mt-3 h-[210px] w-[350px] lg:mt-5 lg:h-[410px]  lg:w-[550px]"
            />
            <div className="mr-14 lg:mr-20">
              <p className="mt-5 font-montserrat font-medium lg:text-[15px]">
                Elevate your space with PARÉ&apos;s wood-inspired{' '}
                <span className="font-bold text-red-base">first-time-in-India</span> Soffit Systems, transforming
                effortlessly with our versatile Louvers and sleek Vertica Panels for{' '}
                <span className="font-bold text-red-base">walls and ceilings.</span>
              </p>
              <div className="flex items-end justify-end">
                <Button>view range</Button>
              </div>
            </div>
          </div>
          <div className="-z-10 -ml-5 md:-ml-10 lg:-ml-14">
            <div className="ml-32 mr-5 mt-5 flex justify-end font-montserrat font-medium">
              <div className="flex gap-2 border-r px-2 pr-4">
                <p>First time in India</p>
                <Img src={Medal} alt={'medal'} width={30} height={45} />
              </div>
              <div className="flex gap-2 px-2 pl-4">
                <p>Usage: Walls and ceilings</p>
                <Img src={Wall} alt={'wall'} width={50} height={45} />
              </div>
            </div>
            <div className="ml-6 mt-3 h-[210px] w-[350px] border-2  border-red-base lg:h-[490px] lg:w-[600px]">
              <Img
                src={ProductImg4}
                width={550}
                height={415}
                alt="sofa"
                className="-z-10 -ml-3 mt-3 h-[210px] w-[350px] lg:-ml-4 lg:mt-4 lg:h-[490px]  lg:w-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5  pt-20 md:p-16 lg:p-20 2xl:px-40">
        <div className={`relative flex items-start gap-1 font-metropolis md:gap-2`}>
          <span className={`font-montserrat text-xs font-bold md:text-xl 2xl:text-3xl`}>03</span>
          <h3 className={`  text-4xl font-bold uppercase lg:text-7xl 2xl:text-8xl`}>dura+</h3>
        </div>
        <div className=" grid grid-cols-2">
          <div className="relative">
            <div className="absolute left-3 top-0 -z-50 h-[210px] w-[350px] border-2 border-red-base  lg:h-[410px] lg:w-[550px]"></div>
            <Img
              src={ProductImg5}
              width={550}
              height={415}
              alt="sofa"
              className=" mt-3 h-[210px] w-[350px] lg:mt-5 lg:h-[410px]  lg:w-[550px]"
            />
            <div className="mr-14 lg:mr-20">
              <p className="mt-5 font-montserrat font-medium lg:text-[15px]">
                Elevate your space with PARÉ&apos;s wood-inspired{' '}
                <span className="font-bold text-red-base">first-time-in-India</span> Soffit Systems, transforming
                effortlessly with our versatile Louvers and sleek Vertica Panels for{' '}
                <span className="font-bold text-red-base">walls and ceilings.</span>
              </p>
              <div className="flex items-end justify-end">
                <Button>view range</Button>
              </div>
            </div>
          </div>
          <div className="-z-10 -ml-5 md:-ml-10 lg:-ml-14">
            <div className="ml-32 mr-5 mt-5 flex justify-end font-montserrat font-medium">
              <div className="flex gap-2 border-r px-2 pr-4">
                <p>First time in India</p>
                <Img src={Medal} alt={'medal'} width={30} height={45} />
              </div>
              <div className="flex gap-2 px-2 pl-4">
                <p>Usage: Walls and ceilings</p>
                <Img src={Wall} alt={'wall'} width={50} height={45} />
              </div>
            </div>
            <div className="ml-6 mt-3 h-[210px] w-[350px] border-2  border-red-base lg:h-[490px] lg:w-[600px]">
              <Img
                src={ProductImg6}
                width={550}
                height={415}
                alt="sofa"
                className="-z-10 -ml-3 mt-3 h-[210px] w-[350px] lg:-ml-4 lg:mt-4 lg:h-[490px]  lg:w-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductInfo
