import { Product1BannerImg } from '../../../assets'
import { Img } from '../../custom'

const Product1Banner = () => {
  return (
    <section className="relative h-[500px]">
      <Img
        src={Product1BannerImg}
        alt={'banner'}
        className={'absolute -z-10 h-[400px] w-screen object-cover object-bottom'}
      />
      <div className="absolute -bottom-3 w-full p-5 md:px-10 lg:px-20">
        <h6 className="font-montserrat text-white">PARE INDIA BRINGS TO YOU</h6>
        <h2 className="mr-auto w-[80%] py-5 text-right font-metropolis text-5xl font-bold !leading-tight text-red-base md:w-[55%] md:py-0 md:text-left lg:text-7xl">
          FIRST TIME IN THE WORLD
        </h2>
      </div>
    </section>
  )
}

export default Product1Banner
