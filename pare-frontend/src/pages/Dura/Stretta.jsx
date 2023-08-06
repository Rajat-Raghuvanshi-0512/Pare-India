import { Suspense } from 'react'
import { Loader } from '../../components'
import { Brochure, ImgGallery, Info, MoreProducts, Shades, Trims } from '../../components/products'
import {
  PyramidImg,
  PyramidSideImg,
  ArchImg,
  ArchSideImg,
  StrettaImg1,
  StrettaImg2,
  StrettaImg3,
  StrettaImg4,
  StrettaShade1Img1,
  StrettaShade1Img2,
  StrettaShade1Img3,
  StrettaShade1Img4,
  StrettaShade1Shade1,
  StrettaShade1Shade2,
  StrettaShade1Shade3,
  StrettaShade1Shade4,
} from '../../assets'
import StrettaBanner from '../../components/products/stretta/StrettaBanner'

const metallicData = [
  { img: StrettaShade1Img1, shade: StrettaShade1Shade1 },
  { img: StrettaShade1Img2, shade: StrettaShade1Shade2 },
  { img: StrettaShade1Img3, shade: StrettaShade1Shade3 },
  { img: StrettaShade1Img4, shade: StrettaShade1Shade4 },
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

const Stretta = () => {
  return (
    <Suspense fallback={<Loader />}>
      <StrettaBanner />
      <ImgGallery img1={StrettaImg1} img2={StrettaImg2} img3={StrettaImg3} img4={StrettaImg4} />
      <Info />
      <Shades firstTitle="REALWOOD" firstData={metallicData} />
      <Trims />
      <Brochure />
      <MoreProducts data={otherProducts} />
    </Suspense>
  )
}

export default Stretta
