import { useState, useEffect } from 'react'
import './App.css'
// Define a URL da API onde os dados dos produtos estão localizados
const url = 'http://localhost:3000/products';

// Define o componente funcional App
function App() {

  // Cria um estado chamado 'products' e uma função 'setProduct' para atualizá-lo
  // O estado inicial é um array vazio
  const [products, setProduct] = useState([]);

  // Usa o hook useEffect para executar um efeito colateral (buscar dados da API)
  // O efeito será executado apenas uma vez, quando o componente for montado
  useEffect(() => {
    // Define uma função assíncrona chamada fetchData para buscar os dados da API
    async function fetchData() {
      // Faz uma requisição GET para a URL da API e espera a resposta
      const res = await fetch(url);

      // Converte a resposta em formato JSON e espera o resultado
      const data = await res.json();

      // Atualiza o estado 'products' com os dados recebidos da API
      setProduct(data);
    }

    // Chama a função fetchData para executar a busca dos dados
    fetchData();
  }, []); // O array vazio [] garante que o useEffect só será executado uma vez

  // Retorna o JSX que será renderizado na tela
  return (

    <>

      <ul>
        {products.map((product) => (
          // Cada item da lista tem uma chave única (key) para ajudar o React na renderização
          <li key={product.id}>
            {/* Exibe o nome e o preço do produto */}
            {product.name} - R$:{product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
