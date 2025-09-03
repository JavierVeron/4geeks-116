import productosJSON from "../../assets/productos.json";

export const CartReducer = (state, action) => {
    switch(action.type) {
        case "AGREGAR_PRODUCTO":
            let producto = state.carrito.find(item => item.id == action.payload);            
            console.log("Se agregó el Producto #" + action.payload);

            if (producto) {
                producto.cantidad++;
                
                return {...state, carrito:[...state.carrito]};
            } else {
                producto = productosJSON.find(item => item.id == action.payload);
                producto.cantidad = 1;

                return {...state, carrito:[...state.carrito, producto]};
            }
        case "ELIMINAR_PRODUCTO":
            const carritoActualizado = state.carrito.filter(item => item.id != action.payload);
            console.log("Se eliminó el Producto #" + action.payload);
            
            return {...state, carrito:[...carritoActualizado]};
        case "VACIAR_CARRITO":
            console.log("Se vació el Carrito!");
            return {carrito:[]};
        default:
            return state;
    }
}