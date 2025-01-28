import { useState } from 'react'
import './App.css'
import State from './components/State'

import image from './assets/img1.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={image} alt="" />

      <State />
    </>
  )
}

export default App
