import { useState } from "react"; // Importa a função `useState` do React

const State = () => { // Define um componente funcional chamado `State`
    // Aqui, `Number` é o valor atual do estado, e `setNumber` é a função que atualiza esse valor
    let [Number, setNumber] = useState(10);

    return (
        <>
            {/* Renderiza um botão que exibe o valor atual de `Number` */}
            {/* Quando o botão é clicado, a função `setNumber` é chamada para atualizar o estado para 25 */}
            <button onClick={() => setNumber(25)}>{Number}</button>
        </>
    );
};

export default State; // Exporta o componente `State` para ser usado em outros lugares