import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Levi", 'Kele', 'Jose', 'Maria'])
    const [users] = useState(
        { id: 12312, name: 'Vitor', age: 16 },
        { id: 32612, name: 'Maria', age: 48 },
        { id: 13, name: 'Simba', age: 1.7 }
    )

    return (
        <>

            <ul>
                {list.map((i) => (
                    <li>{i}</li>
                ))}
            </ul>

            <>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name} - {user.age}</li>
                    ))}
                </ul>
            </>
        </>
    )
}

export default ListRender