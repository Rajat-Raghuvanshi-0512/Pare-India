import { ContactImg, ContactImgPhone } from '../../assets'
import { Button, Img } from '../custom'

const ContactForm = () => {
  return (
    <section className="py-5 md:p-10 md:pr-0 lg:py-20 lg:pl-20 ">
      <div className="grid md:grid-cols-2 md:gap-5">
        <div className="absolute mt-6 h-[590px] w-[75%] scale-95 bg-[#151515B5] bg-opacity-25 p-4 md:static md:h-auto md:w-full">
          <h2 className="font-metropolis text-3xl leading-snug md:text-4xl lg:text-5xl lg:leading-snug">
            <div className="flex items-center gap-1 lg:gap-3">
              <div className=" font-medium text-red-base">LET&apos;S WORK</div>
              <div className="mr-auto h-[2px] w-[20%] bg-red-base md:w-[25%] lg:h-1"></div>
            </div>
            on your project
          </h2>
          <p className="my-3 font-helvetica text-xs md:text-base lg:text-xl">
            Let&apos;s work together to turn your design dreams into reality.
          </p>
          <p className="my-3 font-helvetica text-xs md:text-base lg:text-xl">
            Fill out our form and our team will be in touch with you shortly to get started on your project
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                className="border-b-2 border-gray-400 bg-transparent p-1 font-montserrat text-white outline-none placeholder:uppercase lg:py-3 lg:text-xl"
              />
              <input
                type="number"
                placeholder="Phone number"
                className="border-b-2 border-gray-400 bg-transparent p-1 font-montserrat text-white outline-none placeholder:uppercase lg:py-3 lg:text-xl"
              />
              <input
                type="email"
                placeholder="email"
                className="border-b-2 border-gray-400 bg-transparent p-1  font-montserrat text-white  outline-none placeholder:uppercase lg:py-3 lg:text-xl"
              />
              <select
                id="cars"
                name="cars"
                className="border-b-2 border-gray-400 bg-transparent p-1 font-montserrat text-gray-400  outline-none placeholder:uppercase lg:py-3 lg:text-xl"
                placeholder="requirement type"
                defaultValue={'DEFAULT'}
              >
                <option value="DEFAULT" disabled className="bg-black uppercase text-gray-400">
                  REQUIREMENT TYPE
                </option>
                <option value="walls" className="bg-black-base text-white">
                  Walls
                </option>
                <option value="ceiling" className="bg-black-base text-white">
                  Ceiling
                </option>
                <option value="facades" className="bg-black-base text-white">
                  Facades
                </option>
              </select>
              <textarea
                type="text"
                placeholder="your message"
                className="resize-none border-b-2 border-gray-400 bg-transparent  p-1 font-montserrat  text-white outline-none placeholder:uppercase lg:py-3 lg:text-xl"
              />
            </div>
            <p className="mb-5 mt-6 font-montserrat text-xs md:text-base lg:mb-8 lg:mt-5 lg:text-xl">
              I AGREE TO TERMS OF THE PRIVACY POLICY
            </p>
            <Button variant="outlined" type="buttton">
              SEND REQUEST
            </Button>
          </form>
        </div>
        <div className="h-[640px] w-full md:h-auto">
          <Img
            src={ContactImgPhone}
            alt="img"
            width={500}
            height={800}
            className="ml-auto mr-7 h-full w-[75%] object-cover md:hidden"
          />
          <Img
            src={ContactImg}
            alt="img"
            width={500}
            height={600}
            className="hidden h-full w-full object-cover md:block"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactForm
