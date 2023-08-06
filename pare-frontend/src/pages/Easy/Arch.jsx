import { Suspense } from 'react'
import { Loader } from '../../components'
import { ArchBanner, Brochure, ImgGallery, Info, MoreProducts, Shades, Trims } from '../../components/products'
import {
  EasyImg1,
  EasyImg2,
  EasyImg3,
  EasyImg4,
  LineaNatureImg4,
  LineaNatureImg5,
  LineaNatureImg6,
  LineaNatureShade4,
  LineaNatureShade5,
  LineaNatureShade6,
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
    heading: 'EASY+ Pyramid',
    desc: 'Unleash the power of sharp angles and captivating lines with EASY+ Pyramid. Elevate your space with architectural depth and a visually stunning design that adds a touch of modern sophistication.',
    redirect: '/pyramid',
  },
  {
    image: ArchImg,
    smallImg: SoffitSideImg,
    heading: 'EASY+ Linea',
    desc: "Revitalize your space effortlessly with Easy+, the ultimate easy-to-install system, for remarkable transformations. Say goodbye to complicated installations and hello to stunning results with Easy+'s simplicity and convenience.",
    redirect: '/linea',
  },
]

const Arch = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ArchBanner />
      <ImgGallery img1={EasyImg1} img2={EasyImg2} img3={EasyImg3} img4={EasyImg4} />
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

export default Arch
