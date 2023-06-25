import { Product1BannerImg, Product1BannerPhoneImg } from '../../../assets'
import { useMediaQuery } from '../../../utils/custom-hooks'
import { Img } from '../../custom'

const Product1Banner = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <section className="relative h-[580px]">
      <Img
        src={isMobile ? Product1BannerPhoneImg : Product1BannerImg}
        alt={'banner'}
        className={'absolute -z-10 h-[400px] w-screen object-cover object-bottom'}
      />
      <div className="absolute -bottom-3 w-full p-5 md:px-10 lg:px-20">
        <h6 className="font-montserrat text-xl text-white lg:text-lg">PARE INDIA BRINGS TO YOU</h6>
        <h2 className="py-5 font-metropolis text-6xl font-bold !leading-tight text-red-base md:w-[55%] md:py-0 md:text-left lg:text-7xl">
          FIRST TIME IN THE WORLD
        </h2>
      </div>
    </section>
  )
}

export default Product1Banner
