import { Feather, PenTool, Star, SunLoader } from '../../assets'

const elemData = [
  {
    image: Feather,
    heading: 'Sustainability',
    desc: 'We believe in preserving our planet for future generations, which is why we use environmentally-friendly materials and sustainable practices in all our manufacturing processes.',
  },
  {
    image: SunLoader,
    heading: 'Integrity',
    desc: 'We believe in doing the right thing, even when no one is watching. We take responsibility for our actions and are accountable to our stakeholders.',
  },
  {
    image: PenTool,
    heading: 'Innovation',
    desc: 'Our customers can trust us to deliver on our promises and stand behind our products. Experience the PARÉ Innovations difference with our unwavering commitment to integrity.',
  },
  {
    image: Star,
    heading: 'Quality',
    desc: 'Our team of designers, engineers, and craftsmen work collaboratively to create products that not only look great but also exceed expectations.',
  },
]

const Element = ({ image, heading, desc }) => {
  return (
    <div className="mx-auto flex w-32 flex-col items-center gap-3 font-metropolis text-white md:w-full md:p-0">
      <div className="h-24 w-24 rounded-full border border-white p-5 md:border-2 md:p-4">
        <img src={image} alt="quality" className="h-full w-full object-contain" />
      </div>
      <h6 className="text-xl font-semibold uppercase">{heading}</h6>
      <p className="text-center text-xs font-light md:text-sm">{desc}</p>
    </div>
  )
}

const Qualities = () => {
  return (
    <div>
      <div className="relative ml-5 flex font-montserrat font-bold uppercase md:ml-10 lg:text-3xl">
        <span>Our Qualities</span>
        <div className="relative ml-2 mt-3 border-r border-t border-[#151515] p-5 md:-mb-2 md:mt-5 lg:p-7">
          <div className="absolute -right-1 bottom-0 hidden h-1 rounded bg-[#151515] p-1 md:block"></div>
        </div>
      </div>
      <div className="mx-auto flex flex-wrap gap-5 bg-red-base p-5 md:flex-nowrap md:gap-10 md:p-10 lg:gap-20 lg:px-20  2xl:scale-110 2xl:px-60">
        {elemData.map((element) => {
          return <Element key={element.heading} {...element} />
        })}
      </div>
    </div>
  )
}

export default Qualities
