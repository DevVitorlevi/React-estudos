import React from 'react'


const AlterarMessage = ({ alterarMessage }) => {
    const messages = ['oi', 'Olá', 'Eae']
    return (
        <>
            <button onClick={() => alterarMessage(messages[0])}>1</button>
            <button onClick={() => alterarMessage(messages[1])}>2</button>
            <button onClick={() => alterarMessage(messages[2])}>3</button>
        </>
    )
}

export default AlterarMessage