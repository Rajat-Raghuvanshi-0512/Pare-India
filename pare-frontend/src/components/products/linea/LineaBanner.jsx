import { BannerBg, BannerWoodImg, BoxImg, EasyLineaImg, FireExtinguisher, Umbrella } from '../../../assets'
import { Img } from '../../custom'

const LineaBanner = () => {
  return (
    <section className="2xl:px-40">
      <Img
        src={BannerBg}
        alt={'banner'}
        className="absolute left-0 top-0 -z-10 h-screen w-screen object-cover 2xl:h-[80vh]"
      />
      <div className="grid h-screen grid-cols-3 items-center justify-center pr-20 pt-20 text-white 2xl:h-[80vh]">
        <div></div>
        <div className="col-span-2">
          <Img src={EasyLineaImg} alt={'easy'} width={200} className={'mx-auto'} />
          <p className="pt-10 text-center font-metropolis text-7xl font-bold uppercase !leading-snug">
            Premium Quality Interior Panels
          </p>
        </div>
      </div>
      <Img src={BannerWoodImg} alt={'banner-wood'} className="absolute top-[30%] w-[400px]" />
      <div className="grid h-screen grid-cols-3 items-center justify-center bg-red-base text-white 2xl:-mx-40 2xl:h-[80vh]">
        <div></div>
        <div className="col-span-2 pr-10 2xl:pr-40">
          <h2 className="w-full text-center font-metropolis font-bold uppercase leading-10 text-white md:text-5xl lg:text-6xl 2xl:text-7xl">
            KEY ADVANTAGES
          </h2>
          <div className="col-span-2 py-10 text-center font-montserrat text-xl font-medium text-white 2xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet
          </div>
          <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col items-center gap-5">
              <Img src={BoxImg} alt={'box'} width={82} height={82} />
              <h6 className="font-metropolis font-bold 2xl:text-3xl">Modern Design</h6>
              <p className="text-center font-montserrat text-sm 2xl:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <Img src={FireExtinguisher} alt={'box'} width={82} height={82} />
              <h6 className="font-metropolis font-bold 2xl:text-3xl">Fire Resistant</h6>
              <p className="text-center font-montserrat text-sm 2xl:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <Img src={Umbrella} alt={'box'} width={82} height={82} />
              <h6 className="font-metropolis font-bold 2xl:text-3xl">100% Waterproof</h6>
              <p className="text-center font-montserrat text-sm 2xl:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LineaBanner
