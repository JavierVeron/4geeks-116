const nombres1 = ["Ruben", "Roberto", "Marta", "Joaquín", "Nadia"]
const nombres2 = ["Gines", "Raúl", "Marina", "Diego", "Jazmín"]
const nombres3 = ["Juan", "Pedro"]

// Método Concat => Concatena 2 o más Arrays y devuelve un nuevo Array
//const nuevosNombres = nombres1.concat(nombres2).concat(nombres3);
/* const nuevosNombres = nombres3.concat(nombres1).concat(nombres2);
console.log(nuevosNombres); */


// Método Find => Devuelve el primer elemento encontrado (devuelve un solo elemento)
let nombreBuscado = "Diego"
const autos = [
    {id:1, marca:"Audi", modelo:"A1", puertas:3, precio:30000},
    {id:2, marca:"Audi", modelo:"A3", puertas:3, precio:35000},
    {id:3, marca:"Audi", modelo:"A4", puertas:5, precio:40000},
    {id:4, marca:"Audi", modelo:"A6", puertas:5, precio:50000}
]

/* let nombre = nombres2.find(item => item == nombreBuscado);
console.log(nombre); */

/* let buscar = "audi"
let presupuesto = 42000
let autoBuscado = autos.find(item => (item.marca.toUpperCase() == buscar.toUpperCase()) && (item.precio >= presupuesto)); 

if (autoBuscado) {
    console.log("El auto buscado es: " + autoBuscado.marca + " " + autoBuscado.modelo);
} else {
    console.log("Error! No se encuentra el auto buscado!");   
} */


// Método Filter => Devuelve un nuevo Array con todos los elementos resultantes
let buscar = "audi"
let presupuesto = 42000
//const autosBuscados = autos.filter(item => item.precio <= presupuesto && item.puertas == 5); 
//console.log(autosBuscados);
//autosBuscados.push({id:5, marca:"Audi", modelo:"Q3", puertas:5, precio:650000})
//console.log(autosBuscados);

// Cómo podemos eliminar un elemento
// Método Splice => Modifica el array original
/* autos.splice(2, 1);
console.log(autos); */
// Método Filter => Filtra y devuelve un nuevo Array 
//const autosFiltrados = autos.filter(item => item.modelo != "A3");
/* const autosFiltrados = autos.filter(item => item.precio >= 40000);
console.log(autosFiltrados); */


// Método Some => Devuelve un valor booleando (true/false) cuando encuentra un elemento que coincida con la condición
/* const autosBuscados = autos.some(item => item.precio >= 40000);
console.log(autosBuscados);
 
if (!autosBuscados) {
    console.log("No Existe el auto que buscas!");
} */


// Método Map => Devuelve un nuevo array con todos los elementos originales o modificados
/* const autosModificados = autos.map(item => {
    return {id:item.id, name:item.marca + " " + item.modelo, price:item.precio * 1.1}
})
const autosModificados2 = autos.map(item => ({id:item.id, name:item.marca + " " + item.modelo, price:item.precio * 1.1}));
const autosModificados3 = autos.map(item => ((item.marca + " " + item.modelo).toUpperCase() + " (Europe)"));
console.log(autosModificados);
console.log(autosModificados2);
console.log(autosModificados3); */


// Método Reduce => Permite realizar una operación matemática y devuelve un valor final
/* const totalPuertas = autos.reduce((acumulador, item) => acumulador += item.puertas, 0)
console.log("Total Puertas:", totalPuertas);
const totalAPagar = autos.reduce((acumulador, item) => acumulador += item.precio, 20000)
console.log("Total a Pagar:", totalAPagar); */

/* const productos = [
    {id:1, nombre:"CAMISETA CON ALGODÓN - LINO", precio:18, stock:1, categoria:"camisetas"},
    {id:2, nombre:"CAMISETA METALIZADA", precio:16, stock:2, categoria:"camisetas"},
    {id:3, nombre:"CAMISETA RIB ENCAJE", precio:18, stock:3, categoria:"camisetas"},
    {id:4, nombre:"TOP VOLANTES ZW COLLECTION", precio:36, stock:2, categoria:"camisas"},
    {id:5, nombre:"CAMISA DENIM CHORRERAS ZW COLLECTION", precio:40, stock:2, categoria:"camisas"}
] */

/* const carrito = [
    {id:1, nombre:"CAMISETA CON ALGODÓN - LINO", precio:18, cantidad:1, categoria:"camisetas"},
    {id:2, nombre:"CAMISETA METALIZADA", precio:16, cantidad:2, categoria:"camisetas"},
    {id:3, nombre:"CAMISETA RIB ENCAJE", precio:18, cantidad:1, categoria:"camisetas"},
    {id:4, nombre:"TOP VOLANTES ZW COLLECTION", precio:36, cantidad:1, categoria:"camisas"},
    {id:5, nombre:"CAMISA DENIM CHORRERAS ZW COLLECTION", precio:38, cantidad:1, categoria:"camisas"}
] */

/* const carrito = [];

console.log("Total elementos:", carrito.length);
const totalProductos = carrito.reduce((acumulador, item) => acumulador += item.cantidad, 0)
const totalAPagar = carrito.reduce((acumulador, item) => acumulador += item.precio * item.cantidad, 0)
let total = 0; */

/* carrito.forEach(item => {
    total += item.precio * item.cantidad
}) */

/* for (let i=0; i<carrito.length; i++) {
    total += carrito[i].precio * carrito[i].cantidad
}

console.log("Total a Productos:", totalProductos);
console.log("Total a Pagar: $", totalAPagar);
console.log("Total: $", total); */


// Ejemplo Cómo agregar un producto al carrito?

//console.log(producto);
/* const agregarProductoCarrito = (id) => { //5
    if (tieneStock(id)) {
        //console.log("tiene stock");
        
        let productoCarrito = carrito.find(item => item.id == id);
        let productoCatalogo = productos.find(item => item.id == id);
        console.log(productoCatalogo);
        console.log(productoCarrito); 

        if (productoCarrito) {
            productoCarrito.cantidad++;
        } else {
            productoCatalogo.cantidad = 1;
            carrito.push(productoCatalogo);
        }

        productoCatalogo.stock--;
    }
}

const tieneStock = (id) => {
    const producto = productos.find(item => item.id == id);

    return producto.stock > 0 ? true : false
}

agregarProductoCarrito(5);
agregarProductoCarrito(2);
agregarProductoCarrito(5);
agregarProductoCarrito(1);
agregarProductoCarrito(1);
agregarProductoCarrito(1);

console.log("Productos");
console.log(productos);
console.log("Carrito");
console.log(carrito); */


// Método Sort => Ordena el array a partir de una condición. Modifica el array original
console.log(productos);


// Ordenar por Nombre
/* productos.sort((item1, item2) => {
    if (item1.nombre < item2.nombre) { // Ordenando en forma descendente
        return 1
    } else if (item1.nombre == item2.nombre) {
        return 0
    } else {
        return -1
    }
}) */

// Ordenar por precio
/* productos.sort((item1, item2) => {
    if (item1.precio < item2.precio) { // Ordenando en forma ascendente
        return 1
    } else if (item1.precio == item2.precio) {
        return 0
    } else {
        return -1
    }
}) */


// Metodo reverse => Invierte el orden de los elementos
//productos.reverse();
//console.log(productos);


// Método Join => Generar un string con todos los elementos del array utilizando un caracter concatenador
/* let nombresCompletos = nombres1.join(" ** ");
console.log(nombresCompletos); */


// Cómo crear un número aleatorio
/* const numero = Math.random();
const numero2 = Math.round(Math.random() * 100);
const numeroRandom = Math.random() * 10;
const numero3 = Math.round(numeroRandom) // Redondea para arriba a partir de .5
const numero4 = Math.ceil(numeroRandom) // Redondea para arriba a partir de .5
const numero5 = Math.floor(numeroRandom) // Redondea para arriba a partir de .5
//console.log(numero);
//console.log(numero2);
console.log("Número Random:",numeroRandom);
console.log("Round:",numero3);
console.log("Ceil:",numero4);
console.log("Floor:",numero5); */


/* const apellidos = ["Fernandez", "Martinez", "Garcia", "Gomez"];
const numeroRandom1 = Math.round(Math.random() * (nombres1.length -1));
const numeroRandom2 = Math.round(Math.random() * (apellidos.length - 1));

const nombreYApellido = nombres1[numeroRandom1] + apellidos[numeroRandom2] + ".com";
console.log(nombreYApellido.toLowerCase()); */