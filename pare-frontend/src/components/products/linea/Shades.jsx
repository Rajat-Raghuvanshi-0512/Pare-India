import {
  LineaMarbleImg1,
  LineaMarbleImg2,
  LineaMarbleImg3,
  LineaMarbleShade1,
  LineaMarbleShade2,
  LineaMarbleShade3,
  LineaMetallicImg1,
  LineaMetallicImg2,
  LineaMetallicImg3,
  LineaMetallicShade1,
  LineaMetallicShade2,
  LineaMetallicShade3,
  LineaNatureImg1,
  LineaNatureImg2,
  LineaNatureImg3,
  LineaNatureShade1,
  LineaNatureShade2,
  LineaNatureShade3,
} from '../../../assets'
import ShadeBox from '../ShadeBox'

const metallicData = [
  { img: LineaMetallicImg1, shade: LineaMetallicShade1 },
  { img: LineaMetallicImg2, shade: LineaMetallicShade2 },
  { img: LineaMetallicImg3, shade: LineaMetallicShade3 },
  { img: LineaMetallicImg1, shade: LineaMetallicShade1 },
]

const marbleData = [
  { img: LineaMarbleImg1, shade: LineaMarbleShade1 },
  { img: LineaMarbleImg2, shade: LineaMarbleShade2 },
  { img: LineaMarbleImg3, shade: LineaMarbleShade3 },
  { img: LineaMarbleImg1, shade: LineaMarbleShade1 },
]

const natureData = [
  { img: LineaNatureImg1, shade: LineaNatureShade1 },
  { img: LineaNatureImg2, shade: LineaNatureShade2 },
  { img: LineaNatureImg3, shade: LineaNatureShade3 },
  { img: LineaNatureImg1, shade: LineaNatureShade1 },
]
const Shades = () => {
  return (
    <section className="bg-black-base py-10 font-montserrat">
      <h2 className="mx-auto w-fit border-b-2 border-red-base py-2 text-center text-3xl font-bold text-white lg:text-4xl">
        AVAILABLE SHADES
      </h2>
      <div className="relative md:mt-10 lg:mt-20">
        <div className="flex w-full items-center md:pl-10">
          <h5 className="absolute w-fit -rotate-90 text-xl font-medium text-red-base">
            METALLIC <br /> COLLECTION
          </h5>
          <div className="ml-28 flex gap-10 overflow-x-auto overflow-y-hidden md:ml-40 md:gap-10 lg:gap-20">
            {metallicData.map((item, idx) => (
              <ShadeBox item={item} idx={idx} key={item.img + idx} />
            ))}
          </div>
        </div>
        <div className="flex items-center bg-red-base md:pl-10">
          <h5 className="absolute w-fit -rotate-90 text-xl font-medium text-white">
            MARBLE <br /> COLLECTION
          </h5>
          <div className="ml-28 flex  gap-10 overflow-y-hidden overflow-x-scroll md:ml-40 md:gap-10 lg:gap-20">
            {marbleData.map((item, idx) => (
              <ShadeBox item={item} idx={idx} key={item.img + idx} />
            ))}
          </div>
        </div>
        <div className="flex items-center md:pl-10">
          <h5 className="absolute w-fit -rotate-90 text-xl font-medium text-red-base">
            NATURE <br /> COLLECTION
          </h5>
          <div className="ml-28 flex gap-10 overflow-y-hidden overflow-x-scroll md:ml-40 md:gap-10 lg:gap-20">
            {natureData.map((item, idx) => (
              <ShadeBox item={item} idx={idx} key={item.img + idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shades
