def sumar(a, b):
    return a + b

def restar(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

# Función de orden superior (función que puede recibir un valor o función como parámetro y puede devolver un valor o una función como resultado)
def operacion(tipo):
    def suma(a, b):
        return a + b
    def resta(a, b):
        return a - b

    if (tipo == "suma"):
        return suma
    elif (tipo == "resta"):
        return resta