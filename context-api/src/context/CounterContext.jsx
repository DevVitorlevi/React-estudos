// Importa os hooks `useState` e `createContext` do React
import { useState, createContext } from 'react';

// Cria um contexto chamado `CounterContext`
// Esse contexto permite compartilhar estados entre componentes sem precisar passar props manualmente
export const CounterContext = createContext();

// Cria um componente provedor do contexto
export const CounterContextProvider = ({ children }) => {
    // Define um estado chamado `counter` e uma função `setCounter` para atualizá-lo
    // O valor inicial do `counter` é 5
    const [counter, setCounter] = useState(5);

    return (
        // O `CounterContext.Provider` disponibiliza o estado `counter` e a função `setCounter`
        // para todos os componentes que estiverem dentro dele
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children} {/* Renderiza os componentes filhos que usarão o contexto */}
        </CounterContext.Provider>
    );
};
