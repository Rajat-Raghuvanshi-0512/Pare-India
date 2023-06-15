import { Route, Routes, useLocation } from 'react-router-dom'
import { About, Contact, Home } from './pages'
import { ContactFloatBtn, Footer, Navbar } from './components'
import { useEffect } from 'react'

const App = () => {
  const { pathname } = useLocation()
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
