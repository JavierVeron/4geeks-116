import { createContext, useReducer, useState } from "react";
import { CartReducer } from "./CartReducer";
import { cargarLS } from "./localStorage";

// Definir el nombre de nuestro Contexto
export const CartContextReducer = createContext();

const initialState = {
    carrito:[],
    total:0,
    suma:0
}

// Definir un Context Provider
const CartContextReducerProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, cargarLS(initialState))

    const agregarProducto = (id) => {
        dispatch({type:"AGREGAR_PRODUCTO", payload:id});
    }

    const eliminarProducto = (id) => {
        dispatch({type:"ELIMINAR_PRODUCTO", payload:id});
    }

    const vaciarCarrito = () => {
        dispatch({type:"VACIAR_CARRITO"});
    }

    return <CartContextReducer.Provider value={{state, agregarProducto, eliminarProducto, vaciarCarrito}}>
        {children}
    </CartContextReducer.Provider>
}

export default CartContextReducerProvider
