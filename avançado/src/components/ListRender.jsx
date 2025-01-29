import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Levi", 'Kele', 'Jose', 'Maria'])


    return (
        <>

            <ul>
                {list.map((i) => (
                    <li>{i}</li>
                ))}
            </ul>
        </>
    )
}

export default ListRender