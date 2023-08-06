import { Suspense } from 'react'
import { Loader } from '../components'
import { Brochure, ImgGallery, Info, MoreProducts, Shades, Trims } from '../components/products'
import {
  PyramidImg,
  PyramidSideImg,
  ArchImg,
  ArchSideImg,
  WaveImg1,
  WaveImg2,
  WaveImg3,
  WaveImg4,
  WaveShade1Img1,
  WaveShade1Img2,
  WaveShade1Img3,
  WaveShade1Img4,
  WaveShade1Img5,
  WaveShade1Img6,
  WaveShade1Shade1,
  WaveShade1Shade2,
  WaveShade1Shade3,
  WaveShade1Shade4,
  WaveShade1Shade5,
  WaveShade1Shade6,
  WaveShade2Img1,
  WaveShade2Shade1,
  WaveShade2Shade2,
  WaveShade2Shade3,
  WaveShade2Shade4,
  WaveShade2Shade5,
  WaveShade2Shade6,
  WaveShade2Img2,
  WaveShade2Img3,
  WaveShade2Img4,
  WaveShade2Img5,
  WaveShade2Img6,
} from '../assets'
import WaveBanner from '../components/products/wave/WaveBanner'

const metallicData = [
  { img: WaveShade1Img1, shade: WaveShade1Shade1 },
  { img: WaveShade1Img2, shade: WaveShade1Shade2 },
  { img: WaveShade1Img3, shade: WaveShade1Shade3 },
  { img: WaveShade1Img4, shade: WaveShade1Shade4 },
  { img: WaveShade1Img5, shade: WaveShade1Shade5 },
  { img: WaveShade1Img6, shade: WaveShade1Shade6 },
]

const shade2Data = [
  { img: WaveShade2Img1, shade: WaveShade2Shade1 },
  { img: WaveShade2Img2, shade: WaveShade2Shade2 },
  { img: WaveShade2Img3, shade: WaveShade2Shade3 },
  { img: WaveShade2Img4, shade: WaveShade2Shade4 },
  { img: WaveShade2Img5, shade: WaveShade2Shade5 },
  { img: WaveShade2Img6, shade: WaveShade2Shade6 },
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
const Wave = () => {
  return (
    <Suspense fallback={<Loader />}>
      <WaveBanner />
      <ImgGallery img1={WaveImg1} img2={WaveImg2} img3={WaveImg3} img4={WaveImg4} />
      <Info />
      <Shades firstTitle="WOODEN" firstData={metallicData} secondTitle="FOREST" secondData={shade2Data} />
      <Trims />
      <Brochure />
      <MoreProducts data={otherProducts} />
    </Suspense>
  )
}

export default Wave
