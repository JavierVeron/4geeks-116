// localStorage
// Guardar datos
/* localStorage.setItem("nombre", "Roberto");
localStorage.setItem("apellido", "Torres");
localStorage.setItem("edad", 35); */

// Recuperar datos
/* let nombre = localStorage.getItem("nombre");
let apellido = localStorage.getItem("apellido");
let edad = localStorage.getItem("edad");
alert(nombre + " " + apellido + " " + edad); */

// Eliminar datos
//localStorage.removeItem("nombre");

// Eliminar todas las localStorage
//localStorage.clear();


// Guardar un objeto en una localStorage
const producto = {id:1, nombre:"Camiseta con estampado Verde", precio:5.95};
localStorage.setItem("producto", JSON.stringify(producto));

// Guardar un array en una localStorage
const productos = [
    {id:1, nombre:"Camiseta con estampado Verde", precio:5.95},
    {id:2, nombre:"Camiseta con estampado Gris", precio:5.95},
    {id:3, nombre:"Camiseta con estampado Melocotón", precio:5.95}
]
localStorage.setItem("productos", JSON.stringify(productos));


// Recupero los datos de un objeto/array en una localStorage
const productoLS = JSON.parse(localStorage.getItem("producto"));
console.log(productoLS);
const productosLS = JSON.parse(localStorage.getItem("productos"));
console.log(productosLS);