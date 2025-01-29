import { useState } from 'react'
import './App.css'
import State from './components/State'
import ListRender from './components/ListRender'
import image from './assets/img1.jpg'
import CondicionalRender from './components/CondicionalRender'
import ShowUsername from './components/ShowUsername'
function App() {
  const name = 'Vitor'

  const [Username] = useState('Vitor')
  return (
    <>
      <img src={image} alt="" />

      <State />
      <ListRender />
      <CondicionalRender />
      <ShowUsername name="Vitor" />
      <ShowUsername name={name} />
      <ShowUsername name={Username} />
    </>
  )
}

export default App
