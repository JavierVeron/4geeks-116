let peso = parseFloat(prompt("Ingrese su Peso:")); // Variable global
let altura = parseFloat(prompt("Ingrese su Altura:"))

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function composicionCorporal(imc) {
    let estado;

    if (imc < 18.5) {
        estado = "Peso inferior al normal";
    } else if (imc >= 18.5 && imc <= 24.9) {
        estado = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        estado = "Peso superior al normal";
    } else {
        estado = "Obesidad";
    }

    return estado;
}

let imc = calcularIMC(peso, altura);
let estado = composicionCorporal(imc)
console.log("Estado:", estado);
console.log("IMC:", imc);

document.getElementById("imc").innerHTML = `Peso: ${Math.round(imc)}`;
document.getElementById("estado").innerHTML = `Estado:
<br><br>
${estado.toUpperCase()}`;

console.log(`Estado:

${estado.toUpperCase()}`);



/*function tomarAlcohol(edad) {
    if (edad >= 18) {
        return "Puedes tomar alcohol!"
    } else {
        return "No, no puedes tomar alcohol!"
    }
}

function tomarAlcohol(edad) {
    if (edad >= 18) {
        return "Puedes tomar alcohol!"
    }

    return "No, no puedes tomar alcohol!"
}

function tomarAlcohol(edad) {
    return edad >= 18 ? "Puedes tomar alcohol!" : "No, no puedes tomar alcohol!"
}

const tomarAlcohol = (edad) => {
    return edad >= 18 ? "Puedes tomar alcohol!" : "No, no puedes tomar alcohol!"
}*/


function numberIsDivisible(num) {
  if (num > 0) {
    if (num % 2 === 0) {
      if (num % 3 === 0) {
        return "Divisible by 2 and 3";
      } else {
        return "Divisible by 2";
      }
    } else {
      if (num % 3 === 0) {
        return "Divisible by 3";
      } else {
        return "Not divisible by 2 or 3";
      }
    }
  } else {
    return "Number is not positive";
  }
}


function numberIsDivisible(num) {
    if (num == 0) {
        return "Number is not positive";
    }

    if ((num % 2 === 0) && (num % 3 === 0)) {
        return "Divisible by 2 and 3";
    }

    if (num % 2 === 0) {
        return "Divisible by 2";
    }

    if (num % 3 === 0) {
        return "Divisible by 3";
    }


}


numberIsDivisible(9)

function isOldEnoughToDrive(age) {
    if (age >= 16) {
        return "Yes"    
    } else {
        return "No";
    }
}


function isOldEnoughToDrive(age) {
    if (age >= 16) return "Yes"
  
    return "No";
}


function isOldEnoughToDrive(age) {
    return age >= 16 ? "Yes" : "No";
}

const isOldEnoughToDrive = (age) => (age >= 16 ? "Yes" : "No");