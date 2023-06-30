import { Suspense } from 'react'
import { P1Section1, P1Section2, Product1Banner } from '../components/products'
import Loader from '../components/Loader'

const Product1 = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Product1Banner />
      <P1Section1 />
      <P1Section2 />
    </Suspense>
  )
}

export default Product1
