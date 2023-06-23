import { ArchImg, ArchSideImg, PyramidImg, PyramidSideImg } from '../../../assets'
import { Img } from '../../custom'

const data = [
  {
    image: PyramidImg,
    smallImg: PyramidSideImg,
    heading: 'EASY+ Pyramid',
    desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
  },
  {
    image: ArchImg,
    smallImg: ArchSideImg,
    heading: 'EASY+ Arch',
    desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
  },
]

const ImageBox = ({ image, smallImg, heading, desc, idx }) => {
  return (
    <div className={`relative drop-shadow-lg ${idx == 0 ? 'z-10' : 'z-0'}`}>
      <Img alt={heading} src={image} className={'h-[300px] w-full'} />
      <Img
        alt={heading}
        src={smallImg}
        className={`absolute left-0 top-[50%] h-[420px] -translate-x-[40%] -translate-y-[50%]`}
      />
      <div className="bg-white p-5 text-black md:p-10">
        <h6 className="text-xl font-bold">{heading}</h6>
        <p className="py-5 text-sm">{desc}</p>
      </div>
    </div>
  )
}

const MoreProducts = () => {
  return (
    <section className="bg-red-base p-5 font-montserrat text-white md:p-10 lg:px-20 2xl:px-40">
      <h2 className="text-xl font-bold md:text-3xl lg:text-5xl">
        Expanding Possibilities with Easy+ Discover More Products
      </h2>
      <p className="my-5 text-base md:my-10 md:text-xl lg:text-2xl">
        Our versatile product range that includes two additional innovative solutions. Discover more with Easy+ and
        explore the possibilities.
      </p>
      <div className="my-5 grid grid-cols-2 gap-5 md:my-10 md:gap-10 lg:gap-20 2xl:gap-40">
        {data.map((item, idx) => (
          <ImageBox key={item.heading} {...item} idx={idx} />
        ))}
      </div>
    </section>
  )
}

export default MoreProducts
