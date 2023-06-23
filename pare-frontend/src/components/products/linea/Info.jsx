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
    <div className="relative -mb-7 h-[600px] p-20 text-white">
      <Img src={LineaBlurBg} alt={'bur-bg'} className={'absolute left-0 top-0 -z-10 -mt-5 h-full w-screen'} />
      <div>
        <h2 className="text-center font-metropolis text-5xl font-bold !leading-snug">
          STAYS WITH YOU <br /> THROUGH THICK AND THIN
        </h2>
        <div className="mt-10 grid grid-cols-3 gap-10">
          {data.map((item) => (
            <div key={item.heading}>
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
