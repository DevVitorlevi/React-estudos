import { useState } from 'react'
import './App.css'
import State from './components/State'
import ListRender from './components/ListRender'
import image from './assets/img1.jpg'
import CondicionalRender from './components/CondicionalRender'
import ShowUsername from './components/ShowUsername'
import CarDetails from './components/CarDetails'
import Container from './components/Container'
function App() {
  const name = 'Vitor'

  const [Username] = useState('Vitor')

  const Car = {
    model: 'Vw',
    km: 100,
    color: 'Azul'
  }

  const CarData = [
    { id: 1, model: 'Fiat', km: 0, color: 'white', newCar: true },
    { id: 2, model: 'BMW', km: 0, color: 'yllow', newCar: true },
    { id: 3, model: 'VW', km: 110, color: 'Red', newCar: false },
  ]
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

      {CarData.map((car) => (
        <CarDetails
          model={car.model}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}

      <Container>
        <form action="">
          <label htmlFor="">Nome:</label>
          <input type="text" />
        </form>
      </Container>
    </>
  )
}

export default App
