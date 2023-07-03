import { LineaBlurBg } from '../../../assets'
import { Img } from '../../custom'

const data = [
  {
    heading: 'HISTORY',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit adipisci sed enim asperiores. Beatae cumque culpa fugiat nam magnam voluptate maxime ratione pariatur repellendus!',
  },
  {
    heading: 'features',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit adipisci sed enim asperiores. Beatae cumque culpa fugiat nam magnam voluptate maxime ratione pariatur repellendus!',
  },
  {
    heading: 'trims',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit adipisci sed enim asperiores. Beatae cumque culpa fugiat nam magnam voluptate maxime ratione pariatur repellendus!',
  },
]

const Info = () => {
  return (
    <div className="relative -mb-7 px-5 py-10 text-white md:h-[600px] md:p-20">
      <Img
        src={LineaBlurBg}
        alt={'bur-bg'}
        className={'absolute left-0 top-0 -z-10 -mt-5 h-full w-screen object-cover'}
      />
      <div>
        <h2 className="font-metropolis text-4xl font-black !leading-snug md:text-center md:text-4xl lg:text-5xl">
          STAYS WITH YOU <br /> THROUGH THICK AND THIN
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {data.map((item, idx) => (
            <div
              key={item.heading}
              className={`w-[80%] md:w-full ${idx === 1 ? 'ml-auto text-right md:text-left' : ''}`}
            >
              <h5 className="font-metropolis text-3xl font-bold uppercase text-red-base">{item.heading}</h5>
              <p className="mt-5 font-montserrat text-lg font-medium drop-shadow-2xl">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Info
