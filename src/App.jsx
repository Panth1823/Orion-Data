import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import AI from './components/AI'
import Platform from './components/Platform'
import Industries from './components/Industries'
import Contact from './components/Contact'

const AppShell = () => {
  const { pathname } = useLocation()
  const usesContactFooter = pathname === '/contact'

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!usesContactFooter && <Footer />}
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
