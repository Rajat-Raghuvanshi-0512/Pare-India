import { Suspense } from 'react'
import { Loader } from '../../components'
import { Brochure, ImgGallery, Info, MoreProducts, Shades, Trims } from '../../components/products'
import {
  ArchImg,
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
  LouverSideImg,
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
    image: ArchImg,
    smallImg: LouverSideImg,
    heading: 'DURA+ Norma',
    desc: 'Discover the epitome of durability and aesthetics with Norma panels, meticulously crafted to elevate your exterior facades. Embrace a long-lasting, decorative solution that stands the test of time.',
    redirect: '/norma',
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
