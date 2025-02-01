import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
//pages
import Main from './components/Main'
import About from './components/About'
//componentes
import Header from './components/Header'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
