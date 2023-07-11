import { useEffect, useMemo, useState } from 'react'
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
import Loader from './Loader'

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
    const interval = setInterval(() => {
      setPercent((prev) => prev + 1)
    }, 5)
    return () => clearInterval(interval)
  }, [percent])

  return (
    <>
      {percent < 100 && <Loader percent={percent} />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/career-form" element={<CareerForm />} />
        <Route path="/product/:id" element={<Product1 />} />
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
