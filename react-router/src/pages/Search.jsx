import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
const Search = () => {
    const [searchParams] = useSearchParams()
    const url = `http://localhost:3000/products?${searchParams}`
    const { data: items, loading, error } = useFetch(url)

    return (
        <div>
            <h1>Lista de Disponiveis</h1>
            {error && <p>Ocorreu um error: {error}</p>}
            {loading && <p>Carregando...</p>}
            {!loading && !error && items && (
                <ul>
                    {items.map((product) => (
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

export default Search