import { useState, useEffect } from 'react';

// Hook personalizado para fazer requisições HTTP
export const useFetch = (url) => {
    // Estado que armazena os dados da requisição
    const [data, setData] = useState(null);
    // Estado que armazena a configuração da requisição HTTP
    const [config, setConfig] = useState(null);
    // Estado que armazena o método da requisição (ex: GET, POST)
    const [method, setMethod] = useState(null);
    // Estado que controla a reexecução da busca após uma requisição POST
    const [callFetch, setCallFetch] = useState(false);
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState(null)
    // Função para configurar a requisição HTTP
    const httpConfig = (data, method) => {
        if (method === 'POST') {
            setConfig({
                method: 'POST',
                headers: {
                    "Content-Type": "application/json" // Define o formato dos dados como JSON
                },
                body: JSON.stringify(data) // Converte os dados para JSON antes de enviar
            });
            setMethod(method); // Define o método da requisição como POST
        }
    };

    // useEffect para buscar os dados da API (método GET)
    useEffect(() => {   
        async function fetchData() {
            setLoading(true)
            try {
                const res = await fetch(url); // Faz a requisição para a URL
                const json = await res.json(); // Converte a resposta para JSON
    
                setData(json); // Atualiza o estado `data` com os dados obtidos
                setLoading(false)
            } catch (error) {
                setError("Houve Um Erro")
            }
        }

        fetchData(); // Chama a função para buscar os dados

    }, [url, callFetch]); // Reexecuta a busca sempre que a URL ou callFetch mudar

    // useEffect para lidar com requisições POST
    useEffect(() => {
        const httpRequest = async () => {
            if (method === 'POST') {
                let fetchOptions = [url, config]; // Configuração da requisição

                const res = await fetch(...fetchOptions); // Faz a requisição POST
                const json = await res.json(); // Converte a resposta para JSON

                setCallFetch(json); // Atualiza o estado para reexecutar o primeiro useEffect
            }
        };

        httpRequest(); // Chama a função para executar a requisição POST

    }, [config, method, url]); // Executa sempre que `config` ou `method` mudar

    // Retorna os dados e a função para configurar requisições HTTP
    return { data, httpConfig, loading,error };
};
