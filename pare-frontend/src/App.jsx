import { Route, Routes, useLocation } from 'react-router-dom'
import {
  About,
  Contact,
  Home,
  Products,
  Careers,
  CareerForm,
  Product1,
  Linea,
  Gallery,
  NotFound,
  Resources,
} from './pages'
import { ContactFloatBtn, Footer, Navbar } from './components'
import { useEffect, useMemo, useState } from 'react'
import Blobity from 'blobity'
import Loader from './Loader'
import Blog from './pages/Blog'
import { HeroBg, HeroBg1, HeroBg2, HeroBgMobile, HeroBgMobile1, HeroBgMobile2 } from './assets'
import { useImagePreloader, useMediaQuery } from './utils/custom-hooks'

const App = () => {
  const { pathname } = useLocation()
  const [percent, setPercent] = useState(0)
  const options = useMemo(
    () => ({
      color: 'rgb(255, 0, 0)',
      dotColor: 'rgb(255, 0, 0)',
      zIndex: 500,
      opacity: 0.1,
      licenseKey: 'jsmastery',
      focusableElements: '',
      size: 30,
      dotSize: 6,
    }),
    [],
  )
  const imagesWeb = [HeroBg, HeroBg1, HeroBg2]
  const imagesMobile = [HeroBgMobile, HeroBgMobile1, HeroBgMobile2]
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { loading } = useImagePreloader(isMobile ? imagesMobile : imagesWeb)
  useEffect(() => {
    new Blobity(options)
  }, [options])

  useEffect(() => {
    scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (percent < 100) {
      setTimeout(() => setPercent((prev) => prev + 1), 10)
    }
  }, [percent])

  return (
    <>
      {(percent < 100 || loading) && <Loader percent={percent} />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/career-form" element={<CareerForm />} />
        <Route path="/product/1" element={<Product1 />} />
        <Route path="/product/linea" element={<Linea />} />
        <Route path="/faq" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/application" element={<Resources />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ContactFloatBtn />
      <Footer />
    </>
  )
}

export default App
