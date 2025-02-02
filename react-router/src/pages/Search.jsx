import { useSearchParams, Link } from "react-router-dom"  // Importa hooks do React Router: 'useSearchParams' para acessar os parâmetros de busca na URL e 'Link' para criar links para outras páginas
import { useFetch } from "../hooks/useFetch"  // Importa um hook personalizado 'useFetch' para fazer requisições de dados

const Search = () => {  // Define o componente funcional 'Search'
    const [searchParams] = useSearchParams()  // Usa o hook 'useSearchParams' para obter os parâmetros de busca na URL (exemplo: ?q=produto)
    const url = `http://localhost:3000/products?${searchParams}`  // Cria a URL para a API com os parâmetros de busca, fazendo uma requisição para a lista de produtos com base nos parâmetros

    // Chama o hook 'useFetch' para fazer a requisição de dados para a URL gerada, retornando os dados (items), status de carregamento (loading) e erro (error)
    const { data: items, loading, error } = useFetch(url)

    return (
        <div>
            <h1>Lista de Disponíveis</h1>
            {error && <p>Ocorreu um erro: {error}</p>}
            {loading && <p>Carregando...</p>}
            {!loading && !error && items && (  // Se não está carregando, não há erro e há dados, exibe a lista de produtos
                <ul>
                    {items.map((product) => (  // Para cada produto na lista de 'items', cria um item de lista
                        <li key={product.id}>
                            <h1>{product.name}</h1>
                            <p>{product.price}</p>
                            <Link to={`/products/${product.id}`}>Detalhes</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Search  // Exporta o componente 'Search' para ser utilizado em outras partes do aplicativo
