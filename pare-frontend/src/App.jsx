import { Route, Routes, useLocation } from 'react-router-dom'
import { About, Contact, Home, Products, Careers, CareerForm, Product1, Linea, Gallery } from './pages'
import { ContactFloatBtn, Footer, Navbar } from './components'
import { useEffect, useMemo, useState } from 'react'
import Blobity from 'blobity'
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
      focusableElements: '',
      size: 30,
      dotSize: 6,
    }),
    [],
  )
  useEffect(() => {
    new Blobity(options)
  }, [options])

  useEffect(() => {
    scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (percent <= 100) {
      setTimeout(() => setPercent((prev) => prev + 1), 5)
    }
  }, [percent])

  return (
    <>
      {percent <= 100 && <Loader percent={percent} />}
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
      </Routes>
      <ContactFloatBtn />
      <Footer />
    </>
  )
}

export default App
