import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
const Home = () => {
    const { counter } = useContext(CounterContext)
    return (
        <div>Home
            <p>Valor:{counter}</p>
        </div>
    )
}

export default Home