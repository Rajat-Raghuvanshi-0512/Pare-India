import { Suspense } from 'react'
import { Loader } from '../../components'
import { Brochure, ImgGallery, Info, MoreProducts, Shades, Trims } from '../../components/products'
import {
  PyramidImg,
  VerticaImg1,
  VerticaImg2,
  VerticaImg3,
  verticaShade1Img1,
  verticaShade1Shade2,
  verticaShade1Shade1,
  verticaShade1Img2,
  verticaShade1Img3,
  verticaShade1Shade3,
  verticaShade2Img1,
  verticaShade2Shade1,
  verticaShade2Img2,
  verticaShade2Shade2,
  verticaShade2Shade3,
  verticaShade2Img3,
  verticaShade3Img1,
  verticaShade3Shade1,
  verticaShade3Shade2,
  verticaShade3Img2,
  verticaShade3Img3,
  verticaShade3Shade3,
  verticaShade3Shade4,
  verticaShade3Img4,
  verticaShade3Img5,
  verticaShade3Shade5,
  verticaShade3Shade6,
  verticaShade3Img6,
  VerticaImg4,
  VerticaImg,
  VerticaSideImg,
  LouverSideImg,
  ArchImg,
  SoffitSideImg,
} from '../../assets'
import VerticaBanner from '../../components/products/vertica/VerticaBanner'

const metallicData = [
  { img: verticaShade1Img1, shade: verticaShade1Shade1 },
  { img: verticaShade1Img2, shade: verticaShade1Shade2 },
  { img: verticaShade1Img3, shade: verticaShade1Shade3 },
]

const marbleData = [
  { img: verticaShade2Img1, shade: verticaShade2Shade1 },
  { img: verticaShade2Img2, shade: verticaShade2Shade2 },
  { img: verticaShade2Img3, shade: verticaShade2Shade3 },
]

const natureData = [
  { img: verticaShade3Img1, shade: verticaShade3Shade1 },
  { img: verticaShade3Img2, shade: verticaShade3Shade2 },
  { img: verticaShade3Img3, shade: verticaShade3Shade3 },
  { img: verticaShade3Img4, shade: verticaShade3Shade4 },
  { img: verticaShade3Img5, shade: verticaShade3Shade5 },
  { img: verticaShade3Img6, shade: verticaShade3Shade6 },
]

const otherProducts = [
  {
    image: PyramidImg,
    smallImg: LouverSideImg,
    heading: 'INNOV+ Soffit',
    desc: 'Discover Soffit, the perfect blend of aesthetic appeal and convenience, providing the charm of real wood without the drawbacks. Effortlessly transform your space with quick and easy installation, achieving a seamless finish that leaves a lasting impression.',
  },
  {
    image: ArchImg,
    smallImg: SoffitSideImg,
    heading: 'INNOV+ Louvers',
    desc: 'Experience the unmatched durability and waterproof capabilities of Louvers, making them perfect for diverse applications. With a seamless interlocking system, they effortlessly integrate with other PARÉ products, ensuring a flawless finish for your projects.',
  },
  {
    image: VerticaImg,
    smallImg: VerticaSideImg,
    heading: 'INNOV+ Vertica',
    desc: 'Transform your walls and ceilings with Vertica panels, the smart and hassle-free solution. Enjoy seamless installation, low maintenance, and reduced wastage, making your experience efficient and rewarding.',
  },
]
const Vertica = () => {
  return (
    <Suspense fallback={<Loader />}>
      <VerticaBanner />
      <ImgGallery img1={VerticaImg1} img2={VerticaImg2} img3={VerticaImg3} img4={VerticaImg4} />
      <Info />
      <Shades
        firstTitle="METALLIC"
        firstData={metallicData}
        secondTitle="MARBLE"
        secondData={marbleData}
        thirdTitle="NATURE"
        thirdData={natureData}
      />
      <Trims />
      <Brochure />
      <MoreProducts data={otherProducts} />
    </Suspense>
  )
}

export default Vertica
