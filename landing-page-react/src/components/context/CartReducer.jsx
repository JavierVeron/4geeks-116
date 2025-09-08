import productosJSON from "../../assets/productos.json";

export const CartReducer = (state, action) => {
    switch(action.type) {
        case "AGREGAR_PRODUCTO":
            let carrito = state.carrito;
            let producto = carrito.find(item => item.id == action.payload);            
            console.log("Se agregó el Producto #" + action.payload);

            if (producto) {
                producto.cantidad++;
            } else {
                producto = productosJSON.find(item => item.id == action.payload);
                producto.cantidad = 1;
                carrito.push(producto);
            }

            return {
                ...state,
                carrito:[...carrito],
                total:carrito.reduce((acum, item) => acum += item.cantidad, 0),
                suma:carrito.reduce((acum, item) => acum += item.precio * item.cantidad, 0)
            };
        case "ELIMINAR_PRODUCTO":
            const carritoActualizado = state.carrito.filter(item => item.id != action.payload);
            console.log("Se eliminó el Producto #" + action.payload);
            
            return {
                ...state,
                carrito:[...carritoActualizado],
                total:state.carrito.reduce((acum, item) => acum += item.cantidad, 0),
                suma:state.carrito.reduce((acum, item) => acum += item.precio * item.cantidad, 0)
            };
        case "VACIAR_CARRITO":
            console.log("Se vació el Carrito!");
            return {carrito:[], total:0, suma:0};
        default:
            return state;
    }
}