import { Suspense, useEffect } from 'react'
import { P1Section1, P1Section2, Product1Banner } from '../components/products'
import { Loader } from '../components'
import { productsData } from '../utils/constants'
import { useNavigate, useParams } from 'react-router-dom'

const Product1 = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(productsData[id])
    if (!productsData[id]) navigate('/products')
  }, [id, navigate])
  return (
    <Suspense fallback={<Loader />}>
      <Product1Banner data={productsData[id]?.bannerSection} />
      <P1Section1 data={productsData[id]?.section1data} />
      <P1Section2 data={productsData[id]?.section2data} />
    </Suspense>
  )
}

export default Product1
