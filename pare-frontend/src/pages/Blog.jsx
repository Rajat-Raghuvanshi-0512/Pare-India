import { Suspense } from 'react'
import BlogSection from '../components/blog/BlogSection'
import Loader from '../components/Loader'
import { LastSection } from '../components'

const Blog = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BlogSection />
      <LastSection
        showOnMobile
        mainText={'SEE SOMETHING YOU LIKE? CONTACT OUR TEAM TO SEND A REQUEST.'}
        showonDesktop={false}
        dark={false}
      />
    </Suspense>
  )
}

export default Blog
