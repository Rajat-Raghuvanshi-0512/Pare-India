import { Suspense } from 'react'
import { Loader } from '../../components'
import { Brochure, ImgGallery, Info, MoreProducts, Shades, Trims } from '../../components/products'
import {
  PyramidImg,
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
  SoffitSideImg,
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
    smallImg: SoffitSideImg,
    heading: 'DURA+ Stretta',
    desc: 'Experience a flawless and refined exterior wall cladding with Stretta Apanels, designed to perfection. Enjoy a smooth and resilient surface that stands strong against scratches and impacts, ensuring lasting beauty for your space.',
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
