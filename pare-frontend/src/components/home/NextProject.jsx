import { NextProjectImg, NextProjectImgWeb } from '../../assets'
import { Button } from '../custom'

const NextProject = () => {
  return (
    <section className="px-5 pb-5 pt-14 md:p-10 lg:px-16">
      <div className="grid  md:grid-cols-2 md:gap-5">
        <div className="absolute mt-5 h-[500px] w-[70%] bg-[#151515B5] bg-opacity-25 p-4 md:static md:mt-0 md:h-auto md:w-full">
          <h2 className="font-metropolis text-3xl leading-snug md:text-4xl lg:text-6xl lg:leading-snug">
            IT&apos;S TIME TO DISCUSS YOUR <span className="font-bold text-red-base">NEXT PROJECT</span>
          </h2>
          <p className="my-3 font-helvetica text-xs md:text-base lg:text-xl">
            Let&apos;s get the ball rolling on your next project! Reach out to us at PARÉ and let&apos;s discuss how we
            can bring your vision to life. We&apos;re excited to hear from you!
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                className="border-b-2 border-[#adadad] bg-transparent p-1 font-montserrat text-white outline-none placeholder:uppercase lg:py-3 lg:text-xl"
              />
              <input
                type="number"
                placeholder="Phone number"
                className="border-b-2 border-[#adadad] bg-transparent p-1 font-montserrat text-white outline-none placeholder:uppercase lg:py-3 lg:text-xl"
              />
              <input
                type="email"
                placeholder="email"
                className="border-b-2 border-[#adadad] bg-transparent p-1  font-montserrat text-white  outline-none placeholder:uppercase lg:py-3 lg:text-xl"
              />
            </div>
            <p className="mb-5 mt-3 font-montserrat text-xs md:text-base lg:mb-8 lg:mt-5 lg:text-xl">
              I AGREE TO TERMS OF THE PRIVACY POLICY
            </p>
            <Button variant="outlined" type="buttton">
              SEND REQUEST
            </Button>
          </form>
        </div>
        <div className="h-[550px] md:h-auto">
          <img
            src={NextProjectImg}
            alt="img"
            width={300}
            height={300}
            className="ml-auto h-full w-[80%] object-cover md:hidden"
          />
          <img
            src={NextProjectImgWeb}
            alt="img"
            width={500}
            height={600}
            className="ml-auto hidden h-full object-cover md:block"
          />
        </div>
      </div>
    </section>
  )
}

export default NextProject
