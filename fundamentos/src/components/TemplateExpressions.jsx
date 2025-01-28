const TemplateExpression = () => {
    const name = 'Vitor'

    const Data = {
        age: 16,
        job: 'Developer Web'
    }

    return (

        <>
            <p>
                Olá {name}, tudo Bem? Sua idade é {Data.age} e seu Job é : {Data.job}
            </p>

        </>
    )
}

export default TemplateExpression