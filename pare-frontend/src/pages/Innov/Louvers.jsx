import { Suspense } from 'react'
import { Loader } from '../../components'
import { Brochure, ImgGallery, Info, MoreProducts, Shades, Trims } from '../../components/products'
import {
  PyramidImg,
  ArchImg,
  LouverImg1,
  LouverImg2,
  LouverImg3,
  LouverImg4,
  louverShade1Img1,
  louverShade1Shade2,
  louverShade1Shade1,
  louverShade1Img2,
  louverShade1Img3,
  louverShade1Shade3,
  louverShade2Img1,
  louverShade2Shade1,
  louverShade2Img2,
  louverShade2Shade2,
  louverShade2Shade3,
  louverShade2Img3,
  louverShade3Img1,
  louverShade3Shade1,
  louverShade3Shade2,
  louverShade3Img2,
  louverShade3Img3,
  louverShade3Shade3,
  louverShade3Shade4,
  louverShade3Img4,
  louverShade3Img5,
  louverShade3Shade5,
  louverShade3Shade6,
  louverShade3Img6,
  LouverSideImg,
  SoffitSideImg,
  VerticaImg,
  VerticaSideImg,
} from '../../assets'
import LouversBanner from '../../components/products/louvers/LouversBanner'

const metallicData = [
  { img: louverShade1Img1, shade: louverShade1Shade1 },
  { img: louverShade1Img2, shade: louverShade1Shade2 },
  { img: louverShade1Img3, shade: louverShade1Shade3 },
]

const marbleData = [
  { img: louverShade2Img1, shade: louverShade2Shade1 },
  { img: louverShade2Img2, shade: louverShade2Shade2 },
  { img: louverShade2Img3, shade: louverShade2Shade3 },
]

const natureData = [
  { img: louverShade3Img1, shade: louverShade3Shade1 },
  { img: louverShade3Img2, shade: louverShade3Shade2 },
  { img: louverShade3Img3, shade: louverShade3Shade3 },
  { img: louverShade3Img4, shade: louverShade3Shade4 },
  { img: louverShade3Img5, shade: louverShade3Shade5 },
  { img: louverShade3Img6, shade: louverShade3Shade6 },
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
const Louvers = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LouversBanner />
      <ImgGallery img1={LouverImg1} img2={LouverImg2} img3={LouverImg3} img4={LouverImg4} />
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

export default Louvers
