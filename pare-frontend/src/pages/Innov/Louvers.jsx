import { Suspense } from 'react'
import { Loader } from '../../components'
import { Brochure, ImgGallery, Info, MoreProducts, Shades, Trims } from '../../components/products'
import {
  PyramidImg,
  PyramidSideImg,
  ArchImg,
  ArchSideImg,
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
    smallImg: PyramidSideImg,
    heading: 'EASY+ Pyramid',
    desc: 'Unleash the power of sharp angles and captivating lines with EASY+ Pyramid. Elevate your space with architectural depth and a visually stunning design that adds a touch of modern sophistication.',
  },
  {
    image: ArchImg,
    smallImg: ArchSideImg,
    heading: 'EASY+ Arch',
    desc: 'Experience the beauty of graceful curves and flowing lines with EASY+ Arch. Elevate your space with the timeless allure of arched designs that creates a sense of elegance and architectural intrigue.',
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
