import { P1, P2, P3, PareText } from '../../assets'
import { Img } from '../custom'
import PRCard from './PRCard'

const ProductsData = [
  {
    id: '01',
    heading: 'Innov+',
    desc: 'Elevate your space with PARÉ Soffit Systems. Embrace the allure of wood, minus the drawbacks. Transform effortlessly with our versatile Soffit Louvers or sleek Vertica Soffit Panels. Discover our first-time-in-India products for walls and ceilings.',
    img: P1,
  },
  {
    id: '02',
    heading: 'Easy+',
    desc: "PARÉ's Easy+ Locking System revolutionizes wall and ceiling panel integration with a seamless, hassle-free installation. Embrace the Pyramid design for added texture or choose Linea panels for clean lines and easy flexibility. Experience effortless, dust-free installation with PARÉ's world-first innovation.",
    img: P2,
  },
  {
    id: '03',
    heading: 'Dura+',
    desc: "PARÉ DURA+ Systems redefine durability and functionality, ensuring a smooth and flexible experience. Elevate exteriors with Norma panels for long-lasting exterior facades, and enhance wall cladding with Stretta panels' high impact resistance. Experience excellence with PARÉ DURA+.",
    img: P3,
  },
]

const ProductsRange = () => {
  return (
    <div>
      <div className=" flex items-center justify-center">
        <h2 className="m-10  border-b-2 border-b-red-base text-center font-montserrat text-3xl font-bold uppercase lg:my-24 lg:text-4xl xl:text-5xl">
          Products Range
        </h2>
      </div>
      <div className="relative">
        <Img
          src={PareText}
          alt="pare"
          width={250}
          height={800}
          className="absolute -top-10 left-2 -z-10 hidden md:block lg:-top-28"
        />
        {ProductsData.map((product) => (
          <div key={product.id}>
            <PRCard {...product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsRange
