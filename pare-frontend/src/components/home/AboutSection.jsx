import { useRef } from 'react'
import { desk, sofa, sofa1000 } from '../../assets'
import { Img } from '../custom'
import { useInView } from 'framer-motion'
import CountUp from 'react-countup'

const AboutSectionSm = ({ numbersRef, numbersInView }) => {
  return (
    <section className="m-5">
      <h3 className="font-metropolis text-4xl font-medium uppercase leading-snug">
        GIVE YOUR SPACE AN <span className="font-bold text-red-base">ASTONISHING</span> FEEL.
      </h3>
      <p className="mr-10 mt-8 font-helvetica leading-tight">
        Our vision is to impart a global outreach to Indian made Interior products. We identify innovative global trends
        and manufacture a matchless range in India.
      </p>
      <div>
        <div className="my-10 ml-auto mr-5 h-[240px] w-[260px] border border-red-base">
          <Img src={sofa} width={200} height={200} alt="sofa" className="-ml-3 mt-3 h-[240px] w-[260px] " />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-5 lg:mt-14 lg:gap-10">
        <div>
          <div className="h-[130px] w-[100px] border border-red-base">
            <Img src={desk} width={300} height={400} alt="desk" className="-ml-3 mt-2  h-full  w-full" />
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center gap-2 text-center" ref={numbersRef}>
          {numbersInView && (
            <>
              <div>
                <p className="font-metropolis text-2xl font-bold text-red-base">
                  <CountUp end={20} duration={2} />+
                </p>
                <p className="font-helvetica text-xs">HAPPY CUSTOMERS</p>
              </div>
              <div>
                <p className="font-metropolis text-2xl font-bold text-red-base">
                  <CountUp end={45} duration={2} />+
                </p>
                <p className="font-helvetica text-xs">CITIES SERVED</p>
              </div>
              <div>
                <p className="font-metropolis text-2xl font-bold text-red-base">
                  <CountUp end={200} duration={1.5} />+
                </p>
                <p className="font-helvetica text-xs">CLIENT REVIEWS</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
const AboutSectionLg = ({ numbersInView, numbersRef }) => {
  return (
    <section className="m-10 lg:m-16 2xl:mx-48">
      <div className="grid grid-cols-2 gap-10 lg:gap-16">
        <div className="mt-20">
          <h3 className="mb-3 font-metropolis text-xl font-bold uppercase lg:text-3xl">About Us</h3>
          <div className="h-[300px] w-[300px] border-2 border-red-base lg:h-[500px] lg:w-[500px]">
            <Img
              src={sofa1000}
              width={500}
              height={500}
              alt="sofa"
              className="-ml-3 mt-3 h-[300px] w-[300px] object-contain lg:-ml-4  lg:mt-4 lg:h-[500px] lg:w-[500px]"
            />
          </div>
        </div>
        <div className="text-right">
          <h3 className="font-metropolis font-light uppercase !leading-snug md:text-4xl lg:text-5xl">
            GIVE YOUR SPACE AN <span className="font-bold text-red-base">ASTONISHING</span> FEEL.
          </h3>
          <p className="ml-10 mt-8 font-helvetica text-xl leading-tight">
            Our vision is to impart a global outreach to Indian made Interior products. We identify innovative global
            trends and manufacture a matchless range in India.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-5 lg:mt-14 lg:gap-10">
            <div className="flex items-end gap-5 text-center" ref={numbersRef}>
              {numbersInView && (
                <>
                  <div>
                    <p className="font-metropolis text-xl font-bold text-red-base lg:text-2xl">
                      <CountUp end={20} duration={2} />+
                    </p>
                    <p className="font-helvetica text-xs">HAPPY CUSTOMERS</p>
                  </div>
                  <div>
                    <p className="font-metropolis text-xl font-bold text-red-base lg:text-2xl">
                      <CountUp end={45} duration={2} />+
                    </p>
                    <p className="font-helvetica text-xs">CITIES SERVED</p>
                  </div>
                  <div>
                    <p className="font-metropolis text-xl font-bold text-red-base lg:text-2xl">
                      <CountUp end={200} duration={1.5} />+
                    </p>
                    <p className="font-helvetica text-xs">CLIENT REVIEWS</p>
                  </div>
                </>
              )}
            </div>
            <div>
              <div className="h-[170px] w-[140px] border-2 border-red-base lg:h-[300px] lg:w-[250px]">
                <Img
                  src={desk}
                  width={300}
                  height={400}
                  alt="desk"
                  className="-ml-2 mt-2  h-full  w-full lg:-ml-3 lg:mt-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const AboutSection = () => {
  const numbersRef = useRef(null)
  const numbersInView = useInView(numbersRef)
  return (
    <div>
      <div className="md:hidden">
        <AboutSectionSm numbersRef={numbersRef} numbersInView={numbersInView} />
      </div>
      <div className="hidden md:block">
        <AboutSectionLg numbersRef={numbersRef} numbersInView={numbersInView} />
      </div>
    </div>
  )
}

export default AboutSection
