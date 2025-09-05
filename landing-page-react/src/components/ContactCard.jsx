const ContactCard = ({item}) => {
    return (
        <div className="card mb-2" style={{width:"18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{item.address}</h6>
                <a href="#" className="card-link">{item.email}</a>
                <a href="#" className="card-link">{item.phone}</a>
            </div>
        </div>
    )
}

export default ContactCard