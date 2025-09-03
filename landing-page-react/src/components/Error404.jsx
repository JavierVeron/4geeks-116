const Error404 = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-end">
                    <h1 className="fw-bold text-success" style={{fontSize:"100px"}}>404</h1>
                </div>
                <div className="col">
                    <h2 className="fw-bold">Oopss!!</h2>
                    <p>No encontramos la página que buscas.</p>
                    <p>Puedes visitar nuestra página de inicio y navegar por nuestra web.</p>
                </div>
            </div>
        </div>
    )
}

export default Error404