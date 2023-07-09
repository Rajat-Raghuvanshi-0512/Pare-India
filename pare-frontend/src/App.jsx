import { useEffect, useMemo } from 'react'
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
  FAQ,
  NotFound,
  Resources,
  Gallery,
  Blog,
  PrivacyPolicy,
} from './pages'
import { ContactFloatBtn, Footer, Navbar } from './components'
import useBlobity from 'blobity/lib/react/useBlobity'

const App = () => {
  const { pathname } = useLocation()
  const options = useMemo(
    () => ({
      color: 'rgb(255, 0, 0)',
      dotColor: 'rgb(255, 0, 0)',
      zIndex: 500,
      opacity: 0.1,
      licenseKey: 'jsmastery',
      focusableElements: 'none',
      size: 30,
      dotSize: 6,
    }),
    [],
  )
  useBlobity(options)

  useEffect(() => {
    scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const loaderElement = document.querySelector('.loader-container')
    if (loaderElement) {
      loaderElement.remove()
    }
  }, [])

  return (
    <>
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
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/application" element={<Resources />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ContactFloatBtn />
      <Footer />
    </>
  )
}

export default App
