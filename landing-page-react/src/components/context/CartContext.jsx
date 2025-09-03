import { createContext, useState } from "react";
import productosJSON from "../../assets/productos.json";

// Definir el nombre de nuestro Contexto
export const CartContext = createContext();

// Definir un Context Provider
const CartContextProvider = ({children}) => {
    // Opción #1 (defino estados y funciones)
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (id) => { //2
        let producto = carrito.find(item => item.id == id);

        if (producto) {
            producto.cantidad++;
            setCarrito([...carrito]);
        } else {
            producto = productosJSON.find(item => item.id == id);
            producto.cantidad = 1;
            setCarrito([...carrito, producto]);
        }

        console.log("Se agregó el Producto #" + id);
    }

    const eliminarProducto = (id) => { //[1, 2, 3] => 2 => [1, 3]
        const carritoActualizado = carrito.filter(item => item.id != id);
        setCarrito([...carritoActualizado]);
        console.log("Se eliminó el Producto #" + id);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        console.log("Se vació el Carrito!");
    }

    return <CartContext.Provider value={{carrito, agregarProducto, eliminarProducto, vaciarCarrito}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider
