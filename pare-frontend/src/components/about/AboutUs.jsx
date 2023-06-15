import { useRef } from 'react'
import { Chair1000, Chair400, Chair700 } from '../../assets'
import { Img } from '../custom'
import { useInView } from 'framer-motion'
import CountUp from 'react-countup'
const AboutUs = () => {
  const numbersRef = useRef(null)
  const numbersInView = useInView(numbersRef)
  return (
    <div className="md:px-10">
      <h2 className="mb-5 font-montserrat text-2xl font-bold uppercase md:text-3xl lg:text-4xl">About us</h2>
      <p className="font-montserrat text-base">
        Established in 2020, We&apos;re the leading and only manufacturer of Soffit panels and other innovative products
        in India, creating world-class surfaces that stand the test of time. With over 20 years of experience, we offer
        the highest quality products for your dream home.
      </p>
      <div className="my-7">
        <Img
          src={Chair400}
          alt={'chair'}
          srcSet={`${Chair400} 400w,${Chair700} 700w ,${Chair1000} 1000w`}
          width={500}
          height={500}
          className={'h-full w-full'}
        />
      </div>
      <div>
        <div className="grid grid-cols-4 gap-5 py-5 md:gap-10  md:py-10 lg:gap-20" ref={numbersRef}>
          {numbersInView && (
            <>
              <div>
                <p className="border-b border-black font-metropolis text-sm font-bold md:border-b-2 md:text-4xl lg:text-5xl">
                  <CountUp end={10} duration={4} />+
                </p>
                <p className="py-1 font-helvetica text-[10px] font-medium md:py-3 md:text-lg lg:text-xl">
                  Quality Products
                </p>
              </div>
              <div>
                <p className="border-b border-black font-metropolis text-sm font-bold md:border-b-2 md:text-4xl lg:text-5xl">
                  <CountUp end={500} duration={2} />+
                </p>
                <p className="py-1 font-helvetica text-[10px] font-medium md:py-3 md:text-lg lg:text-xl">
                  Architectural projects of houses
                </p>
              </div>
              <div>
                <p className="border-b border-black font-metropolis text-sm font-bold md:border-b-2 md:text-4xl lg:text-5xl">
                  <CountUp end={5000} duration={2} />+
                </p>
                <p className="py-1 font-helvetica text-[10px] font-medium md:py-3 md:text-lg lg:text-xl">
                  Satisfied Clients
                </p>
              </div>
              <div>
                <p className="border-b border-black font-metropolis text-sm font-bold md:border-b-2 md:text-4xl lg:text-5xl">
                  <CountUp end={2000} duration={2} />+
                </p>
                <p className="py-1 font-helvetica text-[10px] font-medium md:py-3 md:text-lg lg:text-xl">
                  Unique Spaces modified{' '}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="my-10 flex flex-col gap-5 font-metropolis md:my-16 lg:my-20">
        <div className="flex justify-between gap-5">
          <div className="flex-[0.5] text-lg font-bold uppercase text-red-base md:text-2xl lg:text-3xl">Agility</div>
          <div className="flex-[1.5] text-right text-xs md:text-left md:text-lg lg:text-xl">
            PARÉ Innovations agility sets them apart from the rest, allowing them to adapt to changing market trends and
            deliver innovative products that exceed expectations.
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex-[0.5] text-lg font-bold uppercase text-red-base md:text-2xl lg:text-3xl">Quality</div>
          <div className="flex-[1.5] text-right text-xs md:text-left md:text-lg lg:text-xl">
            At PARÉ Innovations, we believe in delivering the highest quality interior goods that stand the test of
            time. Our team works collaboratively to create products that not only look great but also exceed
            expectations.
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex-[0.5] text-lg font-bold uppercase text-red-base md:text-2xl lg:text-3xl">
            Human Centered
          </div>
          <div className="flex-[1.5] text-right text-xs md:text-left md:text-lg lg:text-xl">
            Our customers are at the heart of everything we do at PARÉ Innovations.
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex-[0.5] text-lg font-bold uppercase text-red-base md:text-2xl lg:text-3xl">Integrity</div>
          <div className="flex-[1.5] text-right text-xs md:text-left md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
