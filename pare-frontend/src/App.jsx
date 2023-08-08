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
  BlogInfo,
  Arch,
  Pyramid,
  Norma,
  Stretta,
  Wave,
  Duo,
  Louvers,
  Soffit,
  Vertica,
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
    }, 10)
    return () => clearInterval(interval)
  }, [percent])

  if (percent <= 100) {
    return (
      <>
        <Loader percent={percent} />
        <Home />
      </>
    )
  }

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
        <Route path="/product/:id" element={<Product1 />} />
        <Route path="/product/linea" element={<Linea />} />
        <Route path="/product/arch" element={<Arch />} />
        <Route path="/product/pyramid" element={<Pyramid />} />
        <Route path="/product/norma" element={<Norma />} />
        <Route path="/product/stretta" element={<Stretta />} />
        <Route path="/product/wave" element={<Wave />} />
        <Route path="/product/duo" element={<Duo />} />
        <Route path="/product/louvers" element={<Louvers />} />
        <Route path="/product/soffit" element={<Soffit />} />
        <Route path="/product/vertica" element={<Vertica />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogInfo />} />
        <Route path="/downloads" element={<Resources />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ContactFloatBtn />
      <Footer />
    </>
  )
}

export default App
