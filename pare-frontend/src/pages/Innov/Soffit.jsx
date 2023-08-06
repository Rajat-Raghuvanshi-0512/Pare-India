import { Suspense } from 'react'
import { Loader } from '../../components'
import { Brochure, ImgGallery, Info, MoreProducts, Shades, Trims } from '../../components/products'
import {
  PyramidImg,
  PyramidSideImg,
  ArchImg,
  ArchSideImg,
  SoffitImg1,
  SoffitImg2,
  SoffitImg3,
  SoffitImg4,
  SoffitShade1Shade6,
  SoffitShade1Shade5,
  SoffitShade1Img5,
  SoffitShade1Img6,
  SoffitShade1Img4,
  SoffitShade1Img3,
  SoffitShade1Img2,
  SoffitShade1Img1,
  SoffitShade1Shade1,
  SoffitShade1Shade2,
  SoffitShade1Shade3,
  SoffitShade1Shade4,
  SoffitShade2Shade6,
  SoffitShade2Shade5,
  SoffitShade2Img5,
  SoffitShade2Img6,
  SoffitShade2Img4,
  SoffitShade2Img3,
  SoffitShade2Img2,
  SoffitShade2Img1,
  SoffitShade2Shade1,
  SoffitShade2Shade2,
  SoffitShade2Shade3,
  SoffitShade2Shade4,
  SoffitShade3Img1,
  SoffitShade3Img2,
  SoffitShade3Shade5,
  SoffitShade3Shade6,
} from '../../assets'
import SoffitBanner from '../../components/products/soffit/SoffitBanner'

const metallicData = [
  { img: SoffitShade1Img1, shade: SoffitShade1Shade1 },
  { img: SoffitShade1Img2, shade: SoffitShade1Shade2 },
  { img: SoffitShade1Img3, shade: SoffitShade1Shade3 },
  { img: SoffitShade1Img4, shade: SoffitShade1Shade4 },
  { img: SoffitShade1Img5, shade: SoffitShade1Shade5 },
  { img: SoffitShade1Img6, shade: SoffitShade1Shade6 },
]

const shade2Data = [
  { img: SoffitShade2Img1, shade: SoffitShade2Shade1 },
  { img: SoffitShade2Img2, shade: SoffitShade2Shade2 },
  { img: SoffitShade2Img3, shade: SoffitShade2Shade3 },
  { img: SoffitShade2Img4, shade: SoffitShade2Shade4 },
  { img: SoffitShade2Img5, shade: SoffitShade2Shade5 },
  { img: SoffitShade2Img6, shade: SoffitShade2Shade6 },
]

const shade3Data = [
  { img: SoffitShade3Img1, shade: SoffitShade3Shade5 },
  { img: SoffitShade3Img2, shade: SoffitShade3Shade6 },
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
const Soffit = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SoffitBanner />
      <ImgGallery img1={SoffitImg1} img2={SoffitImg2} img3={SoffitImg3} img4={SoffitImg4} />
      <Info />
      <Shades
        firstTitle="WOODEN"
        firstData={metallicData}
        secondTitle="FOREST"
        secondData={shade2Data}
        thirdTitle={'UNI-COLOR'}
        thirdData={shade3Data}
      />
      <Trims />
      <Brochure />
      <MoreProducts data={otherProducts} />
    </Suspense>
  )
}

export default Soffit
