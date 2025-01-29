import { useState } from 'react'
import './App.css'
import State from './components/State'
import ListRender from './components/ListRender'
import image from './assets/img1.jpg'
import CondicionalRender from './components/CondicionalRender'
import ShowUsername from './components/ShowUsername'
import CarDetails from './components/CarDetails'
function App() {
  const name = 'Vitor'

  const [Username] = useState('Vitor')

  const Car = {
    model: 'Vw',
    km: 100,
    color: 'Azul'
  }
  return (
    <>
      <img src={image} alt="" />

      <State />
      <ListRender />
      <CondicionalRender />
      <ShowUsername name="Vitor" />
      <ShowUsername name={name} />
      <ShowUsername name={Username} />

      <CarDetails model={Car.model} km={Car.km} color={Car.color} />
    </>
  )
}

export default App
