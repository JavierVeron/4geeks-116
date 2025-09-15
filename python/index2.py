""" #operacion = "Suma" #Variable global

def sumar(valor1, valor2, valor3):
    nombre = "Sumar" #Variable local
    resultado = valor1 + valor2 + valor3 
    return resultado

resultadoSuma = sumar(10, 20, 30)
print("Resultado:", resultadoSuma)
print("Resultado: " + str(resultadoSuma))
print(f"Resultado: {resultadoSuma}")
#print(nombre) """

# Importar y exportar Funciones
""" #import operaciones
from operaciones import sumar as suma, multiplicar as multi

#resultado = operaciones.multiplicar(10, 20)
#resultado = suma(20, 30)
resultado = multi(20, 30)
print(resultado) """

# Funciones lambda (equivalentes a arrow functions en JS)
# lambda varible : expresion
""" suma = lambda val1, val2 : val1 + val2
resultado = suma(20, 50)
print(resultado) """

# Declaramos un array de Numeros
numeros = [20, 10, 30, 50]

# MAP
""" numerosPor3 = list(map(lambda num : num * 3, numeros))
print(numerosPor3) """

# FILTER
""" numerosFiltrados = list(filter(lambda item : item != 10, numeros))
print(numerosFiltrados) """

""" productos = [
    {id:1, "nombre":"Coca Cola", "precio":3},
    {id:2, "nombre":"Pepsi", "precio":2.5},
    {id:3, "nombre":"Coca Cola Zero", "precio":3.2},
    {id:4, "nombre":"Sprite", "precio":3}
]

print("Total: " + str(len(productos)))
productosFiltrado = list(filter(lambda item : item["precio"] == 3, productos))
print(productosFiltrado) """

# Funciones anidadas
""" from operaciones import sumar, multiplicar

resultado1 = multiplicar(10, 20)
resultado2 = sumar(resultado1, multiplicar(20, 30))
print(resultado2) """


# Llamar a una función de orden superior
from operaciones import operacion

funcionSuma = operacion("suma")
funcionResta = operacion("resta")
resultadoSuma = funcionSuma(20, 30)
resultadoResta = funcionResta(20, 30)
print(resultadoSuma, resultadoResta)