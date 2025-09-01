import { useEffect, useState } from "react";
import productosJSON from "../assets/productos.json";
import { useParams } from "react-router-dom";

const Producto = () => {
    const [item, setItem] = useState({});
    const {productoId} = useParams();
    console.log(productoId);

    useEffect(() => {
        setItem(productosJSON.find(item => item.id == productoId))
    }, [productoId])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={item.imagen} alt={item.marca} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1>{item.marca}</h1>
                    <p>{item.descripcion}</p>
                    <p>${item.precio}</p>
                </div>
            </div>
        </div>
    )
}

export default Producto