import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Levi", 'Kele', 'Jose', 'Maria']);

    const [users, setUsers] = useState([
        { id: 12312, name: 'Vitor', age: 16 },
        { id: 32612, name: 'Maria', age: 48 },
        { id: 13, name: 'Simba', age: 1.7 }
    ]);

    const deleteUser = () => {
        // Gera um índice aleatório com base no tamanho da lista de usuários
        const randomIndex = Math.floor(Math.random() * users.length);

        // Obtém o ID do usuário a ser removido
        const userIdToRemove = users[randomIndex].id;

        // Filtra a lista de usuários, removendo o usuário com o ID selecionado
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => user.id !== userIdToRemove);
        });
    };

    return (
        <>
            {/* Lista de nomes */}
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {/* Lista de usuários */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>

            {/* Botão para deletar um usuário aleatório */}
            <button onClick={deleteUser}>Delete</button>
        </>
    );
};

export default ListRender;