import { Suspense } from 'react'
import { IntroSection, ProductInfo } from '../components/products'
import { Loader } from '../components'

const Products = () => {
  return (
    <Suspense fallback={<Loader />}>
      <IntroSection />
      <ProductInfo />
    </Suspense>
  )
}

export default Products
