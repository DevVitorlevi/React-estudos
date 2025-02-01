import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
//pages
import Main from './components/Main'
import About from './components/About'
function App() {

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
