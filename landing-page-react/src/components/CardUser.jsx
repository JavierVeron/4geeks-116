const CardUser = ({user}) => {
    return (
        <div className="card" style={{width:"18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{user.company.name}</h6>
                <p className="card-text">{user.email}</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    )
}

export default CardUser