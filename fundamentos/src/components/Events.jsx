const Events = () => {
    const Event = () => {
        document.body.style.background = "purple"

    }

    const rendersomente = (x) => {
        if (x) {
            return <h1>True</h1>
        } else {
            return <h1>False</h1>
        }

    }


    return (
        <>
            <div>
                <button onClick={Event}>Clique</button>
            </div>
            {rendersomente(false)}
            {rendersomente(true)}
        </>
    )

}

export default Events