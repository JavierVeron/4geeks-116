import { useState } from "react";

const Carrito = () => {
    const [cantidad, setCantidad] = useState(1);
    const [nombre, setNombre] = useState("");
    const producto = {id:1, titulo:"KIDS EL CORTE INGLES", descripcion:"Zapatillas colegial en color liso de niño", color:"Azul Marino", imagen:"https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202503/04/00131287700418____2__210x260.jpg", precio:25.99, stock:9};
    //console.log(producto);

    const incrementarItem = () => {
        if (cantidad < producto.stock) {
            setCantidad(cantidad + 1);
        }
    }

    const decrementarItem = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    <p>Nombre</p>
                                </td>
                                <td colSpan={2}>
                                    <input type="text" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}} />
                                </td>
                            </tr>
                            <tr>
                                <td><img src={producto.imagen} alt={producto.titulo} width={80} /></td>
                                <td className="text-start">
                                    <p className="fw-light"><b>{producto.titulo}</b><br />{producto.descripcion}<br />Color: <b>{producto.color}</b></p>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-outline-dark" onClick={decrementarItem}>-</button>
                                        <button type="button" className="btn btn-outline-dark">{cantidad}</button>
                                        <button type="button" className="btn btn-outline-dark" onClick={incrementarItem}>+</button>
                                    </div>
                                </td>
                                <td>${(producto.precio * cantidad).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td colSpan={3} className="fw-light">{nombre}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Carrito