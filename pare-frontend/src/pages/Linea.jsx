import { Suspense } from 'react'
import Loader from '../Loader'
import { Brochure, ImgGallery, Info, LineaBanner, MoreProducts, Shades, Trims } from '../components/products'

const Linea = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LineaBanner />
      <ImgGallery />
      <Info />
      <Shades />
      <Trims />
      <Brochure />
      <MoreProducts />
    </Suspense>
  )
}

export default Linea
