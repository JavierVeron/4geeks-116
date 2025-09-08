import { useEffect, useState } from "react";
import productosJSON from "../assets/productos.json";
import { Link, useParams } from "react-router-dom";

const Productos = () => {
    const [items, setItems] = useState(productosJSON);
    const {id} = useParams();
    //console.log(id);
    
    useEffect(() => {
        setItems(id ? productosJSON.filter(item => item.categoria == id) : productosJSON)
    }, [id])

    return (
        <div className="container">
            <div className="row">
                {
                    items.map(item => (
                        <div key={item.id} className="col-md-3">
                            <div className="card">
                                <Link to={"/producto/" + item.id}>
                                    <img src={item.imagen} className="card-img-top" alt={item.descripcion} />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{item.descripcion}</h5>
                                    <p className="card-text">${item.precio}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Productos