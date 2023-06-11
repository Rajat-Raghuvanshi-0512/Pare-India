import { Route, Routes } from 'react-router-dom'
import { Home } from './pages'
import { ContactFloatBtn, Footer, Navbar } from './components'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ContactFloatBtn />
      <Footer />
    </>
  )
}

export default App
