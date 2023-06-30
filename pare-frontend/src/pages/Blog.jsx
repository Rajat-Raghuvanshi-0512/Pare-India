import { Suspense } from 'react'
import BlogSection from '../components/blog/BlogSection'
import Loader from '../components/Loader'

const Blog = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BlogSection />
    </Suspense>
  )
}

export default Blog
