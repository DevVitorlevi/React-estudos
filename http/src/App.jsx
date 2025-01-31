import { useState } from 'react'
import { useFetch } from './hooks/useFetch';
import './App.css'
// Define a URL da API onde os dados dos produtos estão localizados
const url = 'http://localhost:3000/products';

// Define o componente funcional App
function App() {

  // Cria um estado chamado 'products' e uma função 'setProduct' para atualizá-lo
  // O estado inicial é um array vazio
  const [products, setProduct] = useState([]);
  const { data: items, httpConfig } = useFetch(url)// renomeadno data
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")




  // Define uma função assíncrona chamada `addProduct` que recebe um evento `e` como parâmetro.
  const addProduct = async (e) => {
    // Previne o comportamento padrão do evento, que no caso de um formulário seria o recarregamento da página.
    e.preventDefault();

    const product = {
      name,
      price
    };

    httpConfig(product, 'POST')

    setName("")//Reseta o Valor
    setPrice("")//Reseta o Valor
  }


  return (
    <>

      <ul>
        {items ? (items.map((product) => (
          <li key={product.id}>{product.name}-{product.price}</li>
        ))) : (undefined)}
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
