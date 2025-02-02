import { useNavigate } from "react-router-dom"  // Importa o hook 'useNavigate' do React Router para realizar navegação programática
import { useState } from "react"  // Importa o hook 'useState' para controlar o estado da busca no componente

const SearchForm = () => {  // Define o componente funcional 'SearchForm'
    const navigate = useNavigate()  // 'useNavigate' é usado para navegar para outra rota sem recarregar a página
    const [query, setQuery] = useState()  // Define o estado 'query' que armazena o valor digitado no campo de busca

    const handleSubmit = (e) => {  // Função que é chamada quando o formulário for submetido
        e.preventDefault()  // Impede o comportamento padrão de recarregar a página ao enviar o formulário

        navigate(`/search?q=${query}`)  // Utiliza o hook 'navigate' para redirecionar o usuário para a rota '/search' com a query inserida
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setQuery(e.target.value)} />
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}

export default SearchForm  // Exporta o componente 'SearchForm' para ser usado em outros lugares
