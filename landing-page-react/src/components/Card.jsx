const Card = ({imagen, titulo, descripcion}) => {
    return (
        <div className="col">
            <div className="card">
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{descripcion}</p>
                    <a href="#" className="btn btn-primary">Ver Más</a>
                </div>
            </div>
        </div>
    )
}

export default Card