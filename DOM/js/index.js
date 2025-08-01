// Devuelve un un Elemento HTML (busca por ID)
const encabezado = document.getElementById("encabezado");
/* encabezado.innerHTML = "4Gee<span class='text-info'>k</span>s Academy";
//encabezado.innerText = "4Gee<span class='text-info'>k</span>s Academy";
//encabezado.innerHTML = "4Geeks Academy";
//encabezado.innerText = "4Geeks Academy";
//encabezado.className = encabezado.className + " bg-dark p-3"
encabezado.classList.add("bg-dark");
encabezado.classList.add("p-3");
encabezado.classList.add("fw-bold");
encabezado.classList.remove("text-info");
encabezado.classList.add("text-white");
console.log(encabezado);

const letraK = encabezado.children[0];
console.log(letraK);
letraK.className = "text-danger";

document.getElementById("encabezado").innerHTML = "Marina Fernandez"
document.getElementById("encabezado").className = "text-secondary" */

// Represetando CSS desde JavaScript
//color:pink; background-color: blueviolet; padding:10px
/* encabezado.style.color = "pink";
encabezado.style.backgroundColor = "blueviolet";
encabezado.style.padding = "10px";
encabezado.style.textTransform = "uppercase";
encabezado.style.fontWeight = "bold"; */

// Devuelve un Array con un conjunto de Elementos HTML (busca por clase)
/* const paises = document.getElementsByClassName("paises");
console.log(paises);
paises[2].innerHTML = "Alemania" */

// Devuelve un Array con un conjunto de Elementos HTML (busca por etiqueta html)
/* const paises = document.getElementsByTagName("li");
console.log(paises);
paises[4].innerHTML = "Alemania" */

// Devuelve un Array con un conjunto de Elementos HTML (busca por atributo name)
/* const sexo = document.getElementsByName("sexo");
console.log(sexo);
sexo[2].value = "No Binario" */

// QueySelectorAll => Otra forma de seleccionar elementos html pero más específico
/* const paises = document.querySelectorAll("li.paises");
console.log(paises); */

/* const paises = document.getElementById("paises")
const pais1 = document.createElement("li");
pais1.innerHTML = "Rumania";
const pais2 = document.createElement("li");
pais2.innerHTML = "Bulgaria";
const pais3 = document.createElement("li");
pais3.innerHTML = "Gran ";
const texto = document.createElement("b");
texto.innerHTML = "Bretaña";
pais3.appendChild(texto);
paises.appendChild(pais1);
paises.appendChild(pais2);
paises.appendChild(pais3); */

const listaPaises = [
    {pais:"España", titulos:1},
    {pais:"Italia", titulos:4},
    {pais:"Alemania", titulos:4},
    {pais:"Francia", titulos:2}
]
const tabla = document.createElement("table");
tabla.className = "table"
const thead = document.createElement("thead")
const tbody = document.createElement("tbody")
thead.innerHTML = `<tr>
      <th scope="col">País</th>
      <th scope="col">Títulos</th>`;
tabla.appendChild(thead);

/* listaPaises.forEach(item => {
    const fila = document.createElement("tr");
    const columna1 = document.createElement("td");
    const columna2 = document.createElement("td");
    columna1.innerHTML = item.pais;
    columna2.innerHTML = item.titulos;
    fila.appendChild(columna1);
    fila.appendChild(columna2);
    tbody.appendChild(fila);
}) */

/* let contenido = ""

for (const item of listaPaises) {
    contenido += `<tr>
    <td><b>${item.pais}</b></td>
    <td>${item.titulos}</td>
    </tr>`
}

tbody.innerHTML = contenido;
tabla.appendChild(tbody);
document.getElementById("contenido").appendChild(tabla) */

const paises = document.getElementById("paises")
document.body.removeChild(paises)


// Opción #1 => Formulario con botón del tipo "button"
/* const validarFormulario = () => {
    const formularioLogin = document.getElementById("formularioLogin")
    const email = document.getElementById("email");
    const contrasena = document.getElementById("contrasena");
    const emailError = document.getElementById("emailError");
    const contrasenaError = document.getElementById("contrasenaError");

    if (email.value == "") {
        emailError.innerHTML = "Error! El campo Email está vacío!"
        emailError.className = "text-danger"
        return false;
    } else {
        emailError.innerHTML = "";
    }

    if (contrasena.value == "") {
        contrasenaError.innerHTML = "Error! El campo Contraseña está vacío!"
        contrasenaError.className = "text-danger"
        return false;
    } else {
        contrasenaError.innerHTML = "";
    }

    formularioLogin.submit();
} */

// Opción #2 => Formulario con botón del tipo "submit"
const validarFormulario = (event) => {
    event.preventDefault(); // Detener el envío del Formulario
    const formularioLogin = document.getElementById("formularioLogin")
    const email = document.getElementById("email");
    const contrasena = document.getElementById("contrasena");
    const emailError = document.getElementById("emailError");
    const contrasenaError = document.getElementById("contrasenaError");

    if (email.value == "") {
        emailError.innerHTML = "Error! El campo Email está vacío!"
        emailError.className = "text-danger"
        return false;
    } else {
        emailError.innerHTML = "";
    }

    if (contrasena.value == "") {
        contrasenaError.innerHTML = "Error! El campo Contraseña está vacío!"
        contrasenaError.className = "text-danger"
        return false;
    } else {
        contrasenaError.innerHTML = "";
    }

    formularioLogin.submit();
}

const saludar = () => {
    alert("Hola Chicos!")
}

const despedir = () => {
    alert("Adiós Chicos!")
}

// Opción #1 => Utilizando el método AddEventListener
//encabezado.addEventListener("click", saludar);
/* encabezado.addEventListener("click", () => {
    saludar();
    despedir();
}); */

// Opción #2 => Modificando la propiedad OnClick
/* encabezado.onclick = () => {
    saludar();
    despedir();
} */

const email = document.getElementById("email");

const contarCaracteres = () => {
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    emailError.innerHTML = `Caracteres: ${email.value.length}`;
}

// Agregando Eventos
email.addEventListener("input", contarCaracteres)
email.addEventListener("keydown", () => {
    console.log("Estas presionando una tecla!")
})
email.addEventListener("keyup", () => {
    console.log("Estas soltando una tecla!")
})
email.addEventListener("mouseover", () => {
    console.log("Ingresó el Mouse!");
})
email.addEventListener("mouseleave", () => {
    console.log("Salió el Mouse!");
})
email.addEventListener("mousedown", () => {
    console.log("Presionaste el botón izquierdo del Mouse!");
})
email.addEventListener("mouseup", () => {
    console.log("Soltaste el botón izquierdo del Mouse!");
})

// Quitando Eventos
email.removeEventListener("input", contarCaracteres)