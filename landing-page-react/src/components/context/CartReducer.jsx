import productosJSON from "../../assets/productos.json";
import { guardarLS } from "./localStorage";

export const CartReducer = (state, action) => {
    const carrito = state.carrito;
    let contexto = {};

    switch(action.type) {
        case "AGREGAR_PRODUCTO":
            let producto = carrito.find(item => item.id == action.payload);            
            
            if (producto) {
                producto.cantidad++;
            } else {
                producto = productosJSON.find(item => item.id == action.payload);
                producto.cantidad = 1;
                carrito.push(producto);
            }
            
            contexto = {
                ...state,
                carrito:[...carrito],
                total:carrito.reduce((acum, item) => acum += item.cantidad, 0),
                suma:carrito.reduce((acum, item) => acum += item.precio * item.cantidad, 0)
            };
            guardarLS(contexto);
            console.log("Se agregó el Producto #" + action.payload);

            return contexto;
        case "ELIMINAR_PRODUCTO":
            const carritoActualizado = carrito.filter(item => item.id != action.payload);
            contexto = {
                ...state,
                carrito:[...carritoActualizado],
                total:carritoActualizado.reduce((acum, item) => acum += item.cantidad, 0),
                suma:carritoActualizado.reduce((acum, item) => acum += item.precio * item.cantidad, 0)
            };
            guardarLS(contexto);
            console.log("Se eliminó el Producto #" + action.payload);

            return contexto;
        case "VACIAR_CARRITO":
            contexto = {carrito:[], total:0, suma:0};
            guardarLS(contexto);
            console.log("Se vació el Carrito!");

            return contexto;
        default:
            return state;
    }
}