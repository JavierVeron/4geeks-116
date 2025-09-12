# Mi primer comentario
# Variables primitivas
""" nombre = "Roberto"
nombre = "Nadia"
APELLIDO = "Torres"
APELLIDO = "Towers" # Se puede pisar constantes en Python
edad = 35
edad = "35"
edad = "24"
print("Hola, soy " + nombre + " " + APELLIDO + " y tengo " + edad + " años!") """

# Arrays
""" nombres = ["Kevin", "Genis", "Julia", "Nadia", "Joaquín"]
valor = nombres[1]
print(nombres[6]) """

# Objetos
# Como lo trabajamos en JavaScript
""" class Auto {
    constructor(nombre) {
        this.nombre = nombre
    }
}

let auto = new Auto("azul") """

# Como definimos un Objeto (Class) en Python
""" class Car(object):
    def __init__(self, color):
        self.color = color

myCar = Car('blue')
print(myCar.color) """

# Operación matemática básica
""" result = int('5') - int('2')  # Ahora "result" es igual a 3
print(result) """

# Función lambda (equivalente a la función flecha de JS)
""" people_list = [{"name": "Mario Peres"}, {"name": "Emilio Peres"}, {"name": "Yusaiba Peres"}]
returning_map_object = map(lambda obj: obj['name'], people_list)
names_list = list(returning_map_object)
print(names_list) """

# Recorrer (iterar) arrays 
nombres = ["Julia", "Kevin", "Genis", "Julia", "Nadia", "Joaquín"]

""" for nombre in nombres:
    print("Hola, soy", nombre) """

# Recorrer (iterar) objetos
""" countries_capital = {
    "USA": "Washington D.C.",
    "Australia": "Canberra",
    "France": "Paris",
    "Egypt": "Cairo",
    "Japan": "Tokyo"
}

for country in countries_capital.values():
    print(country) """

# Recorrer arrays por posición, el último parámetro no es inclusivo (for tradicional de JS)
""" for i in range(0, len(nombres)):
    print("Hola, soy", nombres[i]) """

# Recorrer arrays por posición, el segundo parámetro no es inclusivo, el tercero es el salto
""" for i in range(0, len(nombres), 2):
    print("Hola, soy", nombres[i]) """

# Agregar/Eliminar elementos en un Array
# Agrega un elemento al final del array
""" nombres.append("Roberto")
print(nombres) """
# Insertar un elemento en una posición dada
""" nombres.insert(1, "Marta")
print(nombres) """
# Editar un elemento en una posición dada
""" nombres[0] = "José"
print(nombres) """
# Elimina el primer elemento encontrado en el array
""" nombres.remove("Julia")
print(nombres) """
# Eliminar el último elemento del array
""" nombreEliminado = nombres.pop()
print(nombres)
print("Nombre Eliminado:", nombreEliminado) """
# Eliminar 1 o varios elementos por posición (la última posición no es inclusiva)
""" del nombres[2:4]
print(nombres) """

# Ordenar arrays
""" number_list = [5, 2, 3, 1, 4]
number_list.sort()
nombres.sort()
print(number_list)  # [1, 2, 3, 4, 5]
print(nombres) """

""" countries_capital = {
    "USA": "Washington D.C.",
    "Australia": "Canberra",
    "France": "Paris",
    "Egypt": "Cairo",
    "Japan": "Tokyo",
    "España": "Madrid"
}
countries = [{"pais":"USA"}, {"pais":"Australia"}, {"pais":"France"}, {"pais":"España"}]
print(countries)
countries.sort(key=lambda person: person['pais'])
print(countries) """

# Objetos y Clases
""" my_dict = {}
my_dict['name'] = "Mario"
my_dict['lastname'] = "Perez"
print(my_dict) """

# Así es como se declara y usa una clase
""" class Person:
    def __init__(self):
        self.name = ''
        self.lastname = ''

my_person1 = Person()
my_person1.name = "Mario"
my_person1.lastname = "Perez"
my_person2 = Person()
my_person2.name = "Robert"
my_person2.lastname = "Towers"
print(my_person1.name + " " + my_person1.lastname)
print(my_person2.name + " " + my_person2.lastname) """

# Condicionales
# Condicionales en JS
""" if (valor == "algo") {
    console.log("Sí")
} else {
    console.log("No")
} """

# Condicionales en Python
edad = 13
tengoDinero = False

""" if (edad >= 18):
    print("Eres mayor de edad!")
else:
    print("Eres menor de edad!") """

# is
""" if (edad is 24):
    print("Eres mayor de edad!")
else:
    print("Eres menor de edad!") """

# isNot
""" if (edad is not 34):
    print("Eres mayor de edad!")
else:
    print("Eres menor de edad!") """


# Operadores AND y OR
# AND
""" print(True and True) #True
print(True and False) #False
print(False and True) #False
print(False and False) #False """
# OR
""" print(True or True) #True
print(True or False) #True
print(False or True) #True
print(False or False) #False """

""" if (edad >= 18 and tengoDinero):
    print("Puedo tomar alcohol!")
else:
    print("No puedo tomar alcohol :(") """

# else..if
""" if (edad < 18):
    print("Preguntale a tus padres si puedes tomar alcohol!")
elif ((edad >= 18) and (edad <= 21)):
    print("Tienes que pedirle dinero a papá!")
else:
    print("Si tienes dinero, puedes tomar todo el alchol que tu quieras! :D") """
