from flask import Flask, request
from sqlalchemy.orm import Mapped, mapped_column
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////C:/xampp/htdocs/4geeks/primeraAPI/4geeks.db"
db = SQLAlchemy(app)

class Productos(db.Model):
    __tablename__ = "productos"
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250), nullable=False)
    precio = db.Column(db.Integer(10), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "precio": self.precio
        }

# Agregamos un nuevo Registro a la BD
producto = Productos(nombre="Sprite", precio=2.5)
db.session.add(producto)
db.session.commit()

app.run(host='0.0.0.0')