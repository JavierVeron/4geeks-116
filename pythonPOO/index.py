# Programación Orientada a Objetos (POO vs OOP)

# Abstracción => Abstraer un conjunto de instrucciones bajo un método de una Clase
""" class Mascota:
    def __init__(self, nombre):
        self.nombre = nombre #Esto es una propiedad
    
    def llamarMascota(self): #Esto es una método
        return f"Mi mascota se llama: {self.nombre}"
    
mascota1 = Mascota("Amy")
mascota2 = Mascota("Benita")
print(mascota1.nombre) #Acceder a la propiedad
print(mascota2.nombre) #Acceder a la propiedad
print(mascota1.llamarMascota()) #Ejecutar el método
print(mascota2.llamarMascota()) #Ejecutar el método
print("Mi mascota se llama: " + mascota1.nombre) #Esta salida la puedo reemplazar directamente con el método llamarMascota """

# Herencia => Heredamos propiedades y métodos de nuestra Clase Padre
""" class Persona:
    def __init__(self, nombre, apellido, pais):
        self.nombre = nombre
        self.apellido = apellido
        self.pais = pais

    def obtenerNombreCompleto(self):
        return f"{self.nombre} {self.apellido} ({self.pais})"


class Programador(Persona):
    def __init__(self, nombre, apellido, pais, salario, compañia):
        super().__init__(nombre, apellido, pais) #Llamar a la clase constuctora de una Clase Padre
        self.salario = salario
        self.compañia = compañia


persona = Persona("Roberto", "Torres", "España")
programador = Programador("Thomas", "Smith", "Estados Unidos", 80000, "Google")
print(persona.obtenerNombreCompleto()) # output: Axel Castro
print(programador.obtenerNombreCompleto()) # output: Thomas Smith
print(programador.nombre) """

# Encapsulación => Proteger propiedades y métodos de una Clase
""" class Casa:
    def __init__(self, area_cuadrada, lugar, precio):
        self.area_cuadrada = area_cuadrada
        self.lugar = lugar
        self.__precio = precio # Proteger/Ocultar la propiedad precio

    def getPrecio(self):
        return self.__precio

    def setPrecio(self, value):
        self.__precio = value

nueva_casa = Casa(35, "Madrid", 150000)
#print(nueva_casa.__precio) # output: 'Casa' object has no attribute '__precio'. Did you mean: 'get_precio'? # No puedo acceder
#print(nueva_casa.getPrecio())  # output: 700000000 # Si puedo acceder a la propiedad
#nueva_casa.lugar = "Valencia"
#nueva_casa.__precio = 200000  # No te permite modificar la propiedad __precio # No modifica la propiedad precio
#print(nueva_casa.lugar)  # output: 700000000 # Mantengo el valor original
#print(nueva_casa.getPrecio())  # output: 700000000 # Mantengo el valor original
nueva_casa.setPrecio(200000) # Modificar el valor de la propiedad a través de su Método
print(nueva_casa.getPrecio())  # output: 400000000 # Nuevo valor """

# Polimorfismo => Capacidad que tiene una Clase Hija de poder redifinir un método heredado de su Clase Padre
class Automovil:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

    def obtenerModelo(self):
        return f"Marca: {self.marca} - Modelo: {self.modelo}"

class AutoFamiliar(Automovil):
    def __init__(self, marca, modelo):
        super().__init__(marca, modelo)

    """ def obtenerModelo(self):
        return f"El auto familiar tiene un modelo: '{self.modelo}'" """


class AutoDeportivo(Automovil):
    def __init__(self, marca, modelo):
        super().__init__(marca, modelo)

    def obtenerModelo(self): # Redefinir el método obtenerModelo (se tiene que llamar exactamente igual el nombre del método)
        return f"El modelo '{self.modelo}' del auto deportivo es el más reciente" 

auto_familiar = AutoFamiliar("Ford", "Familiar 2023")
auto_deportivo = AutoDeportivo("Tesla", "Tesla motors sport")
print(auto_familiar.obtenerModelo()) # output: El auto familiar tiene un modelo: 'Familiar 2023'
print(auto_deportivo.obtenerModelo()) # output: El modelo 'Tesla motors sport' del auto deportivo es el más reciente