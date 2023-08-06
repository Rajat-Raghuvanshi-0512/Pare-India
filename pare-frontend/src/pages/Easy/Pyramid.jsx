import { Suspense } from 'react'
import { Loader } from '../../components'
import { Brochure, ImgGallery, Info, MoreProducts, PyramidBanner, Shades, Trims } from '../../components/products'
import {
  LineaMarbleImg1,
  LineaMarbleImg2,
  LineaMarbleImg3,
  LineaMarbleShade1,
  LineaMarbleShade2,
  LineaMarbleShade3,
  LineaMetallicImg1,
  LineaMetallicImg2,
  LineaMetallicImg3,
  LineaMetallicShade1,
  LineaMetallicShade2,
  LineaMetallicShade3,
  LineaNatureImg1,
  LineaNatureImg2,
  LineaNatureImg3,
  LineaNatureShade1,
  LineaNatureShade2,
  LineaNatureShade3,
  LineaNatureImg4,
  LineaNatureImg5,
  PyramidImg1,
  PyramidImg2,
  PyramidImg3,
  PyramidImg4,
  LineaNatureShade4,
  LineaNatureShade5,
  LineaNatureShade6,
  LineaNatureImg6,
  PyramidImg,
  ArchImg,
  LouverSideImg,
  SoffitSideImg,
} from '../../assets'

const metallicData = [
  { img: LineaMetallicImg1, shade: LineaMetallicShade1 },
  { img: LineaMetallicImg2, shade: LineaMetallicShade2 },
  { img: LineaMetallicImg3, shade: LineaMetallicShade3 },
  { img: LineaMetallicImg1, shade: LineaMetallicShade1 },
]

const marbleData = [
  { img: LineaMarbleImg1, shade: LineaMarbleShade1 },
  { img: LineaMarbleImg2, shade: LineaMarbleShade2 },
  { img: LineaMarbleImg3, shade: LineaMarbleShade3 },
  { img: LineaMarbleImg1, shade: LineaMarbleShade1 },
]

const natureData = [
  { img: LineaNatureImg1, shade: LineaNatureShade1 },
  { img: LineaNatureImg2, shade: LineaNatureShade2 },
  { img: LineaNatureImg3, shade: LineaNatureShade3 },
  { img: LineaNatureImg4, shade: LineaNatureShade4 },
  { img: LineaNatureImg5, shade: LineaNatureShade5 },
  { img: LineaNatureImg6, shade: LineaNatureShade6 },
]

const otherProducts = [
  {
    image: PyramidImg,
    smallImg: LouverSideImg,
    heading: 'EASY+ Linea',
    desc: "Revitalize your space effortlessly with Easy+, the ultimate easy-to-install system, for remarkable transformations. Say goodbye to complicated installations and hello to stunning results with Easy+'s simplicity and convenience.",
  },
  {
    image: ArchImg,
    smallImg: SoffitSideImg,
    heading: 'EASY+ Arch',
    desc: 'Experience the beauty of graceful curves and flowing lines with EASY+ Arch. Elevate your space with the timeless allure of arched designs that creates a sense of elegance and architectural intrigue.',
  },
]

const Pyramid = () => {
  return (
    <Suspense fallback={<Loader />}>
      <PyramidBanner />
      <ImgGallery img1={PyramidImg1} img2={PyramidImg2} img3={PyramidImg3} img4={PyramidImg4} />
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

export default Pyramid
