import { useNavigate } from 'react-router-dom'
import {
  Globe,
  Medal,
  PareText,
  ProductImg1,
  ProductImg2,
  ProductImg3,
  ProductImg4,
  ProductImg5,
  ProductImg6,
  Shield,
  Wall,
} from '../../assets'
import { Button, Img } from '../custom'

const ProductInfoSm = () => {
  return (
    <section className="relative">
      <Img
        src={PareText}
        alt="pare"
        width={250}
        height={800}
        className="absolute left-2 top-0 -z-10 hidden h-full w-[200px] object-contain object-top"
      />
      <div className="pb-10">
        <div>
          <div className={`relative flex items-start gap-1 font-metropolis md:gap-2`}>
            <span className={`font-montserrat text-xs font-bold md:text-xl 2xl:text-3xl`}>01</span>
            <h3 className={`  text-4xl font-bold uppercase lg:text-7xl 2xl:text-8xl`}>innov+</h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div className=" flex-[1.2]">
            <div className="relative">
              <div className="absolute -top-2 left-2 -z-50 h-full w-full  border-2 border-red-base"></div>
              <Img
                src={ProductImg1}
                width={550}
                height={415}
                alt="sofa"
                className=" mt-3 h-full w-full object-contain lg:mt-5"
              />
            </div>
            <div className=" mt-5 flex justify-end font-montserrat text-[8px] font-medium">
              <div className="flex gap-2 border-r-2 px-2 pr-4">
                <p>First time in India</p>
                <Img src={Medal} alt={'medal'} width={15} height={25} className={'object-contain'} />
              </div>
              <div className="flex gap-2 px-2 pl-4">
                <p>Usage: Walls and Ceilings</p>
                <Img src={Wall} alt={'wall'} width={25} height={25} className={'object-contain'} />
              </div>
            </div>
          </div>
          <div className="flex-[0.8] pr-3">
            <p className="mt-5 text-right font-montserrat text-xs font-medium">
              Elevate your space with PARÉ&apos;s wood-inspired
              <span className="font-bold text-red-base"> first-time-in-India</span> Soffit Systems, transforming
              effortlessly with our versatile Louvers and sleek Vertica Panels for
              <span className="font-bold text-red-base"> walls and ceilings.</span>
            </p>
            <div className="mt-3 flex justify-end">
              {' '}
              <Button variant="outlined" className={'!border !text-[10px]'}>
                view products
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10">
        <div>
          <div className={`relative flex items-start gap-1 font-metropolis md:gap-2`}>
            <span className={`font-montserrat text-xs font-bold md:text-xl 2xl:text-3xl`}>02</span>
            <h3 className={`  text-4xl font-bold uppercase lg:text-7xl 2xl:text-8xl`}>easy+</h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div className=" flex-[1.2]">
            <div className="relative">
              <div className="absolute -top-2 left-2 -z-50 h-full w-full  border-2 border-red-base"></div>
              <Img
                src={ProductImg3}
                width={550}
                height={415}
                alt="sofa"
                className=" mt-3 h-full w-full object-contain lg:mt-5"
              />
            </div>
            <div className=" mt-5 flex justify-end font-montserrat text-[8px] font-medium">
              <div className="flex gap-2 border-r-2 px-2 pr-4">
                <p>First time in the World</p>
                <Img src={Globe} alt={'medal'} width={15} height={25} className={'object-contain'} />
              </div>
              <div className="flex gap-2 px-2 pl-4">
                <p>Usage: Walls and Ceilings</p>
                <Img src={Wall} alt={'wall'} width={25} height={25} className={'object-contain'} />
              </div>
            </div>
          </div>
          <div className="flex-[0.8] pr-3">
            <p className="mt-5 text-right font-montserrat text-xs font-medium">
              Revolutionize your space with PARÉ&apos;s Easy+ Locking System{' '}
              <span className="font-bold text-red-base">- Seamless installation,</span> versatile Pyramid design, and
              Linea panels offer effortless flexibility, all with
              <span className="font-bold text-red-base">world-first, quick and dust-free installation.</span>
            </p>
            <div className="mt-3 flex justify-end">
              {' '}
              <Button variant="outlined" className={'!border !text-[10px]'}>
                view products
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10">
        <div>
          <div className={`relative flex items-start gap-1 font-metropolis md:gap-2`}>
            <span className={`font-montserrat text-xs font-bold md:text-xl 2xl:text-3xl`}>03</span>
            <h3 className={`  text-4xl font-bold uppercase lg:text-7xl 2xl:text-8xl`}>dura+</h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div className=" flex-[1.2]">
            <div className="relative">
              <div className="absolute -top-2 left-2 -z-50 h-full w-full  border-2 border-red-base"></div>
              <Img
                src={ProductImg5}
                width={550}
                height={415}
                alt="sofa"
                className=" mt-3 h-full w-full object-contain lg:mt-5"
              />
            </div>
            <div className=" mt-5 flex justify-end font-montserrat text-[8px] font-medium">
              <div className="flex gap-2 border-r-2 px-2 pr-4">
                <p>10 Years Warranty</p>
                <Img src={Shield} alt={'shield'} width={15} height={25} className={'object-contain'} />
              </div>
              <div className="flex gap-2 px-2 pl-4">
                <p>Usage: Exterior Surface</p>
                <Img src={Wall} alt={'wall'} width={25} height={25} className={'object-contain'} />
              </div>
            </div>
          </div>
          <div className="flex-[0.8] pr-3">
            <p className="mt-5 text-right font-montserrat text-xs font-medium">
              PARÉ DURA+ Systems redefine durability and functionality, offering excellence in{' '}
              <span className="font-bold text-red-base">exteriors</span> and wall cladding with{' '}
              <span className="font-bold text-red-base">long-lasting facades and high-impact resistance.</span>
            </p>
            <div className="mt-3 flex justify-end">
              {' '}
              <Button variant="outlined" className={'!border !text-[10px]'}>
                view products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const ProductInfoLg = () => {
  const navigate = useNavigate()
  return (
    <section className="relative">
      <Img
        src={PareText}
        alt="pare"
        width={250}
        height={800}
        className="absolute left-2 top-0 -z-10 hidden h-full object-contain object-top md:block lg:left-20 lg:top-32 lg:w-[500px]"
      />
      <div className="p-5  pt-20 md:p-16 lg:p-20 lg:px-28 2xl:px-40">
        <div className={`relative flex items-start gap-1 font-metropolis md:gap-2`}>
          <span className={`font-montserrat text-xs font-bold md:text-xl 2xl:text-3xl`}>01</span>
          <h3 className={`  text-4xl font-bold uppercase lg:text-7xl 2xl:text-8xl`}>innov+</h3>
        </div>
        <div className=" grid grid-cols-2 pb-20">
          <div className="relative">
            <div className="absolute left-3 top-0 -z-50 h-full w-full  border-2 border-red-base"></div>
            <Img src={ProductImg1} width={550} height={415} alt="sofa" className=" mt-3 h-full w-full  lg:mt-5" />
            <div className="mr-14 lg:mr-20">
              <p className="mt-5 font-montserrat font-medium md:text-sm lg:text-[15px] 2xl:text-xl">
                Elevate your space with PARÉ&apos;s wood-inspired
                <span className="font-bold text-red-base"> first-time-in-India</span> Soffit Systems, transforming
                effortlessly with our versatile Louvers and sleek Vertica Panels for
                <span className="font-bold text-red-base"> walls and ceilings.</span>
              </p>
              <div className="mt-2 flex items-end justify-end">
                <Button onClick={() => navigate('/product/1')}>view range</Button>
              </div>
            </div>
          </div>
          <div className="-z-10 -ml-5 md:-ml-10 lg:-ml-14">
            <div className="ml-32 mr-5 mt-5 flex justify-end font-montserrat font-medium md:text-sm lg:text-base 2xl:text-2xl">
              <div className="flex gap-2 border-r px-2 pr-4">
                <p>First time in India</p>
                <Img src={Medal} alt={'medal'} width={30} height={45} className={'object-contain'} />
              </div>
              <div className="flex gap-2 px-2 pl-4">
                <p>Usage: Walls and Ceilings</p>
                <Img src={Wall} alt={'wall'} width={50} height={45} className={'object-contain'} />
              </div>
            </div>
            <div className="ml-6 mt-3 h-[110%] w-full border-2 border-red-base">
              <Img
                src={ProductImg2}
                width={550}
                height={415}
                alt="sofa"
                className="-z-10 -ml-3 mt-3 h-[110%] w-full object-cover lg:-ml-4  lg:mt-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5  pt-20 md:p-16 lg:p-20 lg:px-28 lg:py-40 2xl:px-40 2xl:py-60">
        <div className={`relative flex items-start gap-1 font-metropolis md:gap-2`}>
          <span className={`font-montserrat text-xs font-bold md:text-xl 2xl:text-3xl`}>02</span>
          <h3 className={`  text-4xl font-bold uppercase lg:text-7xl 2xl:text-8xl`}>easy+</h3>
        </div>
        <div className=" grid grid-cols-2 pb-20">
          <div className="relative">
            <div className="absolute left-3 top-0 -z-50 h-full w-full  border-2 border-red-base"></div>
            <Img src={ProductImg3} width={550} height={415} alt="sofa" className=" mt-3 h-full w-full  lg:mt-5" />
            <div className="mr-14 lg:mr-20">
              <p className="mt-5 font-montserrat font-medium md:text-sm lg:text-[15px] 2xl:text-xl">
                Revolutionize your space with PARÉ&apos;s Easy+ Locking System{' '}
                <span className="font-bold text-red-base">- Seamless installation,</span> versatile Pyramid design, and
                Linea panels offer effortless flexibility, all with
                <span className="font-bold text-red-base"> world-first, quick and dust-free installation.</span>
              </p>
              <div className="mt-2 flex items-end justify-end">
                <Button>view range</Button>
              </div>
            </div>
          </div>
          <div className="-z-10 -ml-5 md:-ml-10 lg:-ml-14">
            <div className="ml-32 mr-5 mt-5 flex justify-end font-montserrat font-medium md:text-sm lg:text-base 2xl:text-2xl">
              <div className="flex gap-2 border-r px-2 pr-4">
                <p>First time in the World</p>
                <Img src={Globe} alt={'medal'} width={30} height={45} className={'object-contain'} />
              </div>
              <div className="flex gap-2 px-2 pl-4">
                <p>Usage: Walls and Ceilings</p>
                <Img src={Wall} alt={'wall'} width={50} height={45} className={'object-contain'} />
              </div>
            </div>
            <div className="ml-6 mt-3 h-[110%] w-full border-2 border-red-base">
              <Img
                src={ProductImg4}
                width={550}
                height={415}
                alt="sofa"
                className="-z-10 -ml-3 mt-3 h-[110%] w-full object-cover lg:-ml-4  lg:mt-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5  pt-20 md:p-16 lg:p-20 lg:px-28 lg:pb-40 2xl:px-40 2xl:pb-60">
        <div className={`relative flex items-start gap-1 font-metropolis md:gap-2`}>
          <span className={`font-montserrat text-xs font-bold md:text-xl 2xl:text-3xl`}>03</span>
          <h3 className={`  text-4xl font-bold uppercase lg:text-7xl 2xl:text-8xl`}>dura+</h3>
        </div>
        <div className=" grid grid-cols-2 pb-20">
          <div className="relative">
            <div className="absolute left-3 top-0 -z-50 h-full w-full  border-2 border-red-base"></div>
            <Img src={ProductImg5} width={550} height={415} alt="sofa" className=" mt-3 h-full w-full  lg:mt-5" />
            <div className="mr-14 lg:mr-20">
              <p className="mt-5 font-montserrat font-medium md:text-sm lg:text-[15px] 2xl:text-xl">
                PARÉ DURA+ Systems redefine durability and functionality, offering excellence in{' '}
                <span className="font-bold text-red-base">exteriors</span> and wall cladding with{' '}
                <span className="font-bold text-red-base">long-lasting facades and high-impact resistance.</span>
              </p>
              <div className="mt-2 flex items-end justify-end">
                <Button>view range</Button>
              </div>
            </div>
          </div>
          <div className="-z-10 -ml-5 md:-ml-10 lg:-ml-14">
            <div className="ml-32 mr-5 mt-5 flex justify-end font-montserrat font-medium md:text-sm lg:text-base 2xl:text-2xl">
              <div className="flex gap-2 border-r px-2 pr-4">
                <p>10 Years Warranty</p>
                <Img src={Shield} alt={'shield'} width={30} height={45} className={'object-contain'} />
              </div>
              <div className="flex gap-2 px-2 pl-4">
                <p>Usage: Exterior Surface</p>
                <Img src={Wall} alt={'wall'} width={50} height={45} className={'object-contain'} />
              </div>
            </div>
            <div className="ml-6 mt-3 h-[110%] w-full border-2 border-red-base">
              <Img
                src={ProductImg6}
                width={550}
                height={415}
                alt="sofa"
                className="-z-10 -ml-3 mt-3 h-[110%] w-full object-cover lg:-ml-4  lg:mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ProductInfo = () => {
  return (
    <div>
      <div className="md:hidden">
        <ProductInfoSm />
      </div>
      <div className="hidden lg:block">
        <ProductInfoLg />
      </div>
    </div>
  )
}

export default ProductInfo
