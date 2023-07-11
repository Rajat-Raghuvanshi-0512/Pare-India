import { useNavigate } from 'react-router-dom'
import { Button, Img } from '../../custom'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'

const P1Section2 = ({ data }) => {
  const [counter, setCounter] = useState(0)

  const handleNext = () => {
    if (counter !== 2) {
      setCounter(counter + 1)
    } else {
      setCounter(0)
    }
  }
  useEffect(() => {
    let interval = setInterval(() => {
      handleNext()
    }, 2500)
    return () => clearInterval(interval)
  })

  const navigate = useNavigate()
  return (
    <section className="p-5 md:px-10 lg:px-20 2xl:px-40">
      {data?.map((item, idx) => (
        <div
          className={`grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 ${idx % 2 != 0 ? 'md:pb-32 md:pt-20' : ''} `}
          key={item.type}
        >
          <div className={`order-2 ${idx % 2 != 0 ? '' : 'md:order-none'}`}>
            <p className="font-metropolis text-lg font-light leading-5 md:text-2xl md:leading-snug 2xl:text-4xl">
              <span className="text-3xl font-semibold text-red-base md:text-4xl lg:text-5xl 2xl:text-7xl">
                {item.type}
              </span>{' '}
              {item.desc}
            </p>
            <h5 className="mt-10 font-metropolis text-2xl font-medium 2xl:mt-20 2xl:text-4xl">Highlights</h5>
            <ul className="m-5 list-disc font-montserrat font-light 2xl:text-xl">
              {item.highlights.map((item) => (
                <li className="my-2 md:my-3" key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex w-full justify-end md:justify-start">
              <Button onClick={() => navigate('/product/linea')}>View range</Button>
            </div>
          </div>
          <div className="relative h-full w-full">
            <Swiper
              modules={[EffectFade, Autoplay]}
              effect="fade"
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              speed={800}
            >
              {item.productImgs.map((el, i) => {
                return (
                  <SwiperSlide key={i} className="relative my-10">
                    <div className=" before:absolute before:-top-5 before:left-5 before:-z-10 before:h-[400px] before:w-[70%] before:border-[3px] before:border-red-base lg:before:h-[450px]">
                      <Img
                        src={el}
                        alt={'pr1'}
                        className={'relative mr-auto h-[400px] w-[70%] object-cover lg:h-[450px] 2xl:h-[600px]'}
                      />
                    </div>
                    <div className="relative mb-10 mr-5">
                      <div className="before:absolute before:-right-4 before:bottom-24 before:-z-20 before:h-[200px] before:w-[150px] before:border-[3px] before:border-red-base md:before:-bottom-16 md:before:h-[263px] md:before:w-[208px]"></div>
                      <Img
                        src={item.productShades[i]}
                        alt={'pr1.1'}
                        className={
                          'absolute bottom-20 right-0 h-[200px] w-[150px] md:-bottom-20 md:h-[263px] md:w-[208px]'
                        }
                      />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      ))}
      {/* <div className="grid grid-cols-1 gap-5 py-20 md:grid-cols-2 md:gap-10 md:pb-40 md:pt-32">
        <div className="order-2">
          <p className="font-metropolis text-lg font-light leading-5 md:text-3xl 2xl:text-4xl">
            <span className="text-3xl font-semibold text-red-base md:text-4xl 2xl:text-7xl">Pyramid</span> lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <h5 className="mt-10 font-metropolis text-2xl font-medium 2xl:mt-20 2xl:text-4xl">Highlights</h5>
          <ul className="m-5 list-disc font-montserrat font-light 2xl:text-xl">
            <li className="my-1">Easy to install</li>
            <li className="my-1">Recyclable</li>
            <li className="my-1">Termite Proof & Rust Proof</li>
            <li className="my-1">No Ply required Can Be Screwed Directly on the walls</li>
            <li className="my-1">Appropriate for walls and ceilings</li>
          </ul>
          <div className="flex w-full justify-end">
            <Button onClick={() => navigate('/product/linea')}>View range</Button>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={800}
          >
            {productImgs.map((el, i) => {
              return (
                <SwiperSlide key={i} className="relative my-10">
                  <div className=" before:absolute before:-top-5 before:left-5 before:-z-10 before:h-[400px] before:w-[70%] before:border-[3px] before:border-red-base lg:before:h-[450px]">
                    <Img
                      src={el}
                      alt={'pr1'}
                      className={'relative mr-auto h-[400px] w-[70%] object-cover lg:h-[450px] 2xl:h-[600px]'}
                    />
                  </div>
                  <div className="relative mb-10 mr-5">
                    <div className="before:absolute before:-right-4 before:bottom-24 before:-z-20 before:h-[200px] before:w-[150px] before:border-[3px] before:border-red-base md:before:-bottom-16 md:before:h-[263px] md:before:w-[208px]"></div>
                    <Img
                      src={productShades[i]}
                      alt={'pr1.1'}
                      className={
                        'absolute bottom-20 right-0 h-[200px] w-[150px] md:-bottom-20 md:h-[263px] md:w-[208px]'
                      }
                    />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:pb-20">
        <div className="order-2 md:order-none">
          <p className="font-metropolis text-lg font-light leading-5 md:text-3xl 2xl:text-4xl">
            <span className="text-3xl font-semibold text-red-base md:text-4xl 2xl:text-7xl">Arch</span> lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <h5 className="mt-10 font-metropolis text-2xl font-medium 2xl:mt-20 2xl:text-4xl">Highlights</h5>
          <ul className="m-5 list-disc font-montserrat font-light 2xl:text-xl">
            <li className="my-1">Easy to install</li>
            <li className="my-1">Recyclable</li>
            <li className="my-1">Termite Proof & Rust Proof</li>
            <li className="my-1">No Ply required Can Be Screwed Directly on the walls</li>
            <li className="my-1">Appropriate for walls and ceilings</li>
          </ul>
          <div className="flex w-full justify-end md:justify-start">
            <Button onClick={() => navigate('/product/linea')}>View range</Button>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            speed={800}
          >
            {productImgs.map((el, i) => {
              return (
                <SwiperSlide key={i} className="relative my-10">
                  <div className=" before:absolute before:-top-5 before:left-5 before:-z-10 before:h-[400px] before:w-[70%] before:border-[3px] before:border-red-base lg:before:h-[450px]">
                    <Img
                      src={el}
                      alt={'pr1'}
                      className={'relative mr-auto h-[400px] w-[70%] object-cover lg:h-[450px] 2xl:h-[600px]'}
                    />
                  </div>
                  <div className="relative mb-10 mr-5">
                    <div className="before:absolute before:-right-4 before:bottom-24 before:-z-20 before:h-[200px] before:w-[150px] before:border-[3px] before:border-red-base md:before:-bottom-16 md:before:h-[263px] md:before:w-[208px]"></div>
                    <Img
                      src={productShades[i]}
                      alt={'pr1.1'}
                      className={
                        'absolute bottom-20 right-0 h-[200px] w-[150px] md:-bottom-20 md:h-[263px] md:w-[208px]'
                      }
                    />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div> */}
    </section>
  )
}

export default P1Section2
