import { Product1Img1, Product1SideImg } from '../../../assets'
import { Img } from '../../custom'

const P1Section1 = () => {
  return (
    <>
      <section className=" p-5 md:px-10 lg:px-20 2xl:px-40">
        <div className="flex gap-5">
          <div className="flex-1">
            <Img src={Product1Img1} alt={'img1'} className={'h-full w-full object-cover'} />
          </div>
          <div className="flex flex-1 flex-col justify-end">
            <div className="-ml-20 flex w-48 items-center justify-center bg-[#BE1E2DD9] pt-2 font-metropolis text-xl font-bold text-white">
              <p className="mx-auto w-40">EASY+ TECHNOLOGY</p>
            </div>
            <p className="w-[80%] py-5 font-metropolis text-2xl">
              This technology ensures quick, dust and dirt free installations. This technology ensures quick, dust and
              dirt free installations.
            </p>
            <Img src={Product1SideImg} alt={'img2'} className={'h-fit w-full object-cover'} />
          </div>
        </div>
      </section>
      <div className="my-10 bg-red-base py-7 text-center font-metropolis font-medium text-white lg:text-5xl">
        Offered in 3 variants
      </div>
    </>
  )
}

export default P1Section1
