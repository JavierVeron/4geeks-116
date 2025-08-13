const Card = ({imagen, titulo, descripcion}) => {
    return (
        <div className="col">
            <div class="card">
                <img src={imagen} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{titulo}</h5>
                    <p class="card-text">{descripcion}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Card