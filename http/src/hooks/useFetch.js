
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    // Cria um estado chamado `data` e uma função `setData` para atualizá-lo.
    // O valor inicial de `data` é `null`.
    const [data, setData] = useState(null);
    const [config,setConfig] = useState(null)
    const [method,setMethod] = useState(null)
    const [callFetch,setCallFetch] = useState(null)

    const httpConfig = (data,method) =>{
        if(method === 'POST'){
            setConfig({
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            })
            setMethod(method)   
        }
    }
    useEffect(() => {   
        async function fetchData() {
            const res = await fetch(url);
            const json = await res.json();

            // Atualiza o estado `data` com os dados obtidos da API.
            setData(json);
        }

        // Chama a função `fetchData` para iniciar o processo de busca de dados.
        fetchData();

    }, [url,callFetch]); // A lista de dependências do `useEffect` contém a URL.
    // Isso significa que o efeito será reexecutado sempre que a URL mudar.


    useEffect(()=>{
        const httpRequest = async () =>{
            if(method === 'POST'){
                let fetchOptions  = [url,config]

                const res = await fetch(...fetchOptions)
                const json = await res.json()

            setCallFetch(json)

            }

        }

        httpRequest()
    },[config,method,url])
    // Retorna um objeto contendo o estado `data`.
    // Isso permite que o componente que utiliza esse hook acesse os dados obtidos.
    return { data, httpConfig };
};