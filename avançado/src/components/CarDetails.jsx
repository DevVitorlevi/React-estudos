import React from 'react'

const CarDetails = ({ model, km, color, newCar }) => {
    return (
        <>
            <ul>
                <li>{model} - {km} - {color}</li>

            </ul>
            {newCar ? (
                <p>This Car is New</p>
            ) : (
                <p>This car Is Not New</p>
            )}
        </>
    )
}

export default CarDetails