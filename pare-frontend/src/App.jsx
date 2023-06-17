import { Route, Routes, useLocation } from 'react-router-dom'
import { About, Contact, Home } from './pages'
import { ContactFloatBtn, Footer, Navbar } from './components'
import { useEffect, useMemo } from 'react'
import Blobity from 'blobity'

const App = () => {
  const { pathname } = useLocation()
  const options = useMemo(
    () => ({ color: 'rgb(255, 0, 0)', dotColor: 'rgb(255, 0, 0)', zIndex: 500, opacity: 0.1, licenseKey: 'jsmastery' }),
    [],
  )
  useEffect(() => {
    new Blobity(options)
  }, [options])
  useEffect(() => {
    scrollTo(0, 0)
  }, [pathname])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ContactFloatBtn />
      <Footer />
    </>
  )
}

export default App
