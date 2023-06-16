import { Client1, Client2, ginger, hyundai, minerva, regency } from '../../assets'
import { Img } from '../custom'

const clients = [ginger, hyundai, minerva, regency]

const Vision = () => {
  return (
    <section className=" bg-red-base p-5 md:p-10 lg:p-16">
      <div className="flex gap-5 md:gap-10 lg:gap-16">
        <div className="hidden flex-[0.7] md:block"></div>
        <div className="flex-[1.3] text-center font-metropolis text-white md:text-left md:text-xl">
          <span className="text-3xl font-semibold">Our Vision,</span> is to bring Indian-made products to a global
          audience by leveraging our expertise in manufacturing and identifying emerging trends. Our ultimate goal is to
          revolutionize Indian products and make them a benchmark for excellence in the 21st century.
        </div>
      </div>
      <div className="hidden md:block">
        <h6 className="py-5 font-metropolis text-xl font-semibold text-white">Our clients include</h6>
        <div className="flex justify-between gap-10 p-10">
          {clients.map((client, idx) => {
            return (
              <div key={client + idx}>
                <Img src={client} alt={'client' + idx + 1} width={200} height={200} />
              </div>
            )
          })}
        </div>
      </div>
      <div className="mx-5 my-10 flex flex-col gap-16 md:hidden">
        <Img src={hyundai} alt={'godrej'} width={400} />
        <Img src={minerva} alt={'godrej'} width={400} />
        <Img src={ginger} alt={'godrej'} width={400} />
        <Img src={regency} alt={'godrej'} width={400} />
      </div>
    </section>
  )
}

export default Vision
