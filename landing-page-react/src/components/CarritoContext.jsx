import { useContext } from "react"
//import { CartContext } from "./context/CartContext"
import { CartContextReducer } from "./context/CartContextReducer";

const CarritoContext = () => {
    const {state, eliminarProducto, vaciarCarrito} = useContext(CartContextReducer);
    
    if (state.total == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">No hay Productos en el Carrito!</h1>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="text-end" colSpan={7}>
                                    <button className="btn btn-dark" onClick={vaciarCarrito}>Vaciar Carrito</button>
                                </td>
                            </tr>
                            {
                                state.carrito.map(producto => (
                                    <tr key={producto.id}>
                                        <td><img src={producto.imagen} alt={producto.titulo} width={80} /></td>
                                        <td className="text-start">
                                            <p className="fw-light"><b>{producto.marca}</b><br />{producto.descripcion}</p>
                                        </td>
                                        <td className="text-center">${producto.precio}</td>
                                        <td className="text-center">x{producto.cantidad}</td>
                                        <td className="text-center">${(producto.precio * producto.cantidad).toFixed(2)}</td>
                                        <td className="text-end"><button className="btn btn-dark" onClick={() => {eliminarProducto(producto.id)}}>Eliminar</button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td className="text-center" colSpan={4}><b>Total a Pagar</b></td>
                                <td className="text-center"><b>${state.suma.toFixed(2)}</b></td>
                                <td className="text-end">&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default CarritoContext