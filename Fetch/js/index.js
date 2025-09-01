// JS ejecuta por defecta en forma síncrona
/* function correPrimero(){
    console.log("primero");
    correTercero();
}

function correSegundo(){
    console.log("segundo");
}

function correTercero(){
    console.log("tercero");
}

correSegundo();
correPrimero(); */


// Ejecutar funciones asíncronas
/* console.log("1- Inicio del Proceso");

setTimeout(() => {
    console.log("2- Mitad del Proceso #1");
}, 3000)

setTimeout(() => {
    console.log("2- Mitad del Proceso #2");
}, 2000)

setTimeout(() => {
    console.log("2- Mitad del Proceso #3");
}, 1000)

console.log("3- Fin del Proceso"); */


// Promesas (3 estados)
// Estado Pending (pendiente) [por defecto]
// Estado Fullfilled (completado)
// Estado Rejected (rechazado)

// Definir una promesa
/* const promesa = new Promise((resolve, reject) => {
    //console.log("Estoy en la promesa");
    resolve("Vamos al Cine!"); // Resolver o completar la promesa (pasaría su estado a fullfilled)
    //reject("No, este fin de semana, no nos podemos ver!!! (mi novia no me deja)"); // Rechazar la promesa (pasaría su estado a rejected)
});

// Ejecutando la promesa
promesa
.then(valor => {
    console.log("Promesa completada!");
    console.log(valor);    
})
.catch(error => {
    console.log("Promesa rechazada!");
    console.log(error);
}) */


// Definir una función que devuelva una Promesa
/* const PromoCine = (cupon) => {
    return new Promise((resolve, reject) => {
        if (cupon.toUpperCase() == "GRATIS") {
            resolve("TIENES 1 ENTRADA GRATIS!")
        } else {
            reject("CUPÓN INVÁLIDO!")
        }
    }) 
}

PromoCine("kaka")
.then(resultado => {
    console.log(resultado);
})
.catch(resultado => {
    console.log(resultado);
})
.finally(() => { // Se ejecuta en última instancia independientemente si se completa o no la promesa
    console.log("Proceso terminado!");
}) */


// Llamar a una API
function listarProductos() {
    const contenido = document.getElementById("contenido");
    let contenidoHTML = "";

    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        data.forEach(elemento => {
            contenidoHTML += `<div class="col-md-3">
            <div class="card border-0">
            <img src="${elemento.image}" class="card-img-top" alt="${elemento.title}">
            <div class="card-body">
                <h5 class="card-title">${elemento.title}</h5>
                <p class="card-text">$${elemento.price}</p>
            </div>
            </div>
            </div>`;
        });
    })
    .catch(error => {
        contenidoHTML = `<div class="alert alert-danger" role="alert">Error con la conexión de la API. Intente más tarde.</div>`
    })
    .finally(() => {
        contenido.innerHTML = contenidoHTML;
    });
}

//listarProductos();

// ASYNC..AWAIT
/* async function listarProductos2() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
}
    
listarProductos2(); */

// Ejecutando 3 promesas en forma simultánea
function promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy resuelta como 1");
        }, 3000);
    });
}

function promise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy resuelta como 2");
        }, 2000);
    });
}

function promise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy resuelta como 3");
        }, 1000);
    });
}

/* async function handlingAllPromises() {
    let first = await promise1();
    let second = await promise2();
    let third = await promise3();

    console.log(first);
    console.log(second);
    console.log(third);
}

handlingAllPromises(); */

// Ejecutamos de una forma más simplificada con Promise.all()
/* async function handlingAllPromises() {
    let [first, second, third] = await Promise.all([promise1(), promise2(), promise3()]);
    console.log(first);
    console.log(second);
    console.log(third);
}

handlingAllPromises(); */

// Try..Catch..Finally
/* async function listarProductos2() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);      
    }
}

listarProductos2(); */

/* async function listarProductos2() {
    const contenido = document.getElementById("contenido");
    let contenidoHTML = "";

    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        data.forEach(elemento => {
            contenidoHTML += `<div class="col-md-3">
            <div class="card border-0">
            <img src="${elemento.image}" class="card-img-top" alt="${elemento.title}">
            <div class="card-body">
                <h5 class="card-title">${elemento.title}</h5>
                <p class="card-text">$${elemento.price}</p>
            </div>
            </div>
            </div>`;
        });
    } catch (error) {
        contenidoHTML = `<div class="alert alert-danger" role="alert">Error con la conexión de la API. Intente más tarde.</div>`;   
    } finally {
        contenido.innerHTML = contenidoHTML;
    }
}

listarProductos2(); */


async function postearProducto() {
    try {
        const nombre = document.getElementById("nombre").value;
        const precio = document.getElementById("precio").value;
        const resultado = document.getElementById("resultado");
    
        const producto = {nombre, precio}; // Crear el objeto Producto (objeto javascript)
        const response = await fetch("https://fakestoreapi.com/products", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(producto) // convertir el objeto javascript a formato json (formato texto)
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        
        if (response.status == 201) {
            resultado.innerHTML = `<div class="alert alert-success" role="alert">Los datos fueron Posteados correctamente!</div>`;
        }
    } catch (error) {
        resultado.innerHTML = `<div class="alert alert-danger" role="alert">Error! Los datos NO FUERON Posteados correctamente!</div>`;
    }
}

// LLAMADAS DE API
/*
[GET] /URL_API/PRODUCTS => TRAE TODOS LOS PRODUCTOS
[GET] /URL_API/PRODUCTS/{ID} => TRAE EL PRODUCTO #{ID}
[POST] /URL_API/PRODUCTS => AGREGAR UN NUEVO PRODUCTO, EL NÚMERO DE #ID LO DEVUELVE LA API
[PUT] /URL_API/PRODUCTS/{ID} => ACTUALIZAR EL PRODUCTO #{ID}
[DELETE] /URL_API/PRODUCTS/{ID} => ELIMINAR EL PRODUCTO #{ID}
*/

async function crearUsuario() {
    try {
        const nombre = document.getElementById("nombre").value;
        const resultado = document.getElementById("resultado");
    
        const response = await fetch("https://playground.4geeks.com/todo/users/" + nombre, {
            method: 'POST'
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        
        if (response.status == 201) {
            resultado.innerHTML = `<div class="alert alert-success" role="alert">Los datos fueron Posteados correctamente!</div>`;
        }
    } catch (error) {
        resultado.innerHTML = `<div class="alert alert-danger" role="alert">Error! Los datos NO FUERON Posteados correctamente!</div>`;
    }
}

async function listarUsuarios() {
    const resultado = document.getElementById("resultado");
    const response = await fetch("https://playground.4geeks.com/todo/users/");
    const data = await response.json();
    let contenidoHTML = "<ul class='list-group'>";
    console.log(data);

    for (const item of data.users) {        
        contenidoHTML += `<li class="list-group-item">#${item.id}- ${item.name}</li>`;
    }

    contenidoHTML += "<ul class='list-group'>";
    resultado.innerHTML = contenidoHTML;
}

async function crearTarea() {
    const tarea_nombre = document.getElementById("tarea_nombre").value;
    const tarea_completada = document.getElementById("tarea_completada").value;
    const resultado_tareas = document.getElementById("resultado_tareas");
    const tarea = {
        label:tarea_nombre,
        is_done:(tarea_completada == "true" ? true : false)
    };
    //console.log(tarea);

    const response = await fetch("https://playground.4geeks.com/todo/todos/javierveron/", {
        method:"POST",
        headers: { 'Content-Type': 'application/json' }, 
        body:JSON.stringify(tarea)
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    listarTareas();      
}

async function listarTareas() {
    const resultado_tareas = document.getElementById("resultado_tareas");
    const response = await fetch("https://playground.4geeks.com/todo/users/javierveron");
    const data = await response.json();
    let contenidoHTML = "<ul class='list-group'>";
    console.log(data);

    for (const item of data.todos) {        
        contenidoHTML += `<li class="list-group-item">#${item.id}- ${item.label}</li>`;
    }

    contenidoHTML += "<ul class='list-group'>";
    resultado_tareas.innerHTML = contenidoHTML;
}

listarUsuarios();
listarTareas();