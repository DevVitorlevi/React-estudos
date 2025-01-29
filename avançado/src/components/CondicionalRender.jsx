import { useState } from "react"


const CondicionalRender = () => {
    const [name] = useState("Vitor")

    return (
        <div>If
            {name === 'Vitor' ? (
                <>
                    <p>Nome Encontrado:{name}</p>
                </>
            ) : (
                <>
                    <p>Nome Não Encontrado..</p>
                </>
            )}
        </div>
    )
}

export default CondicionalRender