// Ejercicio integrador
/* Carrito de Compras rústica (alert, console, prompt y confirm)
1- Carga de Productos
2- Visualización de Productos
3- Eliminación de Productos
4- Checkout (Total a Pagar)
*/

// 1- Carga de Productos
let catalogoProductos = [];
const carritoProductos = [];
let cancelar = false;

/* for (let i=0; i<5; i++) {
    let id = catalogoProductos.length + 1;
    let nombreProducto = prompt("Ingrese el Nombre del Producto:");

    while (nombreProducto == null) {
        nombreProducto = prompt("Ingrese el Nombre del Producto:");
    }

    let precioProducto = parseFloat(prompt("Ingrese el Precio del Producto:"));

    while (precioProducto == null) {
        precioProducto = parseFloat(prompt("Ingrese el Precio del Producto:"));
    }

    const producto = {id:id, nombre:nombreProducto, precio:precioProducto};
    catalogoProductos.push(producto);
    console.log("Se agregó un nuevo Producto!");
}

// Guardar los Productos cargados en mi localStorage
localStorage.setItem("catalogoProductos", JSON.stringify(catalogoProductos)); */
// Recuperar los Productos de mi localStorage
catalogoProductos = JSON.parse(localStorage.getItem("catalogoProductos"));

while (!cancelar) {
    let contenido = "";

    catalogoProductos.forEach(item => {
        contenido += item.id + "- " + item.nombre + " $" + item.precio + "\n";
    })

    //const productoSeleccionado = prompt("Ingrese el ID del Producto para agregar en el Carrito:\n\n"+contenido);
    const productoSeleccionado = prompt(`Ingrese el ID del Producto para agregar en el Carrito:
        
    ${contenido}`);

    if (!productoSeleccionado) {
        break;
    }

    const producto = catalogoProductos.find(item => item.id == parseInt(productoSeleccionado));
    carritoProductos.push(producto); // Agregar el Producto en el seleccionado en el Carrito de Compras
}

// Mostramos el Total a Pagar
const total = carritoProductos.reduce((acumulador, item) => acumulador += item.precio, 0)
let contenido = "Productos Seleccionados:\n\n";

carritoProductos.forEach(item => {
    contenido += item.id + "- " + item.nombre + " $" + item.precio + "\n";
})

contenido += "\nTotal a Pagar: $" + total;
alert(contenido);