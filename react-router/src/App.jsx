import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './styles/App.css'
//pages
import Main from './pages/Main'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'
//componentes
import Header from './components/Header'
import SearchForm from './components/SearchForm'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <SearchForm />
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/products/:id/info' element={<Info />} />
          <Route path='/search' element={<Search />} />
          <Route path='/company' element={<Navigate to='/about' />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
