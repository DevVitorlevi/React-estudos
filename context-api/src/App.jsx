import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import './styles/App.css'
//pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
//components
import Header from './components/Header'
function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
