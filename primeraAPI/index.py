from flask import Flask, request, jsonify

app = Flask(__name__)

productos = [
    {"id":1, "nombre":"Coca Cola", "precio":3, "categoria":"gaseosas"},
    {"id":2, "nombre":"Coca Cola Zero", "precio":3.2, "categoria":"gaseosas"},
    {"id":3, "nombre":"Pepsi", "precio":2.9, "categoria":"gaseosas"},
    {"id":4, "nombre":"Soda YY", "precio":2.8, "categoria":"sodas"},
    {"id":5, "nombre":"Soda XX", "precio":1.7, "categoria":"sodas"}
]

@app.route("/productos/", methods=["GET", "POST"])
def listarTodos():
    #return "<h1>Hello World!</h1>"
    if (request.method == "GET"):
        return productos
    elif (request.method == "POST"):
        #print(request.json)
        id = len(productos) + 1
        nombre = request.json["nombre"]
        precio = request.json["precio"]
        nuevoProducto = {"id":id, "nombre":nombre, "precio":precio}
        productos.append(nuevoProducto)
        response = jsonify({"estado":"ok", "mensaje":"Se agregó el Producto #" + str(id)})
        response.status_code = 201
        
        return response
@app.route("/productos/<id>", methods=["GET", "PUT", "DELETE"])
def listarPorId(id):
    """ mensaje = "El id es:" + id
    print(mensaje) #Se imprime en la consonla del VSC
    return mensaje #Se imprime en el Navegador Web """
    if (request.method == "GET"):
        producto = list(filter(lambda item:item["id"] == int(id), productos))

        if (len(producto) > 0):
            return producto
        else:
            response = jsonify({"estado":"eror", "mensaje":"Error! No se encuentra el Producto #" + id})
            response.status_code = 400  # Aquí cambiamos el código de estado a 400 (código muy común en caso de errores de solicitud)
            
            return response
    elif (request.method == "PUT"):
        for producto in productos:
            if (producto["id"] == int(id)):
                producto.update({"nombre":request.json["nombre"], "precio":request.json["precio"]})
                break

        return {"estado":"ok", "mensaje":"Se actualizó el Producto #" + str(id)}
    elif (request.method == "DELETE"):
        for i in range(0, len(productos)):
            if (productos[i]["id"] == int(id)):
                del productos[i]
                break

        return {"estado":"ok", "mensaje":"Se eliminó el Producto #" + str(id)}
    else:
        return {"estado":"eror", "mensaje":"Método no permitido!"}

@app.route("/productos/<id>/sodas")
def listarPorIdYCategoria(id):  
    producto = list(filter(lambda item:item["id"] == int(id) and item["categoria"] == "sodas", productos))

    if (len(producto) > 0):
        return producto
    else:
        return {"estado":"eror", "mensaje":"Error! No se encuentra el Producto #" + id}

app.run(host='0.0.0.0')