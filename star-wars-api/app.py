from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from models import db, People, FavoritePeople, Users

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///starwars.db"
db.init_app(app)

#Crear los endpoints
@app.route("/people")  # Aquí definimos el primer path de la API: GET /
def getPeople():
    all_people = People.query.all()
    all_people = list(map(lambda x: x.serialize(), all_people))
    
    return jsonify(all_people)

@app.route("/people/<int:id>")  # Aquí definimos el primer path de la API: GET /
def getPeopleById(id):
    people = People.query.get(id)
    
    return People.serialize(people)

@app.route("/user/<int:user_id>/favorite/people/<int:people_id>", methods=["POST"])
def addPeopleById(user_id, people_id):
    favorite = FavoritePeople(user_id = user_id, people_id = people_id)
    db.session.add(favorite)
    db.session.commit()
    
    return "Se agregó correctamete el Personaje!"

@app.route("/users")  # Aquí definimos el primer path de la API: GET /
def getUser():
    all_user = Users.query.all()
    all_user = list(map(lambda x: x.serialize(), all_user))
    
    return jsonify(all_user)

@app.route("/users/favorites/<int:id>")  # Aquí definimos el primer path de la API: GET /
def getFavoritesByUser(id):
    favorites_user = FavoritePeople.filter_by(user_id = id)
    
    return FavoritePeople.serialize(favorites_user)

#3 - Iniciamos el servidor
if __name__ == '__main__':
    with app.app_context():
        # Creo la BD
        db.create_all() 
        # Agregar Personajes
        people1 = People(name = "Luke SkyWalker")
        people2 = People(name = "Darth Vader")
        db.session.add(people1)
        db.session.add(people2)
        db.session.commit()
        # Agregar Usuarios
        user1 = Users(name = "Javier Verón")
        user2 = Users(name = "Robert Towers")
        db.session.add(user1)
        db.session.add(user2)
        db.session.commit()
        # Agregar Favoritos a los Usuarios
        fav1 = FavoritePeople(user_id=1, people_id=1)
        #fav2 = FavoritePeople(user_id=2, people_id=1)
        #fav3 = FavoritePeople(user_id=2, people_id=2)
        db.session.add(fav1)
        #db.session.add(fav2)
        #db.session.add(fav3)
        db.session.commit()
    app.run(host='0.0.0.0')