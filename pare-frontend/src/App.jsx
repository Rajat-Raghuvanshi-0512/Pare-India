import { Route, Routes } from 'react-router-dom'
import { Home } from './pages'
import { ContactFloatBtn, Navbar } from './components'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ContactFloatBtn />
    </>
  )
}

export default App
