import { useState } from 'react'
import './App.css'
import State from './components/State'
import ListRender from './components/ListRender'
import image from './assets/img1.jpg'
import CondicionalRender from './components/CondicionalRender'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={image} alt="" />

      <State />
      <ListRender />
      <CondicionalRender />
    </>
  )
}

export default App
