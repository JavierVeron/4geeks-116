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

// Opción #3 => Funciones flecha o arrow functions (No se utiliza la palabra función, sino "=>")
const aplicarIVA = (valor) => {
    return valor * 1.21;
}

//aplicarIVA = "Diego"
//console.log(typeof aplicarIVA);

/* let importeConIVA = aplicarIVA(2000)
console.log("Importe Con IVA: $", importeConIVA);
console.log("Importe Con IVA: $", aplicarIVA(2000)); */


// IF (condición)
/* let edad = 14

if (edad >= 18) {
    alert("Puedes tomar alcohol!")
} */

// IF..ELSE (condición)
/* let edad = 24 */

/* if (edad >= 18) {
    alert("Puedes tomar alcohol!")
} else {
    alert("No, no puedes tomar alcohol!")
} */

/* if (edad < 18) {
    alert("No, no puedes tomar alcohol!")
} else {
    alert("Puedes tomar alcohol!")
} */


// IF.. ELSE IF.. ELSE (condición)
/* let temperatura = 40

if (temperatura <= 10) {
    alert("Hace mucho frío!")
} else if (temperatura <= 20) {
    alert("Está fresco!")
} else if (temperatura <= 25) {
    alert("Está agradable clima!");
} else if (temperatura <= 35) {
    alert("Hace calor!");
} else {
    alert("Ola de calor. No salgas de tu casa!")
} */


// Operador == (es igual a que) => comparar valores
/* let color = "ROJo";
color = color.toLowerCase(); // rojo

if (color == "rojo") {
    alert("Tu coche es de color rojo!")
} */

// Operador != (es distinto a que) => comparar valores distintos
/* let color = "amarillo"

if (color != "negro") {
    alert("Estaís llevando ropa de color distinta a negro!")
} */

// Operador === (es igual a que) => compara valores y tipo de datos => más restrictiva
/* let edad = "18"

if (edad === 18) {
    alert("Eres mayor de edad!")
} */

// Operador !== (es distinto a que) => comparar valores distintos y distintos tipo de datos
/* let peso = 80

if (peso !== "80") {
    alert("Estaís delgado!")
} */

// Operador AND (&&)
// V && V => V
// V && F => F
// F && V => F
// F && F => F

/* let edad = 10
let dinero = 2
let cerveza = 3

if ((edad >= 18) && (dinero >= cerveza)) {
    alert("Puedes tomar alcohol!")
} else {
    alert("No puedes tomar alcohol!")
} */

// Operador OR (||)
// V || V => V 
// V || F => V
// F || V => V
// F || F => F

/* let edad = 19
let dinero = 2
let cerveza = 3

if ((edad >= 18) || (dinero >= cerveza)) {
    alert("Puedes tomar alcohol!")
} else {
    alert("No puedes tomar alcohol!")
} */

// Operador NOT (!) => -(-1) = 1
//let isLoggedIn = {id:1, nombre:"Kevin", email:"kevin@gmail.com"}
/* let isLoggedIn = null

if (!isLoggedIn) {
    alert("No estás Logueado al Sistema!")
} */


// Operador switch (es equivalente a if.. else if .. else)
let color = "rojo"

/* if (color == "rojo") {
    alert("Has seleccionado el color rojo!");
} else if (color == "verde") {
    alert("Has seleccionado el color verde!");
} else if (color == "azul") {
    alert("Has seleccionado el color azul!");
} else {
    alert("Has seleccionado otro color!");
} */

/* switch(color) {
    case "rojo":
        alert("Has seleccionado el color rojo!");
        break;
    case "verde":
        alert("Has seleccionado el color verde!");
        break;
    case "azul":
        alert("Has seleccionado el color azul!");
        break;
    default:
        alert("Has seleccionado otro color!");
} */


// Estructuras de iteración o bucles
//console.log("Inicio de Programa");

/* for (let i=0; i<10; i++) {
    console.log("Número #" + i);   
} */


// Break y Continue
/* for (let i=1; i<=20; i++) {
    if (i == 10) {
        console.log("Corte del ciclo!");
        break;
    }
    
    if (i == 5) {
        console.log("Salto del ciclo!");
        continue;
    }
    
    console.log("Número #" + i);
} */

//console.log("Fin de Programa");


// Otros ejemplos
const autos = ["Audi", "BMW", "Citroen", "Fiat", "Mercedes", "Peugeot", "Volkswagen"];

// Opción #1 => Utlizando for
/* for (let i=0; i<autos.length; i++) {
    console.log("#1- " + autos[i]);
} */

// Opción #2 => Utlizando el método foreach
/* autos.forEach(indice => {
    console.log("#2- " + indice);
}) */

// Opción #3 => Utlizando la función FOR OF (for..of) => válido para los arrays
/* for (const elemento of autos) {
    console.log("#3- " + elemento);
} */

// FOR.. IN => válido para los objetos
/* for (const clave in auto) {
    console.log("Clave: " + clave + " - Valor: " + auto[clave]);
} */

// While => Permite iterar infinitamente, pero es necesario definir una condición de corte
/* let numero = 0
let maximo = 20

while (numero < maximo) {
    console.log("Número #" + numero);
    
    if (numero == 10) {
        console.log("Corte del ciclo!");
        break;
    }
    
    numero++;
} */


// Cómo seleccionar elementos html desde JS?
// getElementById => Busca el primer elemento html que coincida con ese id
/* const joaquin = document.getElementById("encabezado")
console.log(joaquin);
joaquin.className = "display-3 fw-bold bg-dark text-white p-3"
joaquin.title = "Marta me ha hecho una pregunta"
joaquin.innerHTML = "Joaquín"

const parrafo = document.getElementById("parrafo");
parrafo.innerHTML = '<div class="alert alert-light" role="alert">Esto es un párrafo!</div>'; */


// Operador Ternario (if..else)
let edad = 24;

/* if (edad >= 18) {
    alert("Puedes tomar alcohol!")
} else {
    alert("No, no puedes tomar alcohol!")
} */

//(condicion) ? verdadero : falso
//(edad >= 18) ? alert("Puedes tomar alcohol!") : alert("No, no puedes tomar alcohol!")
//alert(edad >= 18 ? "Puedes tomar alcohol!" : "No, no puedes tomar alcohol!")

/* const puedesTomarAlcohol = edad >= 18 ? true : false
alert(puedesTomarAlcohol ? "Puedes tomar alcohol!" : "No, no puedes tomar alcohol!") */

//let temperatura = 4

/* if (temperatura <= 10) {
    alert("Hace mucho frío!")
} else if (temperatura <= 25) {
    alert("Está agradable clima!");
} else if (temperatura <= 35) {
    alert("Hace calor!");
} else {
    alert("Ola de calor. No salgas de tu casa!")
} */

/* temperatura <= 10 ? alert("Hace mucho frío!") : temperatura <= 25 ? alert("Está agradable clima!") : temperatura <= 35 ? alert("Hace calor!") : alert("Ola de calor. No salgas de tu casa!"); */

// Variable local y global
let valor = 10; // Variable global

function multiplicarPor2() {
    let valor = 4; // Variable local
    let nombre = "Robert Towers"
    
    return valor * 2
}

//console.log(nombre);
console.log("Variable Valor: " + valor);
console.log("Ejecuto la función: " + multiplicarPor2());

