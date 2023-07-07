import { Suspense } from 'react'
import { Loader } from '../components'
import { LastSection } from '../components'
import { BlogSection } from '../components/blog'

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
