import { hyundai, minerva, ginger, regency } from '../../assets'

const scrollData = [
  {
    image: hyundai,
  },
  {
    image: minerva,
  },
  {
    image: ginger,
  },
  {
    image: regency,
  },
  {
    image: hyundai,
  },
  {
    image: minerva,
  },
  {
    image: ginger,
  },
  {
    image: regency,
  },
]

const InfiniteScroll = () => {
  return (
    <section>
      <div className="relative ml-5 flex font-montserrat font-bold uppercase md:ml-10 lg:text-3xl">
        <span>Trusted by</span>
        <div className="relative ml-2 mt-3 border-r border-t border-[#151515] p-5 md:-mb-2 md:mt-5 lg:p-7">
          <div className="absolute -right-1 bottom-0 hidden h-1 rounded bg-[#151515] p-1 md:block"></div>
        </div>
      </div>
      <div className="w-screen overflow-x-hidden bg-red-base">
        <div className="animate-infinite bg-yellow-dark flex h-20 shadow-md md:h-28">
          <div className="flex items-center justify-center ">
            {scrollData.map((item, idx) => (
              <div className="flex w-[150px] items-center md:w-[300px]" key={idx}>
                <img
                  loading="lazy"
                  src={item.image}
                  alt="logo"
                  className="h-20 w-full object-contain md:h-24 lg:h-32"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center ">
            {scrollData.map((item, idx) => (
              <div className="flex w-[150px] items-center md:w-[300px]" key={idx}>
                <img
                  loading="lazy"
                  src={item.image}
                  alt="logo"
                  className="h-20 w-full object-contain md:h-24 lg:h-32"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfiniteScroll
