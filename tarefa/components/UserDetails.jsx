import React from 'react'

const UserDetails = ({ name, age, job }) => {

    return (
        <>
            <ul>
                <li>{name} - {age} - {job}</li>

            </ul>
            {age >= 18 ? (
                <p>Já Pode Ser Habilitado</p>
            ) : (
                <p>Não Pode Ser Habilitado</p>
            )}
        </>
    )
}

export default UserDetails