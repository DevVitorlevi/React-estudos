import React from 'react'

const CarDetails = ({ model, km, color }) => {
    return (
        <>
            <ul>
                <li>{model} - {km} - {color}</li>
            </ul>
        </>
    )
}

export default CarDetails