import { useParams } from "react-router-dom"

const Info = () => {
    const { id } = useParams()
    return (
        <div>Mais Informções sobre: {id}</div>
    )
}

export default Info