import { Suspense } from 'react'
import { Loader } from '../components'
import { Brochure, ImgGallery, Info, MoreProducts, PyramidBanner, Shades, Trims } from '../components/products'

const Pyramid = () => {
  return (
    <Suspense fallback={<Loader />}>
      <PyramidBanner />
      <ImgGallery />
      <Info />
      <Shades />
      <Trims />
      <Brochure />
      <MoreProducts />
    </Suspense>
  )
}

export default Pyramid
