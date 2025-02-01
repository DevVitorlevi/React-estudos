import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
//pages
import Main from './pages/Main'
import About from './pages/About'
//componentes
import Header from './components/Header'
import Product from './pages/Product'
import Info from './pages/Info'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/products/:id/info' element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
