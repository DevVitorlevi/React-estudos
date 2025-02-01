import { useParams } from "react-router-dom"; // Hook para obter parâmetros da URL
import { useFetch } from "../hooks/useFetch"; // Hook personalizado para buscar dados da API
import { Link } from "react-router-dom";
const Product = () => {
    // Obtém o parâmetro 'id' da URL
    const { id } = useParams();

    // Define a URL da API com o ID do produto
    const url = `http://localhost:3000/products/${id}`;

    // Chama o hook personalizado para buscar os dados do produto
    const { data: product, loading, error } = useFetch(url);

    return (
        <div>
            <h1>Product</h1>
            <div>
                {/* Exibe mensagem de erro, se houver */}
                {error && <p>Ocorreu um erro</p>}

                {/* Exibe a mensagem de carregamento enquanto os dados estão sendo buscados */}
                {loading && <p>Carregando ...</p>}

                {/* Exibe os dados do produto apenas se não estiver carregando, sem erro e se os dados existirem */}
                {!loading && !error && product && (
                    <div>
                        <h1>{product.name}</h1>
                        <p>R$: {product.price}</p>
                        <Link to={`/products/${product.id}/info`}>More Info</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Product; // Exporta o componente para ser usado em outras partes da aplicação
