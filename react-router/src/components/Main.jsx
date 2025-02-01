import React from 'react'
import { useFetch } from '../hooks/useFetch'
import style from '../styles/Main.module.css'
import { Link } from 'react-router-dom'

const Main = () => {
    const url = 'http://localhost:3000/products'
    const { data: items, loading, error } = useFetch(url)
    return (
        <div>
            <h1 id={style.h1}> Produtos</h1>
            {error ? (
                <p>Ocorreu um error:{error}</p>
            ) : null}
            {
                loading ? (<p>Carregando...</p>) : (
                    <ul id={style.ul}>
                        {items ? (
                            items.map((product) => (
                                <li key={product.id} id={style.li}>
                                    <h2>{product.name}</h2>
                                    <p>R$:{product.price}</p>
                                    <Link to={`/products/${product.id}`}>Detalhes</Link>
                                </li>
                            ))
                        ) : (null)}
                    </ul>
                )
            }
        </div>
    )
}

export default Main