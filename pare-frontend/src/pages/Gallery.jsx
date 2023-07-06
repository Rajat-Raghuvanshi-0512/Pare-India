import { Suspense } from 'react'
import { GalleryMain, GallerySection } from '../components/gallery'
import Loader from '../components/Loader'

const Gallery = () => {
  return (
    <Suspense fallback={<Loader />}>
      <GalleryMain />
      <GallerySection />
    </Suspense>
  )
}

export default Gallery
