// Variables y Constantes
//let nombre; //Declarar la variable "nombre"
//nombre = "Roberto"; // Asignación de un valor a la variable "nombre"

//let nombre = "Roberto"; // Declaración y asignación a la variable "nombre"
//nombre = 123;
/* let edad = 34;
let edad2 = "34";
const nombre2 = "José";
const IVA = 21
const PI = 3.14
//nombre2 = "Diego";
console.log(nombre);
console.log(edad);
console.log(edad2);
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof edad2);
console.log(nombre2);

// Aplicar IVA al precio de un producto
let producto = 100;
let productoConIva = producto + ((producto * IVA) / 100)
console.log(producto);
console.log(productoConIva);

// Sumar un valor a un variable
edad = edad + 10; //44
edad+=10; //54
edad++; //37 55
edad--; //36 54
edad2 = edad2 + 1; // No realizó una suma, hizo una concatenación de caracteres "34" + 1
console.log(edad);
console.log(edad2);

/* let texto = "hola"
let valor = 10;
let resultado = texto + valor
console.log(resultado); */

/* let nombre3 = "Rául" == "Raúl"
let apellido3 = "Ucles"
let espacio = " "
console.log(nombre3 + " " +  apellido3); */

//Booleanos (true / false)
/* let estoyTriste = true
let estoyContento = false
console.log(estoyContento);
console.log(typeof estoyTriste); */

/* var nombre = "Joaquin"
nombre = "Pedro"
console.log(nombre); */


// Tipos de varibles objetos
// Objetos literales
let marca = "Audi"
let modelo = "A3"
let motor = "1.6"
let puertas = 5

// Para la creación de objetos se utilizan llaves, y se definen con clave:valor
// Esto es un objeto
const auto = {
    marca:"Audi", // String o cadena de texto
    modelo:"A3",
    motor:1.6, // Number o Númerico
    puertas:5,
    vendido:false // Boolean o Buleano
} 

auto.modelo = "A4"
auto.motor = 1.8
auto.precio = 30000
auto.precio = 33000
auto["puertas"] = 3

console.log(auto.marca + " " + auto.modelo + " (" + auto.motor + ") " + auto.puertas + " puertas");
console.log(auto);

// Arrays o arreglos o vectores o matrices de una sola dimensiones martrices (x, y) Se definen con corchetes y los valores se separan con comas
/* const nombres = ["Kevin", "Gines", "Nadia", "Julia"];
console.log(nombres);
console.log("Mi nombre es " + nombres[2]);
nombres[1] = "Joaquín"
console.log(nombres);

const bebidas = [
    {id:1, nombre:"Coca Cola", precio:2},
    {id:2, nombre:"Sprite", precio:1.9},
    {id:3, nombre:"Pepsi", precio:1.8}
]
console.log(bebidas);
console.log(bebidas[2].nombre + " $" + bebidas[2].precio);
bebidas[2].precio = 2.1
console.log(bebidas[2].nombre + " $" + bebidas[2].precio); */



// Variables por Copia vs Variables por Referencia
// Variables primitivas (string, number, boolean) son variables por copia (son variables independientes)
/* let nombre = "Roberto"
let nombre2 = nombre
console.log(nombre);
console.log(nombre2);
nombre = "Raúl";
console.log(nombre);
console.log(nombre2); */

// Objetos y Arrays que son variables por referencia
/* const bebida1 = {id:1, nombre:"Coca Cola", precio:2};
const bebida2 = bebida1; // No es la copia, es la "referencia" del objeto bebida1
console.log(bebida1);
console.log(bebida2);
bebida1.precio = 1.8
bebida2.nombre = "Pepsi"
console.log(bebida1);
console.log(bebida2);
// Operador Spread (desparrama todas las propiedades o valores un objeto u array original)
const bebida3 = {...bebida1, nombre:"Sprite", categoria:"gaseosas"} // Desparrar todas las propiedades del objeto bebida1 en bebida3 (es un objeto nuevo)
bebida3.precio = 5
//bebida3.nombre = "Coca Cola Zero"
console.log(bebida1);
console.log(bebida3); */

// Arrays
/* const nombres1 = ["Kevin", "Gines", "Nadia", "Julia"];
const nombres2 = nombres1; // Tengo la referencia del array nombres1 en nombres2
console.log(nombres1);
console.log(nombres2);
nombres1[0] = "Roberto";
console.log(nombres1);
console.log(nombres2);
const nombres3 = ["Francisco", "Diego", ...nombres1]; // Desparrar todos los elementos del array nombres1 en el array nombres3 (es un array nuevo)
console.log(nombres1);
//nombres3[0] = "Marta"
nombres3[5] = "Juan"
console.log(nombres3); */

// Funciones (existen 3 opciones)
// Opción #1 => Utilizando la palabra reservada function (clásica)
/* function aplicarIVA (valor) {
    let resultado = valor * 1.21;

    return resultado
} */

// Opción #2 => Funciones anónimas (función sin nombre)
/* const aplicarIVA = function(valor) {
    return valor * 1.21;
} */

// Opción #3 => Funciones fleces o arrow functions (No se utiliza la palabra función, sino "=>")
const aplicarIVA = (valor) => {
    return valor * 1.21;
}

//aplicarIVA = "Diego"
//console.log(typeof aplicarIVA);

let importeConIVA = aplicarIVA(2000)
console.log("Importe Con IVA: $", importeConIVA);
console.log("Importe Con IVA: $", aplicarIVA(2000));










