import {
  P1,
  P12,
  P13,
  P2,
  P21,
  P22,
  P3,
  P31,
  P32,
  PareText,
  P1Phone,
  P12Phone,
  P13Phone,
  P2Phone,
  P21Phone,
  P22Phone,
  P3Phone,
  P31Phone,
  P32Phone,
  P41,
  P4,
  P42,
} from '../../assets'
import { useMediaQuery } from '../../utils/custom-hooks'
import { Img } from '../custom'
import PRCard from './PRCard'

const mainData = [
  {
    id: '01',
    heading: 'Innov+',
    desc: 'Elevate your space with PARÉ Soffit Systems. Embrace the allure of wood, minus the drawbacks. Transform effortlessly with our versatile Soffit Louvers or sleek Vertica Soffit Panels. Discover our first-time-in-India products for walls and ceilings.',
  },
  {
    id: '02',
    heading: 'Easy+',
    desc: "PARÉ's Easy+ Locking System revolutionizes wall and ceiling panel integration with a seamless, hassle-free installation. Embrace the Pyramid design for added texture or choose Linea panels for clean lines and easy flexibility. Experience effortless, dust-free installation with PARÉ's world-first innovation.",
  },
  {
    id: '03',
    heading: 'Dura+',
    desc: "PARÉ DURA+ Systems redefine durability and functionality, ensuring a smooth and flexible experience. Elevate exteriors with Norma panels for long-lasting exterior facades, and enhance wall cladding with Stretta panels' high impact resistance. Experience excellence with PARÉ DURA+.",
  },
  {
    id: '04',
    heading: 'Innov2+',
    desc: 'Discover the unparalleled transformation with Innov2+ Wall & Ceiling Panels! Prepare to be captivated by our latest breakthrough in interior design. Innov2+ brings you an unmatched blend of innovation and excellence, elevating your spaces to a realm of contemporary elegance and cutting-edge functionality.',
  },
]

const ProductsData = [
  {
    img: P1,
    img1: P12,
    img2: P13,
    ...mainData[0],
  },
  {
    img: P2,
    img1: P21,
    img2: P22,
    ...mainData[1],
  },
  {
    img: P3,
    img1: P31,
    img2: P32,
    ...mainData[2],
  },
  {
    img: P4,
    img1: P41,
    img2: P42,
    ...mainData[3],
  },
]

const ProductsDataPhone = [
  {
    img: P1Phone,
    img1: P12Phone,
    img2: P13Phone,
    ...mainData[0],
  },
  {
    img: P2Phone,
    img1: P21Phone,
    img2: P22Phone,
    ...mainData[1],
  },
  {
    img: P3Phone,
    img1: P31Phone,
    img2: P32Phone,
    ...mainData[2],
  },
  {
    img: P4,
    img1: P41,
    img2: P42,
    ...mainData[3],
  },
]

const ProductsRange = () => {
  const isMobile = useMediaQuery('(max-width:768px)')
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
          className="absolute -top-10 left-2 -z-10 hidden object-contain md:block lg:-top-28"
          loading="lazy"
        />
        {isMobile
          ? ProductsDataPhone.map((product) => (
              <div key={product.id}>
                <PRCard {...product} />
              </div>
            ))
          : ProductsData.map((product) => (
              <div key={product.id}>
                <PRCard {...product} />
              </div>
            ))}
      </div>
    </div>
  )
}

export default ProductsRange
