import { Route, Routes, useLocation } from 'react-router-dom'
import { About, Contact, Home, Products } from './pages'
import { ContactFloatBtn, Footer, Navbar } from './components'
import { useEffect, useMemo, useState } from 'react'
import Blobity from 'blobity'
import Loader from './Loader'

const App = () => {
  const { pathname } = useLocation()
  const [percent, setPercent] = useState(0)
  const [loading, setLoading] = useState(true)
  const options = useMemo(
    () => ({
      color: 'rgb(255, 0, 0)',
      dotColor: 'rgb(255, 0, 0)',
      zIndex: 500,
      opacity: 0.1,
      licenseKey: 'jsmastery',
      magnetic: false,
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
    const percentInterval = setInterval(() => {
      if (percent >= 100) {
        clearInterval(percentInterval)
      }
      if (percent < 100) {
        setPercent(percent + 1)
      } else {
        setLoading(false)
      }
    }, 10)
    return () => clearInterval(percentInterval)
  }, [percent])

  if (loading) return <Loader percent={percent} />

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <ContactFloatBtn />
      <Footer />
    </>
  )
}

export default App
