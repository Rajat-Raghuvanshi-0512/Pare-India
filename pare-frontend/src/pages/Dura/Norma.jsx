import { Suspense } from 'react'
import { Loader } from '../../components'
import { Brochure, ImgGallery, Info, MoreProducts, Shades, Trims } from '../../components/products'
import {
  PyramidImg,
  PyramidSideImg,
  ArchImg,
  ArchSideImg,
  NormaImg1,
  NormaImg2,
  NormaImg3,
  NormaImg4,
  NormaShade1Img1,
  NormaShade1Img2,
  NormaShade1Img3,
  NormaShade1Shade1,
  NormaShade1Shade2,
  NormaShade1Shade3,
  NormaShade1Shade4,
  NormaShade1Img4,
} from '../../assets'
import NormaBanner from '../../components/products/norma/NormaBanner'

const metallicData = [
  { img: NormaShade1Img1, shade: NormaShade1Shade1 },
  { img: NormaShade1Img2, shade: NormaShade1Shade2 },
  { img: NormaShade1Img3, shade: NormaShade1Shade3 },
  { img: NormaShade1Img4, shade: NormaShade1Shade4 },
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
const Norma = () => {
  return (
    <Suspense fallback={<Loader />}>
      <NormaBanner />
      <ImgGallery img1={NormaImg1} img2={NormaImg2} img3={NormaImg3} img4={NormaImg4} />
      <Info />
      <Shades firstTitle="REALWOOD" firstData={metallicData} />
      <Trims />
      <Brochure />
      <MoreProducts data={otherProducts} />
    </Suspense>
  )
}

export default Norma
