import { useState, useEffect } from 'react'
import './App.css'
// Define a URL da API onde os dados dos produtos estão localizados
const url = 'http://localhost:3000/products';

// Define o componente funcional App
function App() {

  // Cria um estado chamado 'products' e uma função 'setProduct' para atualizá-lo
  // O estado inicial é um array vazio
  const [products, setProduct] = useState([]);
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

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

  // Define uma função assíncrona chamada `addProduct` que recebe um evento `e` como parâmetro.
  const addProduct = async (e) => {
    // Previne o comportamento padrão do evento, que no caso de um formulário seria o recarregamento da página.
    e.preventDefault();

    const product = {
      name,
      price
    };

    const res = await fetch(url, {
      method: "POST", // Define o método da requisição como POST.
      headers: {
        "Content-Type": "application/json" // Define o cabeçalho para indicar que o corpo da requisição é JSON.
      },
      body: JSON.stringify(product) // Converte o objeto `product` para uma string JSON e envia no corpo da requisição.
    });
    const addedProduct = await res.json()// trasnformando em object json

    setProduct((prevProducts) => [...prevProducts, addedProduct])
    //
    setName("")//Reseta o Valor
    setPrice("")//Reseta o Valor


  }


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
      <div>
        <form onSubmit={addProduct}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Atualiza o estado `name` quando o valor do input muda
            />
          </label>

          <label>
            Preço:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)} // Atualiza o estado `price` quando o valor do input muda
            />
          </label>
          <input
            type="submit"
            value="Enviar"
          />
        </form>
      </div>
    </>
  );
}

export default App
