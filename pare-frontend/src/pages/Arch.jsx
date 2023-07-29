import { Suspense } from 'react'
import { Loader } from '../components'
import { ArchBanner, Brochure, ImgGallery, Info, MoreProducts, Shades, Trims } from '../components/products'

const Arch = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ArchBanner />
      <ImgGallery />
      <Info />
      <Shades />
      <Trims />
      <Brochure />
      <MoreProducts />
    </Suspense>
  )
}

export default Arch
