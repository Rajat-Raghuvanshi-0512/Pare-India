import { LampDesk } from '../../assets'
import Img from '../custom/Img'

const ContactInfo = () => {
  return (
    <section>
      <div className="flex gap-5 text-right md:items-end">
        <div className="relative flex flex-1 flex-col items-start gap-5 md:gap-10">
          <Img src={LampDesk} alt={'lampdesk'} width={350} height={600} />
          <a
            className="absolute -bottom-9 cursor-pointer font-helvetica md:-bottom-20 md:text-xl lg:text-3xl"
            href="#map"
          >
            MAPS
          </a>
        </div>
        <div className="flex-1">
          <div className="ml-auto flex flex-col justify-between gap-1 font-helvetica text-xs md:w-[80%] md:gap-3 md:text-lg">
            <div>
              <p className="mb-2 font-black text-red-base"> +91 8356954856</p>
              <p className=" font-black text-red-base">hello@pareindia.com</p>
            </div>
            <div className="ml-auto mt-10 w-40 text-left text-[10px] md:mt-0 md:w-full md:text-right md:text-lg">
              <p className="mt-5">
                Corporate Office Address - 102, 103, Jai Commercial Complex, Cadbury Junction, Khopat, Thane West,
                Thane, Maharashtra 400601
              </p>
              <p className="mt-3">
                Experience Gallery - 21/N, Laxmi Industrial Estate, New Link Rd, near Laxmi Chhaya Hotel, Andheri West,
                Mumbai, Maharashtra 400053
              </p>
            </div>
          </div>
          <h1 className="mt-5 hidden font-poppins text-8xl md:block lg:text-9xl">GET IN TOUCH</h1>
        </div>
      </div>
      <h1 className="my-5 mt-5 text-right font-poppins text-8xl !leading-snug md:hidden">
        GET <br /> IN TOUCH
      </h1>
    </section>
  )
}

export default ContactInfo
